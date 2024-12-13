import { createClient } from "@supabase/supabase-js";

function getNewClient() {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
  return supabase;
}

function query(queryObject) {
  let client;
  client = getNewClient();
  const { data, error } = client.query(queryObject);
  if (!error) {
    return data;
  } else {
    throw error;
  }
}

export default { supabase, query };
