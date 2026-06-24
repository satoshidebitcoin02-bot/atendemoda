import { Bell, Building2, MessageSquareText, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const settings = [
  {
    icon: Building2,
    title: "Dados da loja",
    description: "Nome comercial, cidade, horario de atendimento e politicas da boutique."
  },
  {
    icon: MessageSquareText,
    title: "WhatsApp",
    description: "Numero principal, assinatura das mensagens e padroes de atendimento."
  },
  {
    icon: Bell,
    title: "Lembretes",
    description: "Alertas para clientes sem resposta, pagamentos pendentes e reativacoes."
  },
  {
    icon: ShieldCheck,
    title: "Equipe e permissoes",
    description: "Controle atendentes, acesso a clientes e historico de vendas."
  }
];

export default function ConfiguracoesPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Operacao"
        title="Configuracoes"
        description="Ajuste os dados da loja, padroes de atendimento e permissoes da equipe."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {settings.map((setting) => (
          <article key={setting.title} className="rounded-lg border border-black/10 bg-white/80 p-5 shadow-soft">
            <setting.icon className="h-6 w-6 text-coral" />
            <h2 className="mt-4 text-lg font-semibold text-ink">{setting.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/65">{setting.description}</p>
            <button className="mt-5 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-moss">
              Configurar
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
