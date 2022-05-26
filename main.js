import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("50575d24-685b-4cbc-bfad-df1180ce82cf");
}

serve(handler);
