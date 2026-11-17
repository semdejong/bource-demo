import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Branch } from "@/components/espalier";

const page = content.pages.notFound;

export const metadata: Metadata = {
  title: page.title,
};

export default function NotFound() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.text}</p>
        <Link className="link-more" href="/">
          {page.link}
        </Link>
      </div>
      <Branch label="01 TUINONTWERP" />
      <div className="field-body">
        <Link className="link-more" href="/tuinontwerp">
          Tuinontwerp en -aanleg
        </Link>
      </div>
      <Branch label="02 AANLEG" />
      <div className="field-body">
        <Link className="link-more" href="/tuinontwerp#aanleg">
          Aanleg
        </Link>
      </div>
      <Branch label="03 ONDERHOUD" />
      <div className="field-body">
        <Link className="link-more" href="/tuinonderhoud">
          Tuinonderhoud
        </Link>
      </div>
      <Branch label="04 ADVIES" />
      <div className="field-body">
        <Link className="link-more" href="/tuinadvies">
          Tuinadvies
        </Link>
      </div>
    </SiteChrome>
  );
}
