import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // 특정 경로(이미지, API 등)를 제외한 모든 경로에서 이 검증 로직이 실행되도록 설정
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
