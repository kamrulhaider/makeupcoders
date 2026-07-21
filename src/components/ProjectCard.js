import Image from "next/image";
import Link from "next/link";
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-");
}

export default function ProjectCard({ image, title, des }) {
  return (
    <Link
      href={`/projects/${slugify(title)}`}
      className="block text-center bg-blue-900 rounded-2xl overflow-hidden
                 transition-all duration-300 ease-out
                 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-950/40"
    >
      <Image
        src={image}
        className="rounded-t-2xl w-full transition-transform duration-500 ease-out"
        alt={title + " project screenshot"}
      />
      <h4 className="text-2xl uppercase mt-3">{title}</h4>
      <p className="text-sm mb-3 text-justify px-4">{des}</p>
    </Link>
  );
}
