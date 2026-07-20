-- Ensures the service_role key (used by all server-side app code) can read/write
-- these tables even with Row Level Security enabled. service_role is meant to bypass
-- RLS automatically, but the grants can end up missing depending on how the tables
-- were created — this makes sure they're present regardless.
grant select, insert, update, delete on public.leads to service_role;
grant select, insert, update, delete on public.lead_emails to service_role;
grant select, insert, update, delete on public.events to service_role;
