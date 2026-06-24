create extension if not exists "uuid-ossp";

create type attendance_status as enum (
  'novo_cliente',
  'escolhendo_pecas',
  'aguardando_pagamento',
  'separando_pedido',
  'pedido_finalizado'
);

create table public.stores (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  whatsapp_phone text,
  city text,
  created_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default uuid_generate_v4(),
  store_id uuid not null references public.stores(id) on delete cascade,
  name text not null,
  phone text not null,
  city text,
  size text,
  preferences text,
  notes text,
  last_contact_at timestamptz,
  created_at timestamptz not null default now(),
  unique (store_id, phone)
);

create table public.attendances (
  id uuid primary key default uuid_generate_v4(),
  store_id uuid not null references public.stores(id) on delete cascade,
  customer_id uuid not null references public.customers(id) on delete cascade,
  status attendance_status not null default 'novo_cliente',
  summary text,
  order_value numeric(10, 2),
  last_message_at timestamptz,
  finished_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.quick_messages (
  id uuid primary key default uuid_generate_v4(),
  store_id uuid not null references public.stores(id) on delete cascade,
  category text not null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index customers_store_id_idx on public.customers(store_id);
create index attendances_store_status_idx on public.attendances(store_id, status);
create index quick_messages_store_id_idx on public.quick_messages(store_id);

alter table public.stores enable row level security;
alter table public.customers enable row level security;
alter table public.attendances enable row level security;
alter table public.quick_messages enable row level security;

create policy "Authenticated users can read stores"
  on public.stores for select
  to authenticated
  using (true);

create policy "Authenticated users can manage customers"
  on public.customers for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can manage attendances"
  on public.attendances for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can manage quick messages"
  on public.quick_messages for all
  to authenticated
  using (true)
  with check (true);

insert into public.stores (id, name, whatsapp_phone, city)
values ('00000000-0000-0000-0000-000000000001', 'Boutique Carol', '+55 11 99999-0000', 'Sao Paulo');

insert into public.customers (
  store_id,
  name,
  phone,
  city,
  size,
  preferences,
  notes,
  last_contact_at
) values
  ('00000000-0000-0000-0000-000000000001', 'Mariana Souza', '+55 11 98888-2101', 'Sao Paulo', 'M', 'Vestidos midi, tons verdes, tecidos leves', 'Prefere receber fotos com composicoes completas.', now()),
  ('00000000-0000-0000-0000-000000000001', 'Bianca Almeida', '+55 21 97777-1420', 'Rio de Janeiro', 'P', 'Alfaiataria, blazers, cores neutras', 'Costuma pagar via Pix no mesmo dia.', now() - interval '30 minutes'),
  ('00000000-0000-0000-0000-000000000001', 'Renata Lima', '+55 31 96666-3344', 'Belo Horizonte', 'G', 'Jeans, camisas oversized, pecas confortaveis', 'Enviar medidas de quadril antes de reservar.', now() - interval '1 hour');

insert into public.quick_messages (store_id, category, title, body)
values
  ('00000000-0000-0000-0000-000000000001', 'Entrega', 'Prazo e envio', 'Oi, {nome}! Seu pedido ja esta separado. A entrega pode ser feita por motoboy hoje ou enviada pelos Correios amanha. Qual opcao fica melhor para voce?'),
  ('00000000-0000-0000-0000-000000000001', 'Pagamento', 'Pix para reserva', 'Perfeito, {nome}! Para reservar suas pecas, o pagamento pode ser feito via Pix. Assim que o comprovante chegar por aqui, ja deixo tudo confirmado para voce.'),
  ('00000000-0000-0000-0000-000000000001', 'Medidas', 'Confirmar tamanho', 'Para eu te indicar o melhor tamanho, pode me enviar busto, cintura e quadril? Se preferir, tambem posso comparar com uma peca que voce ja usa e gosta.');
