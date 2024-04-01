import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const ispublic =
    path === "/" ||
    path === "/pricing" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyemail";

const token =  request.cookies.get("token")?.value || "";
   
    if(ispublic && token){
        return NextResponse.redirect(new URL("/apps/yourbill", request.url));
    }
    if(!ispublic && !token){
        return NextResponse.redirect(new URL("/login", request.url));
    }


  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/','/login','/profile','/verifyemail','/signup','/apps/'
  ]
};
