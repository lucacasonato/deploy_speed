import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("5297e396-7b1d-4788-83b0-61b297438ec3");
}

serve(handler);
