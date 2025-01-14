import { createClient } from '@supabase/supabase-js';

// Verifique se as variáveis de ambiente estão definidas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Verifique se as variáveis são válidas
if (!supabaseUrl || !supabaseKey) {
  throw new Error('As variáveis de ambiente do Supabase não estão configuradas corretamente.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
