import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("5a8dd8c6-823e-4236-ab38-782d793c68f1");
}

serve(handler);
