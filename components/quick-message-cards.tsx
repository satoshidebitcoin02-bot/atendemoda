"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type QuickMessage = {
  category: string;
  title: string;
  body: string;
};

export function QuickMessageCards({ messages }: { messages: QuickMessage[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyMessage(message: QuickMessage) {
    await navigator.clipboard.writeText(message.body);
    setCopied(message.title);
    window.setTimeout(() => setCopied(null), 1400);
  }

  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {messages.map((message) => {
        const isCopied = copied === message.title;

        return (
          <article
            key={message.title}
            className="flex min-h-[240px] flex-col rounded-lg border border-black/10 bg-white/80 p-5 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-coral">
                  {message.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-ink">{message.title}</h2>
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-md border border-black/10 bg-linen text-ink transition hover:border-coral hover:text-coral"
                aria-label={`Copiar mensagem de ${message.category}`}
                title={isCopied ? "Copiado" : "Copiar"}
                onClick={() => void copyMessage(message)}
              >
                {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-5 flex-1 rounded-md bg-linen/80 p-4 text-sm leading-6 text-ink/75">
              {message.body}
            </p>
          </article>
        );
      })}
    </section>
  );
}
