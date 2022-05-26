const id = crypto.randomUUID();
const code =
  `import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
  return new Response("${id}");
}

serve(handler);
`;

await Deno.writeTextFile("main.js", code);

const add = await Deno.spawn("git", { args: ["add", "main.js"] });
if (!add.status.success) throw new Error("Failed to add file to git");

const commit = await Deno.spawn("git", {
  args: ["commit", "-m", `test ${id}`],
});
if (!commit.status.success) throw new Error("Failed to commit");

const push = await Deno.spawn("git", { args: ["push"] });
if (!push.status.success) throw new Error("Failed to push");

console.log("%cPushed, starting measurement...", "color: green");
const start = performance.now();

while (true) {
  const res = await fetch("https://lucacasonato-deploy-speed.deno-staging.dev");
  const text = await res.text();
  if (text === id) {
    break;
  }
}
const end = performance.now();
console.log("%cChange is live. Took %dms", "color: green", end - start);
