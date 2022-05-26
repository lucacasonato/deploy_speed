import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("f8d41ddb-db56-4db7-a415-9c784764057b");
}

serve(handler);
