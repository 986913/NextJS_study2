export const dynamic = 'force-static'; // Caching only works with GET methods
// if you are using dynamic functions like headers(), cookies(), or working with the request object in your GET method, caching won't be applied.

export const revalidate = 10;

export async function GET() {
  return Response.json({
    now_time_is: new Date().toLocaleTimeString(),
  });
}
