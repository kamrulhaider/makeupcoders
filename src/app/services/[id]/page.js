import Image from "next/image";
import images from "../../../../public/images/images";
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
      <div className="hero-section h-[200px] rounded-2xl flex items-center justify-center text-center mb-16">
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold mb-3">
            {id === "web-development"
              ? "Web Development"
              : id === "app-development"
              ? "App Development"
              : "UI/UX Design"}
          </h2>
          <p className="text-sm">
            {id === "web-development"
              ? "We create websites that function as impactful marketing tools and deliver unforgettable brand experiences."
              : id === "app-development"
              ? "Our mobile designs provide your customers with intuitive digital solutions at their fingertips."
              : "Our UI/UX designs offer seamless and engaging digital experiences, ensuring your customers interact effortlessly with your brand."}
          </p>
        </div>
      </div>

      {/* project showcase  */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
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
