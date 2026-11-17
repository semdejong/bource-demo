"use client";

import { useState, type FormEvent } from "react";
import { content, mailHref } from "@/content";

export default function MailForm({ kind }: { kind: "contact" | "offerte" }) {
  const [error, setError] = useState<string | null>(null);
  const labels = content.form;
  const subject = kind === "offerte" ? labels.subjectOfferte : labels.subjectContact;
  const cta = kind === "offerte" ? "offerte" : "mailen";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") || "").trim();
    const telefoon = String(data.get("telefoon") || "").trim();
    const email = String(data.get("email") || "").trim();
    const bericht = String(data.get("bericht") || "").trim();
    const dienst = String(data.get("dienst") || "").trim();

    if (!naam) {
      setError(labels.errors.naam);
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(labels.errors.email);
      return;
    }
    if (!bericht) {
      setError(labels.errors.bericht);
      return;
    }

    const lines = [
      "Goedendag,",
      "",
      `Naam: ${naam}`,
      telefoon ? `Telefoon: ${telefoon}` : null,
      email ? `E-mail: ${email}` : null,
      dienst ? `Onderwerp: ${dienst}` : null,
      "",
      bericht,
    ].filter((line): line is string => line !== null);

    window.location.href = mailHref(subject, lines.join("\n"));
  }

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <p className="form-note">{labels.note}</p>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <label>
        {labels.naam}
        <input name="naam" type="text" autoComplete="name" required />
      </label>
      <label>
        {labels.telefoon}
        <input name="telefoon" type="tel" autoComplete="tel" />
      </label>
      <label>
        {labels.email}
        <input name="email" type="email" autoComplete="email" />
      </label>
      {kind === "offerte" ? (
        <label>
          {labels.dienst}
          <select name="dienst" defaultValue="">
            <option value="">{labels.dienstEmpty}</option>
            {labels.diensten.map((dienst) => (
              <option key={dienst} value={dienst}>
                {dienst}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <label>
        {labels.bericht}
        <textarea name="bericht" required />
      </label>
      <button className="btn btn-ink" type="submit" data-cta={cta}>
        {kind === "offerte" ? labels.submitOfferte : labels.submitContact}
      </button>
    </form>
  );
}
