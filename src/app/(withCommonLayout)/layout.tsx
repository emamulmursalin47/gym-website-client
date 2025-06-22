// import { Suspense } from "react"


import { Footer } from "@/src/components/layout/footer";
import { Header } from "@/src/components/layout/header";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow  lg:pt-16 pt-0 ">{children}</main>
     
     
      <Footer />
    </div>
  );
}