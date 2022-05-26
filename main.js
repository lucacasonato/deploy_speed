import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("f0e38825-2062-4493-9700-55191e451a9f");
}

serve(handler);
