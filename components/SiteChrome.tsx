import type { ReactNode } from "react";
import MobileBar from "@/components/MobileBar";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="tree">
        <main id="inhoud">{children}</main>
        <SiteFooter />
      </div>
      <MobileBar />
    </>
  );
}
