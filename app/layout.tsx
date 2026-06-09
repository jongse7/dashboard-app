import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased : 글꼴을 부드럽게 만들어주는 클래스 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
