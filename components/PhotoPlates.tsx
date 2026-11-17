"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Plate } from "@/content";

export default function PhotoPlates({ photos }: { photos: readonly Plate[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const active = index === null ? null : photos[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIndex(null);
        opener.current?.focus();
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => {
          if (current === null) return current;
          return (current - 1 + photos.length) % photos.length;
        });
      }
      if (event.key === "ArrowRight") {
        setIndex((current) => {
          if (current === null) return current;
          return (current + 1) % photos.length;
        });
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, photos.length]);

  return (
    <>
      <div className="plates">
        {photos.map((photo, photoIndex) => (
          <figure className={photo.width >= 900 ? "plate plate-wide" : "plate"} key={photo.src}>
            <button
              type="button"
              className="plate-btn"
              onClick={(event) => {
                opener.current = event.currentTarget;
                setIndex(photoIndex);
              }}
              aria-label={`Vergroot: ${photo.alt}`}
            >
              {/* Eerlijke bronmaat: niet groter dan het bestand. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
            </button>
            {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <div className="lightbox-bar">
            {photos.length > 1 ? (
              <button
                type="button"
                onClick={() => setIndex((current) => (current === null ? 0 : (current - 1 + photos.length) % photos.length))}
              >
                Vorige
              </button>
            ) : null}
            {photos.length > 1 ? (
              <button type="button" onClick={() => setIndex((current) => (current === null ? 0 : (current + 1) % photos.length))}>
                Volgende
              </button>
            ) : null}
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setIndex(null);
                opener.current?.focus();
              }}
            >
              Sluiten
            </button>
          </div>
          <div className="lightbox-stage">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                style={{ ["--plate-w" as string]: `${active.width}px`, ["--plate-h" as string]: `${active.height}px` }}
              />
              <figcaption id={titleId}>{active.caption ?? active.alt}</figcaption>
            </figure>
          </div>
        </div>
      ) : null}
    </>
  );
}
