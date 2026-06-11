// app/dashboard/invoices/error.tsx
"use client"; // 💡 error.tsx는 반드시 클라이언트 컴포넌트여야 합니다.

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러를 로깅 서비스(Sentry 등)에 기록합니다.
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // 💡 reset() 함수를 부르면 Next.js가 해당 라우트를 다시 렌더링(복구) 시도합니다.
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
