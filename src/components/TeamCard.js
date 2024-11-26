import Image from "next/image";
import Link from "next/link";
import React from "react";
import images from "../../public/images/images";

export default function TeamCard({
  name,
  position,
  image,
  linkedin,
  github,
  behance,
}) {
  return (
    <div className="p-10 text-center">
      <Image src={image} className="w-full rounded-full" alt="Team Member" />
      <h4 className="text-2xl mt-5">{name}</h4>
      <p>{position}</p>
      <div className="flex gap-3 justify-center mt-5">
        {linkedin && (
          <Link suppressHydrationWarning href={linkedin}>
            <Image
              className="h-8 w-8"
              src={images.linkedin}
              alt="LinkedIn icon"
            />
          </Link>
        )}
        {github && (
          <Link suppressHydrationWarning href={github}>
            <Image
              className="h-8 w-8"
              src={images.github}
              alt="LinkedIn icon"
            />
          </Link>
        )}
        {behance && (
          <Link suppressHydrationWarning href={behance}>
            <Image
              className="h-8 w-8"
              src={images.behance}
              alt="LinkedIn icon"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
