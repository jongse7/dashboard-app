import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login", // 기본 NextAuth 로그인 페이지 대신 우리가 만든 페이지로 연결
  },
  callbacks: {
    // 💡 페이지 접근 전에 권한을 확인하는 콜백 함수
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // 로그인 안 했으면 로그인 페이지로 강제 이동
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl)); // 로그인 했는데 로그인 페이지에 오면 대시보드로 보냄
      }
      return true;
    },
  },
  providers: [], // 아직 로그인 방식을 안 넣었으므로 빈 배열
} satisfies NextAuthConfig;
