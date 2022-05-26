import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("b0a7e040-1c8d-4002-b3e3-1991a6f6ac8f");
}

serve(handler);
