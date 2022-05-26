import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("62d6958d-0d59-4a85-b421-00bf400a86d5");
}

serve(handler);
