-- Leads captured from the free quiz, cheat sheet, and exit-intent opt-ins.
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text, -- 'quiz' | 'cheatsheet' | 'exit-intent'
  quiz_score int,
  weakest_category text,
  created_at timestamptz not null default now(),
  unsubscribed boolean not null default false
);

create index if not exists leads_created_at_idx on leads (created_at);
