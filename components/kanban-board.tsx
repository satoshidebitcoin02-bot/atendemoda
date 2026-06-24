import { MessageCircle, Shirt, Tag } from "lucide-react";
import type { KanbanColumn } from "@/lib/types";

export function KanbanBoard({ columns }: { columns: KanbanColumn[] }) {
  return (
    <section className="grid gap-4 overflow-x-auto pb-2 xl:grid-cols-5">
      {columns.map((column) => (
        <div
          key={column.title}
          className="min-w-[260px] rounded-lg border border-black/10 bg-white/75 p-3 shadow-soft"
        >
          <div className="flex items-center justify-between gap-3 px-1 py-2">
            <h2 className="text-sm font-bold text-ink">{column.title}</h2>
            <span className="grid h-7 min-w-7 place-items-center rounded-full bg-linen px-2 text-xs font-bold text-ink/70">
              {column.cards.length}
            </span>
          </div>

          <div className="mt-3 space-y-3">
            {column.cards.map((card) => (
              <article key={card.id} className="rounded-md border border-black/10 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-ink">{card.customer}</h3>
                    <p className="mt-1 text-sm text-ink/60">{card.summary}</p>
                  </div>
                  <span className="rounded-full bg-moss/10 px-2 py-1 text-xs font-bold text-moss">
                    {card.size}
                  </span>
                </div>
                <div className="mt-4 grid gap-2 text-xs text-ink/60">
                  <span className="flex items-center gap-2">
                    <Shirt className="h-3.5 w-3.5 text-coral" />
                    {card.preference}
                  </span>
                  <span className="flex items-center gap-2">
                    <Tag className="h-3.5 w-3.5 text-coral" />
                    {card.value}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-3.5 w-3.5 text-coral" />
                    {card.lastMessage}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
