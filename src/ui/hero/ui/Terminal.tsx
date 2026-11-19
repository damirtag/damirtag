"use client";

import React from "react";
import { useTerminal } from "@/shared/hooks/useTerminal";
import { QUICK_COMMANDS } from "@/shared/hooks/terminal.constants";
import { TerminalWindowIcon } from "@phosphor-icons/react";

export const TerminalPanel: React.FC = () => {
    const { lines, input, setInput, handleKeyDown, focusInput, scrollRef, inputRef } =
        useTerminal();

    return (
        <div
            className="px-box relative flex flex-col h-[440px] w-full text-lg overflow-hidden"
            onClick={focusInput}
        >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-phos-700 bg-ink-800 shrink-0">
                <TerminalWindowIcon size={18} weight="duotone" className="text-phos-400" />
                <span className="font-pixel text-[10px] text-neutral-400">DAMIR.TOP — ZSH</span>
                <span className="ml-auto flex gap-1.5">
                    <span className="w-3 h-3 bg-ink-700" />
                    <span className="w-3 h-3 bg-ink-700" />
                    <span className="w-3 h-3 bg-phos-500" />
                </span>
            </div>

            {/* Quick command chips */}
            <div className="flex flex-wrap gap-1.5 px-4 pt-3 pb-1 shrink-0">
                {QUICK_COMMANDS.map((cmd) => (
                    <button
                        key={cmd}
                        onClick={(e) => {
                            e.stopPropagation();
                            setInput(cmd);
                            inputRef.current?.focus();
                        }}
                        className="px-2.5 py-0.5 text-lg border-2 border-phos-700 text-phos-400 hover:bg-phos-500 hover:text-ink-950 transition-colors duration-150 cursor-pointer"
                    >
                        {cmd}
                    </button>
                ))}
            </div>

            {/* Output area */}
            <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto px-4 pt-2 pb-1 scrollbar-thin scrollbar-thumb-phos-500/20 scrollbar-track-transparent">
                {lines.map((line, i) => (
                    <div key={i} className={lineClassName(line.type)}>
                        {line.type === "input" ? (
                            <>
                                <span className="text-phos-400">
                                    {line.content.startsWith("$ ")
                                        ? line.content.slice(0, 2)
                                        : ""}
                                </span>
                                <span className="text-neutral-200">
                                    {line.content.startsWith("$ ")
                                        ? line.content.slice(2)
                                        : line.content}
                                </span>
                            </>
                        ) : (
                            <span>{line.content || "\u00A0"}</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3 border-t-2 border-phos-700 shrink-0 bg-ink-950/50">
                <span className="text-phos-400 select-none">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-neutral-200 caret-phos-400 placeholder:text-neutral-600"
                    placeholder="type a command…"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Terminal input"
                />
                <span className="w-2.5 h-5 bg-phos-400 blink" />
            </div>
        </div>
    );
};

function lineClassName(type: "input" | "output" | "empty"): string {
    const base = "leading-6 whitespace-pre-wrap break-words";
    if (type === "input") return `${base} text-neutral-100 mt-1`;
    if (type === "output") return `${base} text-neutral-400`;
    return `${base} h-2`;
}