import projectList from "../../../../projects";
import ProjectCard from "@/components/ProjectCard";
import ServiceLinkCard from "@/components/ServiceLinkCard";
import GetInTouch from "@/components/GetInTouch";

export default function Page({ params }) {
  const { id } = params;

  const filteredProject = projectList.filter((item) => {
    if (id === "web-development") {
      return item.category === "web";
    }
    if (id === "app-development") {
      return item.category === "app";
    }
    if (id === "ui-ux-design") {
      return item.category === "uiux";
    }
  });

  const serviceLink = [
    {
      title: "Web Development",
      name: "web-development",
      id: 1,
      className:
        "h-full rounded-2xl bg-[url('../../public/images/services/web-development.jpg')] bg-no-repeat bg-cover",
    },
    {
      title: "App Development",
      name: "app-development",
      id: 2,
      className:
        "h-full rounded-2xl bg-[url('../../public/images/services/app-development.jpg')] bg-no-repeat bg-cover",
    },
    {
      title: "UI/UX Design",
      name: "ui-ux-design",
      id: 3,
      className:
        "h-full rounded-2xl bg-[url('../../public/images/services/web-development.jpg')] bg-no-repeat bg-cover",
    },
  ];

  const filteredService = serviceLink.filter((item) => {
    if (id === "web-development") {
      return item.name !== "web-development";
    }
    if (id === "app-development") {
      return item.name !== "app-development";
    }
    if (id === "ui-ux-design") {
      return item.name !== "ui-ux-design";
    }
  });

  return (
    <section className="global-container">
      {/* title section  */}
      <div className="hero-section min-h-[320px] rounded-2xl flex items-center justify-center text-center mb-16 px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            {id === "web-development"
              ? "Next-Generation Web Solutions"
              : id === "app-development"
                ? "Smart Mobile Solutions For Modern Businesses"
                : "Design Experiences Your Users Love"}
          </h2>

          <p className="text-lg md:text-xl leading-9 text-slate-600 max-w-3xl mx-auto">
            {id === "web-development"
              ? "From strategy to deployment, we build scalable and secure web solutions that empower businesses with exceptional performance, seamless experiences, and future-ready technology."
              : id === "app-development"
                ? "We transform ideas into elegant mobile applications that deliver effortless user experiences, powerful features, and meaningful connections between brands and customers."
                : "Our design approach focuses on understanding users, solving real problems, and creating visually stunning interfaces that make every interaction simple, enjoyable, and memorable."}
          </p>
        </div>
      </div>

      {/* project showcase  */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {filteredProject.map((item, i) => (
            <ProjectCard
              key={i}
              title={item.title}
              image={item.image}
              des={item.des}
            />
          ))}
        </div>
      </div>

      {/* other services  */}
      <div className="h-[300px]">
        <div className="grid lg:grid-cols-2 h-full gap-5">
          {filteredService.map((item, i) => (
            <ServiceLinkCard
              key={i}
              title={item.title}
              className={item.className}
              href={`/services/${item.name}`}
            />
          ))}
        </div>
      </div>

      {/* get in touch  */}
      <GetInTouch />
    </section>
  );
}

export async function generateMetadata({ params }) {
  const id = params.id;
  let title = "Service — Makeup Coders";
  let description =
    "Learn about our services and how we can help build your product.";

  if (id === "web-development") {
    title = "Web Development — Makeup Coders";
    description =
      "We build responsive, high-performance websites that drive results and brand growth.";
  } else if (id === "app-development") {
    title = "App Development — Makeup Coders";
    description =
      "Custom mobile apps designed for performance, usability, and growth.";
  } else if (id === "ui-ux-design") {
    title = "UI/UX Design — Makeup Coders";
    description =
      "User-centered UI/UX design to create delightful and effective experiences.";
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
