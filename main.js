addEventListener(
  "fetch",
  (event) => event.respondWith(handleRequest(event.request)),
);

/**
 * @param {Request} request
 * @returns {Response}
 */
function handleRequest(request) {
  return new Response("Hello World!!!");
}
