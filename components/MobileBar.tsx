import Link from "next/link";
import { content } from "@/content";

export default function MobileBar() {
  return (
    <div className="mobile-bar" data-section="mobile-bar">
      <div className="mobile-bar-branch" aria-hidden="true">
        <span className="branch-node" />
        <span className="branch-line" />
      </div>
      <div className="mobile-bar-actions">
        <a href={content.phone.primaryTel} data-cta="bellen">
          Bellen
        </a>
        <Link href="/offerte" data-cta="offerte">
          Offerte
        </Link>
      </div>
    </div>
  );
}
