import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("7518df35-bbf1-4df8-a3dc-6b9f978a326d");
}

serve(handler);
