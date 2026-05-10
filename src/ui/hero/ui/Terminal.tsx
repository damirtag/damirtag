"use client";

import React from "react";
import { useTerminal } from "@/shared/hooks/useTerminal";
import { QUICK_COMMANDS } from "@/shared/hooks/terminal.constants";

export const TerminalPanel: React.FC = () => {
    const { lines, input, setInput, handleKeyDown, focusInput, bottomRef, scrollRef, inputRef } =
        useTerminal();

    return (
        <div
            className="relative flex flex-col h-[420px] w-full font-mono text-sm rounded-xl overflow-hidden border border-orange-500/20 bg-neutral-950/90 backdrop-blur-sm"
            onClick={focusInput}
        >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-orange-500/10 bg-neutral-900/60 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-neutral-500 tracking-widest uppercase">
                    damir.top — zsh
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
                        className="px-2.5 py-0.5 text-xs rounded-md border border-orange-500/30 text-orange-400/80 hover:bg-orange-500/10 hover:text-orange-300 hover:border-orange-400/50 transition-all duration-150 cursor-pointer"
                    >
                        {cmd}
                    </button>
                ))}
            </div>

            {/* Output area */}
            <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto px-4 pt-2 pb-1 scrollbar-thin scrollbar-thumb-orange-500/20 scrollbar-track-transparent">
                {lines.map((line, i) => (
                    <div key={i} className={lineClassName(line.type)}>
                        {line.type === "input" ? (
                            <>
                                <span className="text-orange-400">
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
                <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-orange-500/10 shrink-0 bg-neutral-950/50">
                <span className="text-orange-400 select-none">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-neutral-200 caret-orange-400 placeholder:text-neutral-600"
                    placeholder="type a command…"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Terminal input"
                />
                <span className="w-2 h-4 bg-orange-400 animate-pulse opacity-70" />
            </div>
        </div>
    );
};

function lineClassName(type: "input" | "output" | "empty"): string {
    const base = "leading-5 whitespace-pre-wrap break-words";
    if (type === "input") return `${base} text-neutral-100 mt-1`;
    if (type === "output") return `${base} text-neutral-400`;
    return `${base} h-2`;
}