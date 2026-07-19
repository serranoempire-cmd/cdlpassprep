-- Tracks which drip emails have been sent to which lead, to prevent duplicate sends.
create table if not exists lead_emails (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads (id) on delete cascade,
  email_key text not null, -- 'day1' | 'day2' | 'day4' | 'day6' | 'day8'
  sent_at timestamptz not null default now(),
  unique (lead_id, email_key)
);

-- Lightweight, no-PII funnel event tracking.
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  event text not null, -- 'quiz_start' | 'quiz_complete' | 'email_submitted' | 'checkout_click' | 'article_view'
  path text,
  meta jsonb,
  created_at timestamptz not null default now()
);

create index if not exists events_event_idx on events (event);
create index if not exists events_created_at_idx on events (created_at);
