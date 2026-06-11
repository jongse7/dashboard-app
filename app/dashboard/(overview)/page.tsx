// /app/dashboard/page.tsx
import { Suspense } from "react";
import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
// 1. 데이터를 가져오는 함수들을 불러옵니다.
import {
  // fetchRevenue,
  fetchLatestInvoices,
  // fetchCardData,
} from "@/app/lib/data";
import CardWrapper from "../cards";

export default async function Page() {
  // 2. async/await를 사용해 데이터를 가져옵니다.
  // const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 3. 주석을 풀고 가져온 데이터를 컴포넌트에 넘겨줍니다 (Props) */}
        <Suspense>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense>
          <RevenueChart />
        </Suspense>{" "}
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
