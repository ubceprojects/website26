import Image from "next/image";
import Link from "next/link";

export function Logo({
  withText = true,
  className = "",
}: {
  withText?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="eProjects UBC home"
    >
      <Image
        src="/brand/logo-coin.png"
        alt="eProjects UBC"
        width={36}
        height={36}
        priority
        className="h-9 w-9 transition-transform duration-200 group-hover:scale-105"
      />
      {withText && (
        <span className="font-heading text-lg font-black tracking-tight text-white">
          eProjects
        </span>
      )}
    </Link>
  );
}
