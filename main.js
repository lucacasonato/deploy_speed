import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("a377b1ec-c8fa-4a5b-9785-e7f65bfaadd7");
}

serve(handler);
