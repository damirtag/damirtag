"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
    TERMINAL_COMMANDS,
    INITIAL_LINES,
    type TerminalLine,
} from "./terminal.constants";

const MAX_HISTORY = 50;

export const useTerminal = () => {
    const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [, setHistoryIndex] = useState(-1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        el.scrollTop = el.scrollHeight;
    }, [lines]);

    useEffect(() => {
        fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((data) => {
                setLines([
                    { type: "output", content: `connected from ${data.ip}` },
                    { type: "output", content: 'type "help" to see available commands.' },
                    { type: "empty", content: "" },
                ]);
            })
            .catch(() => {
                // silently fall back if fetch fails or is blocked
                setLines([
                    { type: "output", content: "connected." },
                    { type: "output", content: 'type "help" to see available commands.' },
                    { type: "empty", content: "" },
                ]);
            });
    }, []);

    const pushLines = useCallback((newLines: TerminalLine[]) => {
        setLines((prev) => {
            const combined = [...prev, ...newLines];
            return combined.length > MAX_HISTORY
                ? combined.slice(combined.length - MAX_HISTORY)
                : combined;
        });
    }, []);

    const runCommand = useCallback(
        (raw: string) => {
            const cmd = raw.trim().toLowerCase();

            const inputLine: TerminalLine = {
                type: "input",
                content: `$ ${raw}`,
            };

            if (!cmd) {
                pushLines([inputLine, { type: "empty", content: "" }]);
                return;
            }

            if (cmd === "clear") {
                setLines([]);
                requestAnimationFrame(() => {
                    const el = scrollRef.current;
                    if (el) el.scrollTop = 0;
                });
                return;
            }

            const command = TERMINAL_COMMANDS[cmd];
            const outputLines: TerminalLine[] = command
                ? [
                      ...command.output.map((line) => ({
                          type: "output" as const,
                          content: line,
                      })),
                      { type: "empty", content: "" },
                  ]
                : [
                      {
                          type: "output",
                          content: `command not found: ${cmd}. Try "help".`,
                      },
                      { type: "empty", content: "" },
                  ];

            pushLines([inputLine, ...outputLines]);
        },
        [pushLines]
    );

    const handleSubmit = useCallback(() => {
        if (!input.trim() && input !== "") {
            runCommand(input);
            setInput("");
            return;
        }
        if (!input) return;

        setCommandHistory((prev) => [input, ...prev].slice(0, 20));
        setHistoryIndex(-1);
        runCommand(input);
        setInput("");
    }, [input, runCommand]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                handleSubmit();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHistoryIndex((prev) => {
                    const next = Math.min(prev + 1, commandHistory.length - 1);
                    setInput(commandHistory[next] ?? "");
                    return next;
                });
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setHistoryIndex((prev) => {
                    const next = Math.max(prev - 1, -1);
                    setInput(next === -1 ? "" : (commandHistory[next] ?? ""));
                    return next;
                });
            } else if (e.key === "Tab") {
                e.preventDefault();
                const match = Object.keys(TERMINAL_COMMANDS).find((k) =>
                    k.startsWith(input.toLowerCase())
                );
                if (match) setInput(match);
            }
        },
        [handleSubmit, commandHistory, input]
    );

    const focusInput = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    return {
        lines,
        input,
        setInput,
        handleKeyDown,
        focusInput,
        bottomRef,
        scrollRef,
        inputRef,
    };
};