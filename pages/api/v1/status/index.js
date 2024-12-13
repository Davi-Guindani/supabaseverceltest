import database from "infra/database.js";

export default async function status(request, response) {
  let client = database.getNewClient();
  const updatedAt = new Date().toISOString();

  const { data, error } = await client.from("countries").select().limit(1);
  if (!error) {
    response.status(200).json({
      updated_at: updatedAt,
      data: data,
    });
  } else {
    console.error("Supabase status check failed:", error.message);
    response.status(500).json({ error: error.message });
  }
}
