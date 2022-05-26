import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("dabb4623-ef00-4945-802c-666fa0c280af");
}

serve(handler);
