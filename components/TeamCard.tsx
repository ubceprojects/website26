import Image from "next/image";
import type { TeamMember } from "@/lib/data";

export function TeamCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex w-full flex-col items-center rounded-card border border-line bg-surface text-center transition-all duration-300 hover:-translate-y-1 hover:border-cloud/60 hover:shadow-[0_22px_60px_-26px_rgba(0,167,232,0.5)] ${
        featured
          ? "h-[268px] p-5 sm:w-[210px]"
          : "h-[252px] p-4 sm:w-[166px]"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-full ring-1 ring-line ${
          featured ? "h-36 w-36" : "h-28 w-28"
        }`}
      >
        {/*
          Placeholder photo. To use a real photo, replace the file at
          public${member.image} (keep the same filename). Imports are
          center-cropped into the circle, so a centered subject shows best.
        */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes={featured ? "144px" : "112px"}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3
        className={`mt-3 font-semibold leading-snug text-white ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {member.name}
      </h3>
      <p
        className={`mt-1 font-heading leading-snug text-cloud ${
          featured ? "text-sm" : "text-xs"
        }`}
      >
        {member.role}
      </p>
      {member.department && (
        <p className="mt-0.5 text-xs text-mist">{member.department}</p>
      )}
    </div>
  );
}
