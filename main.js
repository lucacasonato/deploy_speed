import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("0dec2fc4-1f42-4e36-ae78-fb63c2785a8e");
}

serve(handler);
