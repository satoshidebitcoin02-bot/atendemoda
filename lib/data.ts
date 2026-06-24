import type { Customer, DashboardMetric, KanbanColumn } from "@/lib/types";

export const dashboardMetrics: DashboardMetric[] = [
  {
    kind: "clientes",
    label: "Clientes atendidos hoje",
    value: "38",
    helper: "12 acima da media dos ultimos 7 dias"
  },
  {
    kind: "vendas",
    label: "Vendas concluidas",
    value: "16",
    helper: "R$ 4.820,00 em pedidos finalizados"
  },
  {
    kind: "resposta",
    label: "Clientes sem resposta",
    value: "9",
    helper: "Aguardando retorno ha mais de 2 horas"
  },
  {
    kind: "reativar",
    label: "Clientes para reativar",
    value: "24",
    helper: "Sem compra nos ultimos 30 dias"
  }
];

export const recentAttendances = [
  {
    customer: "Mariana Souza",
    status: "Escolhendo pecas",
    order: "Vestido midi + cinto",
    lastMessage: "15 min"
  },
  {
    customer: "Bianca Almeida",
    status: "Aguardando pagamento",
    order: "Conjunto alfaiataria",
    lastMessage: "32 min"
  },
  {
    customer: "Renata Lima",
    status: "Separando pedido",
    order: "Calca wide leg",
    lastMessage: "1 h"
  }
];

export const reactivationList = [
  {
    name: "Fernanda Rocha",
    reason: "Comprou vestidos florais na ultima colecao.",
    days: "34 dias"
  },
  {
    name: "Luiza Martins",
    reason: "Perguntou por novidades em jeans premium.",
    days: "41 dias"
  },
  {
    name: "Camila Torres",
    reason: "Interesse recorrente em looks para trabalho.",
    days: "52 dias"
  }
];

export const customers: Customer[] = [
  {
    name: "Mariana Souza",
    phone: "+55 11 98888-2101",
    city: "Sao Paulo",
    size: "M",
    preferences: "Vestidos midi, tons verdes, tecidos leves",
    notes: "Prefere receber fotos com composicoes completas."
  },
  {
    name: "Bianca Almeida",
    phone: "+55 21 97777-1420",
    city: "Rio de Janeiro",
    size: "P",
    preferences: "Alfaiataria, blazers, cores neutras",
    notes: "Costuma pagar via Pix no mesmo dia."
  },
  {
    name: "Renata Lima",
    phone: "+55 31 96666-3344",
    city: "Belo Horizonte",
    size: "G",
    preferences: "Jeans, camisas oversized, pecas confortaveis",
    notes: "Enviar medidas de quadril antes de reservar."
  },
  {
    name: "Fernanda Rocha",
    phone: "+55 41 95555-9012",
    city: "Curitiba",
    size: "M",
    preferences: "Estampas florais, vestidos para eventos",
    notes: "Reativar quando chegar colecao primavera."
  }
];

export const kanbanColumns: KanbanColumn[] = [
  {
    title: "Novo cliente",
    cards: [
      {
        id: "atd-001",
        customer: "Juliana Costa",
        summary: "Chegou pelo Instagram procurando look para jantar.",
        size: "M",
        preference: "Vestido preto",
        value: "Ticket estimado R$ 280",
        lastMessage: "Agora"
      }
    ]
  },
  {
    title: "Escolhendo pecas",
    cards: [
      {
        id: "atd-002",
        customer: "Mariana Souza",
        summary: "Comparando duas opcoes de vestido midi.",
        size: "M",
        preference: "Tons verdes",
        value: "R$ 419",
        lastMessage: "15 min"
      },
      {
        id: "atd-003",
        customer: "Patricia Nunes",
        summary: "Pediu alternativas para usar no escritorio.",
        size: "P",
        preference: "Camisas",
        value: "R$ 330",
        lastMessage: "24 min"
      }
    ]
  },
  {
    title: "Aguardando pagamento",
    cards: [
      {
        id: "atd-004",
        customer: "Bianca Almeida",
        summary: "Pix enviado para finalizar conjunto.",
        size: "P",
        preference: "Alfaiataria",
        value: "R$ 620",
        lastMessage: "32 min"
      }
    ]
  },
  {
    title: "Separando pedido",
    cards: [
      {
        id: "atd-005",
        customer: "Renata Lima",
        summary: "Pedido confirmado para envio amanha.",
        size: "G",
        preference: "Jeans",
        value: "R$ 259",
        lastMessage: "1 h"
      }
    ]
  },
  {
    title: "Pedido finalizado",
    cards: [
      {
        id: "atd-006",
        customer: "Aline Barros",
        summary: "Entrega combinada por motoboy.",
        size: "M",
        preference: "Saia e cropped",
        value: "R$ 385",
        lastMessage: "2 h"
      }
    ]
  }
];

export const quickMessages = [
  {
    category: "Entrega",
    title: "Prazo e envio",
    body: "Oi, {nome}! Seu pedido ja esta separado. A entrega pode ser feita por motoboy hoje ou enviada pelos Correios amanha. Qual opcao fica melhor para voce?"
  },
  {
    category: "Pagamento",
    title: "Pix para reserva",
    body: "Perfeito, {nome}! Para reservar suas pecas, o pagamento pode ser feito via Pix. Assim que o comprovante chegar por aqui, ja deixo tudo confirmado para voce."
  },
  {
    category: "Medidas",
    title: "Confirmar tamanho",
    body: "Para eu te indicar o melhor tamanho, pode me enviar busto, cintura e quadril? Se preferir, tambem posso comparar com uma peca que voce ja usa e gosta."
  }
];
