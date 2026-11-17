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
    </SiteChrome>
  );
}
