import { KanbanBoard } from "@/components/kanban-board";
import { PageHeader } from "@/components/page-header";
import { kanbanColumns } from "@/lib/data";

export default function AtendimentosPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Pipeline"
        title="Atendimentos"
        description="Organize cada conversa desde o primeiro contato ate o pedido finalizado."
      />
      <KanbanBoard columns={kanbanColumns} />
    </main>
  );
}
