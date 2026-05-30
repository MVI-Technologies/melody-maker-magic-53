
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

DROP POLICY IF EXISTS "Public read songs bucket" ON storage.objects;
-- Sem policy de SELECT em storage.objects para o bucket songs.
-- Como o bucket é público, os arquivos ainda são acessíveis via URL direta,
-- mas a listagem do bucket é bloqueada.
