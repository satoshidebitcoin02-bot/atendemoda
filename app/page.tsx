import { Activity, CheckCircle2, Clock3, MessageCircleWarning } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { PageHeader } from "@/components/page-header";
import { dashboardMetrics, recentAttendances, reactivationList } from "@/lib/data";

const iconMap = {
  clientes: Activity,
  vendas: CheckCircle2,
  resposta: MessageCircleWarning,
  reativar: Clock3
};

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <PageHeader
        eyebrow="Visao geral"
        title="Dashboard"
        description="Acompanhe a rotina comercial da loja e priorize conversas que pedem atencao."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            helper={metric.helper}
            icon={iconMap[metric.kind]}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-lg border border-black/10 bg-white/80 p-5 shadow-soft">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-ink">Atendimentos recentes</h2>
              <p className="text-sm text-ink/60">Conversas ativas no WhatsApp.</p>
            </div>
            <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-semibold text-moss">
              Hoje
            </span>
          </div>

          <div className="overflow-hidden rounded-md border border-black/10">
            <table className="w-full min-w-[620px] border-collapse bg-white text-left text-sm">
              <thead className="bg-linen text-xs uppercase tracking-wide text-ink/55">
                <tr>
                  <th className="px-4 py-3 font-semibold">Cliente</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Pedido</th>
                  <th className="px-4 py-3 font-semibold">Ultima mensagem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {recentAttendances.map((attendance) => (
                  <tr key={attendance.customer}>
                    <td className="px-4 py-3 font-medium text-ink">{attendance.customer}</td>
                    <td className="px-4 py-3 text-ink/70">{attendance.status}</td>
                    <td className="px-4 py-3 text-ink/70">{attendance.order}</td>
                    <td className="px-4 py-3 text-ink/60">{attendance.lastMessage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white/80 p-5 shadow-soft">
          <h2 className="text-lg font-semibold text-ink">Clientes para reativar</h2>
          <p className="mt-1 text-sm text-ink/60">Boas oportunidades para chamar hoje.</p>
          <div className="mt-5 space-y-3">
            {reactivationList.map((customer) => (
              <div key={customer.name} className="rounded-md border border-black/10 bg-linen/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-ink">{customer.name}</p>
                    <p className="mt-1 text-sm text-ink/60">{customer.reason}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold text-coral">
                    {customer.days}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
