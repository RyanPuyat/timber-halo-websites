// import { NextResponse } from 'next/server';
import { auth } from './app/_lib/auth';

// export async function middleware(request) {
//   const session = await auth(request);

//   if (!session?.user) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

export const middleware = auth;

export const config = {
  matcher: ['/account'],
};
