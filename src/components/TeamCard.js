"use client";
import Image from "next/image";
import Link from "next/link";
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
    <div className="p-10 text-center bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105">
      {/* Profile image with subtle hover rotate */}
      <div className="transform-gpu transition-transform duration-200 hover:rotate-3">
        <Image
          src={image}
          className="w-40 h-40 mx-auto rounded-full object-cover"
          alt={name + " — team member"}
        />
      </div>

      {/* Name & position */}
      <h4 className="text-2xl mt-5 font-semibold text-white">{name}</h4>
      <p className="text-gray-300">{position}</p>

      {/* Social links */}
      <div className="flex gap-3 justify-center mt-5">
        {linkedin && (
          <Link suppressHydrationWarning href={linkedin} target="_blank">
            <div className="transition-transform duration-150 hover:scale-110">
              <Image
                className="h-8 w-8"
                src={images.linkedin}
                alt="LinkedIn icon"
              />
            </div>
          </Link>
        )}
        {github && (
          <Link suppressHydrationWarning href={github} target="_blank">
            <div className="transition-transform duration-150 hover:scale-110">
              <Image
                className="h-8 w-8"
                src={images.github}
                alt="GitHub icon"
              />
            </div>
          </Link>
        )}
        {behance && (
          <Link suppressHydrationWarning href={behance} target="_blank">
            <div className="transition-transform duration-150 hover:scale-110">
              <Image
                className="h-8 w-8"
                src={images.behance}
                alt="Behance icon"
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
