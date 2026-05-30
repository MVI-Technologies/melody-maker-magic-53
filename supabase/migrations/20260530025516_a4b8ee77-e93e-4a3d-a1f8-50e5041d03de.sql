
-- Orders table: cada pedido criado a partir do briefing
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  plan TEXT NOT NULL CHECK (plan IN ('essencial','completa','premium')),
  amount_cents INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid','generating','ready','failed','refunded')),
  stripe_session_id TEXT UNIQUE,
  briefing JSONB NOT NULL DEFAULT '{}'::jsonb,
  download_token TEXT NOT NULL DEFAULT encode(gen_random_bytes(24),'hex') UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Songs table: cada música gerada (pode haver mais de uma por pedido)
CREATE TABLE public.songs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  suno_task_id TEXT,
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued','generating','ready','failed')),
  title TEXT,
  audio_url TEXT,
  image_url TEXT,
  lyrics TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_songs_order_id ON public.songs(order_id);
CREATE INDEX idx_orders_stripe_session ON public.orders(stripe_session_id);
CREATE INDEX idx_orders_download_token ON public.orders(download_token);

-- Grants: tabelas acessadas apenas via server functions (service_role).
-- Leitura pública controlada por server functions usando o download_token.
GRANT SELECT, INSERT, UPDATE, DELETE ON public.orders TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.songs TO authenticated;
GRANT ALL ON public.orders TO service_role;
GRANT ALL ON public.songs TO service_role;

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.songs ENABLE ROW LEVEL SECURITY;

-- Nenhuma policy pública: acesso é via server functions (admin client),
-- que validam o download_token antes de retornar dados.

-- Trigger para atualizar updated_at em orders
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER orders_set_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Storage bucket público para hospedar os MP3 finais
INSERT INTO storage.buckets (id, name, public)
VALUES ('songs', 'songs', true)
ON CONFLICT (id) DO NOTHING;

-- Leitura pública dos arquivos no bucket songs
CREATE POLICY "Public read songs bucket"
ON storage.objects FOR SELECT
USING (bucket_id = 'songs');
