"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { LeadershipMember } from "@/lib/leadership";

export function LeadershipProfile({
  member,
  photoSide,
}: {
  member: LeadershipMember;
  photoSide: "left" | "right";
}) {
  const { more } = member;
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const readMoreRef = useRef<HTMLButtonElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const hasToggled = useRef(false);

  // The "Read More" button unmounts while the message is open, so hand focus
  // to the message on open and back to "Read More" on close.
  useEffect(() => {
    if (!hasToggled.current) {
      hasToggled.current = true;
      return;
    }
    if (open) {
      messageRef.current?.focus({ preventScroll: true });
    } else {
      readMoreRef.current?.focus();
    }
  }, [open]);

  return (
    <article
      className={`flex flex-col items-center gap-8 border-b border-[var(--rule)] pt-10 lg:items-start lg:gap-14 ${
        more ? "pb-6" : "pb-10"
      } ${photoSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Circular portrait */}
      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full bg-white shadow-sm lg:h-56 lg:w-56">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 224px, 160px"
          className={
            member.photoFit === "cover"
              ? "object-cover object-[50%_30%]"
              : "object-contain p-[12%]"
          }
        />
      </div>

      <div className="min-w-0 flex-1 text-left">
        <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
        <p className="mt-2 mb-5 text-[11px] font-bold tracking-widest text-[#22c55e] uppercase">
          {member.role}
        </p>

        <div className="flex flex-col gap-4 text-sm leading-relaxed opacity-80 md:text-[15px]">
          {member.intro.map((paragraph) => (
            <p key={paragraph} className="!mb-0 !max-w-none">
              {paragraph}
            </p>
          ))}
        </div>

        {more && (
          <>
            {!open && (
              <button
                ref={readMoreRef}
                type="button"
                className="fcl-button mt-6"
                aria-expanded={false}
                aria-controls={panelId}
                onClick={() => setOpen(true)}
              >
                Read More
              </button>
            )}

            {/* Expands inline; grid-rows trick animates height without measuring */}
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              aria-hidden={!open}
              inert={!open}
            >
              <div className="overflow-hidden">
                <div
                  ref={messageRef}
                  tabIndex={-1}
                  role="region"
                  aria-label={member.moreLabel ?? "More"}
                  className="pt-4 outline-none"
                >
                  <div className="flex flex-col gap-4 text-sm leading-relaxed opacity-80 md:text-[15px]">
                    {more.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="!mb-0 !max-w-none">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <p className="!mt-6 !mb-0 text-sm font-bold">
                    {more.signOff[0]}
                    <br />
                    <span className="font-normal opacity-80">
                      {more.signOff[1]}
                    </span>
                  </p>
                  <button
                    type="button"
                    className="fcl-button mt-6"
                    aria-expanded
                    aria-controls={panelId}
                    onClick={() => setOpen(false)}
                  >
                    Read Less
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
