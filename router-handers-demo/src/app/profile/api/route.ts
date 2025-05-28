// import { type NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

/* How to get request headers, set& get cookies ?  Option 1: */
// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.warn(requestHeaders.get('Authorization'));

//   const theme = request.cookies.get('theme');
//   console.log(theme);

//   return new Response('<h1>Profile data</h1>', {
//     headers: {
//       'Content-Type': 'text/html',
//       'Set-Cookie': 'theme=dark',
//     },
//   });
// }

/* How to get request headers, set& get cookies ?  Option 2: */
export async function GET() {
  const headerList = await headers();
  console.log(headerList.get('Authorization'));

  const cookieStore = await cookies();
  cookieStore.set('resultsPerPage', '20');
  console.log(cookieStore.get('resultsPerPage'));

  return new Response('<h1>Profile data</h1>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
