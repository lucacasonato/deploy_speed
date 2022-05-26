import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("8c747e05-42ba-408e-8987-c6e71eb7da4f");
}

serve(handler);
