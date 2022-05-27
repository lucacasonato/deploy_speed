import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("33ea056e-be40-4bbc-b3ee-94a35f264fb7");
}

serve(handler);
