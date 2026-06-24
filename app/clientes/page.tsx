import { CustomerTable } from "@/components/customer-table";
import { PageHeader } from "@/components/page-header";
import { customers } from "@/lib/data";

export default function ClientesPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Relacionamento"
        title="Clientes"
        description="Centralize dados, medidas, preferencias e observacoes de cada compradora."
      />
      <CustomerTable customers={customers} />
    </main>
  );
}
