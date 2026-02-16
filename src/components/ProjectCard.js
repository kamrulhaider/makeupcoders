import Image from "next/image";

export default function ProjectCard({ image, title, des }) {
  return (
    <div className="text-center bg-blue-900 rounded-2xl hover:scale-[1.01] transition-all ease-in">
      <Image
        src={image}
        className="rounded-t-2xl w-full"
        alt={title + " project screenshot"}
      />
      <h4 className="text-2xl uppercase mt-3">{title}</h4>
      <p className="text-sm mb-3 px-4">{des}</p>
    </div>
  );
}
