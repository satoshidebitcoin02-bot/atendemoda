import { PageHeader } from "@/components/page-header";
import { QuickMessageCards } from "@/components/quick-message-cards";
import { quickMessages } from "@/lib/data";

export default function MensagensRapidasPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="WhatsApp"
        title="Mensagens rapidas"
        description="Modelos prontos para responder perguntas frequentes com consistencia."
      />

      <QuickMessageCards messages={quickMessages} />
    </main>
  );
}
