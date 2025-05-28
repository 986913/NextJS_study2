export const dynamic = 'force-static'; // Caching only works with GET methods
// if you are using dynamic functions like headers(), cookies(), or working with the request object in your GET method, caching won't be applied.

export async function GET() {
  // 这个categories数据是假装数据库来的
  const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Home' },
    { id: 4, name: 'Beauty' },
  ];

  return Response.json(categories);
}
