"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquareText,
  PanelsTopLeft,
  Settings,
  UsersRound
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clientes", label: "Clientes", icon: UsersRound },
  { href: "/atendimentos", label: "Atendimentos", icon: PanelsTopLeft },
  { href: "/mensagens-rapidas", label: "Mensagens rapidas", icon: MessageSquareText },
  { href: "/configuracoes", label: "Configuracoes", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-black/10 bg-white/80 px-4 py-4 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-lg font-black text-white">
            AM
          </div>
          <div>
            <p className="text-lg font-black text-ink">AtendeModa</p>
            <p className="text-xs font-medium text-ink/55">WhatsApp para moda</p>
          </div>
        </div>

        <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:mt-8 lg:flex-col lg:overflow-visible lg:pb-0">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-11 shrink-0 items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-coral text-white shadow-sm"
                    : "text-ink/70 hover:bg-linen hover:text-ink"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="border-b border-black/10 bg-linen/70 px-5 py-4 backdrop-blur lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-ink">Boutique Carol</p>
              <p className="text-xs text-ink/55">Fila de atendimento atualizada em tempo real</p>
            </div>
            <button className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-moss">
              Novo atendimento
            </button>
          </div>
        </header>

        <div className="px-5 py-6 lg:px-8 lg:py-8">{children}</div>
      </div>
    </div>
  );
}
