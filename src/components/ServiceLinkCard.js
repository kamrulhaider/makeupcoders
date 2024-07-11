import Link from "next/link";
import React from "react";

export default function ServiceLinkCard({ href, className, title }) {
  return (
    <div className={className}>
      <Link
        className="h-full hover:bg-[#005ba08a]  transition-all ease-in-out rounded-2xl flex items-center justify-center flex-col"
        href={href}
      >
        <span className="text-2xl uppercase font-bold mb-3">{title}</span>
        <span className="uppercase">View Projects</span>
      </Link>
    </div>
  );
}
