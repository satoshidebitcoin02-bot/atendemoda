import type { Customer } from "@/lib/types";

export function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <section className="rounded-lg border border-black/10 bg-white/80 p-4 shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-black/10 text-xs uppercase tracking-wide text-ink/55">
              <th className="px-3 py-3 font-semibold">Nome</th>
              <th className="px-3 py-3 font-semibold">Telefone</th>
              <th className="px-3 py-3 font-semibold">Cidade</th>
              <th className="px-3 py-3 font-semibold">Tamanho</th>
              <th className="px-3 py-3 font-semibold">Preferencias</th>
              <th className="px-3 py-3 font-semibold">Observacoes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10">
            {customers.map((customer) => (
              <tr key={customer.phone} className="align-top">
                <td className="px-3 py-4 font-semibold text-ink">{customer.name}</td>
                <td className="px-3 py-4 text-ink/70">{customer.phone}</td>
                <td className="px-3 py-4 text-ink/70">{customer.city}</td>
                <td className="px-3 py-4">
                  <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-bold text-moss">
                    {customer.size}
                  </span>
                </td>
                <td className="px-3 py-4 text-ink/70">{customer.preferences}</td>
                <td className="px-3 py-4 text-ink/60">{customer.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
