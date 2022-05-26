import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("17cecd3f-1f3d-452d-a548-4b10adf8484a");
}

serve(handler);
