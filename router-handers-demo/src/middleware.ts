import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

/* option 1 to redirect: */
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url));
// }
// export const config = {
//   matcher: '/hello',
// };

/* option 2 to redirect: */
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/hello') {
//     return NextResponse.redirect(new URL('/', request.nextUrl));
//   }
// }

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get('theme');
  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header-ming', 'custom-value-ming');
  return response;
}
