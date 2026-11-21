import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "My Blog ຂອງ Yongthor",
  description: "ເວັບ Blog ທຳອິດຂອງຂ້ອຍ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="lo"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense
            fallback={
              <div className="fixed inset-y-0 left-0 hidden w-64 border-r border-sidebar-border bg-sidebar md:block" />
            }
          >
            <Sidebar />
          </Suspense>

          {/* ເນື້ອຫາ: ເຫຼືອບ່ອນຊ້າຍໃຫ້ Sidebar (ຈໍໃຫຍ່) ແລະ ແຖບເທິງ (ມືຖື) */}
          <div className="pt-14 md:pl-64 md:pt-0">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
