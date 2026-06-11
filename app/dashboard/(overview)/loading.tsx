// /app/dashboard/loading.tsx
import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  // 'Loading...' 글씨 대신, 미리 만들어둔 뼈대(Skeleton) UI를 보여줍니다.
  return <DashboardSkeleton />;
}
