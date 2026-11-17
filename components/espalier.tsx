import Link from "next/link";
import { content, directMail } from "@/content";
import { ctaType } from "@/lib/cta";

export function Branch({
  label,
  tone = "olijf",
}: {
  label?: string;
  tone?: "olijf" | "neon" | "inkt";
}) {
  return (
    <div className={`branch branch-${tone}`}>
      <span className="branch-node" aria-hidden="true" />
      {label ? <span className="branch-label">{label}</span> : null}
      <span className="branch-line" aria-hidden="true" />
    </div>
  );
}

export function Phones() {
  const { phone } = content;
  return (
    <div className="phones">
      <a className="phone" href={phone.primaryTel} data-cta={ctaType(phone.primaryTel)}>
        {phone.primary}
      </a>
      <p className="phone-fallback">
        <span className="phone-note">{phone.fallbackLabel}</span>{" "}
        <a className="phone" href={phone.fallbackTel} data-cta={ctaType(phone.fallbackTel)}>
          {phone.fallback}
        </a>
      </p>
    </div>
  );
}

export function MailAddress() {
  return (
    <p>
      <a className="mail-link" href={directMail} data-cta="mailen">
        {content.email}
      </a>
    </p>
  );
}

export function TaskList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tasks">
      {items.map((item) => (
        <li key={item}>
          <span className="task-node" aria-hidden="true" />
          <span className="task-stub" aria-hidden="true" />
          <span className="task-copy">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CallStrip() {
  const { phone } = content;
  return (
    <aside className="callstrip" aria-label="Bellen of offerte">
      <Branch tone="neon" />
      <div className="field-body">
        <p>Ook u kunt terecht voor al uw tuinvragen en meer.</p>
        <Phones />
        <div className="btn-row">
          <a className="btn btn-ink" href={phone.primaryTel} data-cta="bellen">
            Bellen
          </a>
          <Link className="btn btn-ghost" href="/offerte" data-cta="offerte">
            Offerte
          </Link>
          <a className="btn btn-ghost" href={directMail} data-cta="mailen">
            E-mail
          </a>
        </div>
      </div>
    </aside>
  );
}
