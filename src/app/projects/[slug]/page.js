import Image from "next/image";
import projectList from "../../../../projects.js";

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-");
}

export async function generateStaticParams() {
  return projectList.map((p) => ({ slug: slugify(p.title) }));
}

export function generateMetadata({ params }) {
  const slug = params.slug;
  const project = projectList.find((p) => slugify(p.title) === slug);
  if (!project) return { title: "Project — Makeup Coders" };
  return {
    title: `${project.title} — Makeup Coders`,
    description: project.des,
    openGraph: {
      title: `${project.title} — Makeup Coders`,
      description: project.des,
      images: [
        {
          url: `https://makeupcoders.com${project.image?.src || project.image}`,
          alt: project.title,
        },
      ],
    },
  };
}

export default function Page({ params }) {
  const { slug } = params;
  const project = projectList.find((p) => slugify(p.title) === slug);

  if (!project) {
    return <div className="global-container">Project not found</div>;
  }

  return (
    <section className="global-container">
      <div className="hero-section rounded-2xl lg:pl-20 lg:pt-0 pt-5 mb-16">
        <div className="flex lg:flex-row flex-col items-center gap-6">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="mb-4">{project.des}</p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
