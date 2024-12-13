import { createClient } from "@supabase/supabase-js";

function getNewClient() {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
  return supabase;
}

export default { getNewClient };
