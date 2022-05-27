import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("38086a61-e36f-4fa6-8584-c0c6cc9678db");
}

serve(handler);
