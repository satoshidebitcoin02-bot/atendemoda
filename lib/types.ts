export type DashboardMetric = {
  kind: "clientes" | "vendas" | "resposta" | "reativar";
  label: string;
  value: string;
  helper: string;
};

export type Customer = {
  name: string;
  phone: string;
  city: string;
  size: string;
  preferences: string;
  notes: string;
};

export type KanbanCard = {
  id: string;
  customer: string;
  summary: string;
  size: string;
  preference: string;
  value: string;
  lastMessage: string;
};

export type KanbanColumn = {
  title: string;
  cards: KanbanCard[];
};
