import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("8f765568-ad74-4cfd-9bc8-75eef1b4e806");
}

serve(handler);
