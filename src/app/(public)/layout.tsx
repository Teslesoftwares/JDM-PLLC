import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollProgress } from "@/components/motion/scroll-progress";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative z-10 flex min-h-screen flex-col">
        <ScrollProgress />
        <Header />
        <main className="motion-page-enter flex flex-1 flex-col">{children}</main>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
