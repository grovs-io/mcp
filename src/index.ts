import "dotenv/config";
import { createApp } from "./app.js";

const PORT = parseInt(process.env.PORT || "8080", 10);
const GROVS_API_URL = process.env.GROVS_API_URL || "https://mcp.grovs.io";
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;

const app = createApp(GROVS_API_URL, PUBLIC_URL);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Grovs MCP server listening on port ${PORT}`);
  console.log(`Backend API: ${GROVS_API_URL}`);
});
