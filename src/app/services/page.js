import GetInTouch from "@/components/GetInTouch";
import ServiceLinkCard from "@/components/ServiceLinkCard";
import React from "react";

export default function ServicePage() {
  const serviceLink = [
    {
      title: "Web Development",
      name: "web-development",
      id: 1,
      className:
        "lg:row-span-2 h-full rounded-2xl bg-[url('../../public/images/services/grapic-design.jpg')] bg-no-repeat bg-cover",
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

  return (
    <section className="global-container">
      <div className="h-[600px]">
        <div className="grid lg:grid-rows-2 lg:grid-cols-2 h-full gap-5">
          {serviceLink.map((item, i) => (
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
