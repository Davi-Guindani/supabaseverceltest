import database from "infra/database.js";

function status(request, response) {
  const updatedAt = new Date().toISOString();
  let queryResponse = null;

  try {
    queryResponse = database.from("countries").select().limit(1);
  } catch (error) {
    console.error("Supabase status check failed:", error.message);
    res.status(500).json({ error: error.message });
  }

  response.status(200).json({
    updated_at: updatedAt,
    query_response: queryResponse,
  });
}

export default status;
