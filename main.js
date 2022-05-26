import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("ed562819-0c48-4ef8-8e2e-68d061ae1c67");
}

serve(handler);
