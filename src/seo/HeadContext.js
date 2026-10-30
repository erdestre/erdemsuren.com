import { createContext } from "react";

// Server-only collector. src/entry-server.jsx provides an object { jsonLd, status } and <Seo> fills it while
// rendering; scripts/prerender.mjs then writes the JSON-LD into <head> and checks the status (404 pages).
// On the client there is no provider (value null) and <Seo> keeps the JSON-LD <script> in <head> in sync instead.
export const HeadContext = createContext(null);
