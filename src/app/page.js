import Button from "@/components/Button";
import Image from "next/image";
import images from "../../public/images/images";
import GetInTouch from "@/components/GetInTouch";
import ServiceLinkCard from "@/components/ServiceLinkCard";
import Link from "next/link";

export default function Home() {
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
      {/* hero section */}

      <div className="hero-section lg:h-[600px] rounded-2xl lg:px-20 px-3 py-10">
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          <div className="lg:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Premium web, app & UI/UX studio
            </div>

            <h1 className="mt-6 lg:text-6xl text-4xl font-semibold leading-[1.05] tracking-tight">
              Bringing Your{" "}
              <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-fuchsia-700 bg-clip-text text-transparent">
                Digital Dreams
              </span>{" "}
              to Life
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600 max-w-xl lg:mx-0 mx-auto">
              We design and build fast, modern websites and apps that feel
              premium, convert better, and scale with your business—without the
              usual headache.
            </p>

            <div className="mt-8 flex lg:justify-start justify-center gap-3">
              <Link href="/about">
                <Button title="Learn More" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-8 flex lg:justify-start justify-center gap-6 text-xs text-slate-500">
              <span>Fast delivery</span>
              <span>Clean UI</span>
              <span>Scalable code</span>
            </div>
          </div>

          <div className="lg:w-1/2 z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-fuchsia-500/10 blur-2xl" />
              <Image
                className="relative w-full rounded-3xl border border-slate-200/60 shadow-lg"
                src={images.heroImg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div className="h-[600px] my-16">
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

      {/* How we provide section */}
      <div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="text-center p-2">
            <Image
              src={images.friendly}
              className="w-2/3 h-28 block mx-auto"
              alt="Driven by Innovation"
            />
            <h3 className="text-xl uppercase my-4">Driven by Innovation</h3>
            <p className="text-sm">
              Our journey starts with comprehensive brand research, ensuring
              that each product we develop is purposeful. By fusing creativity,
              design, and cutting-edge technology, we craft unique web, app, and
              UI/UX solutions that stand out.
            </p>
          </div>
          <div className="text-center p-2">
            <Image
              src={images.passionate}
              className="w-2/3 h-28 block mx-auto"
              alt="Driven by Innovation"
            />
            <h3 className="text-xl uppercase my-4">
              Crafting Digital Masterpieces
            </h3>
            <p className="text-sm">
              We dive deep into brand research for every project to ensure our
              creations are impactful and meaningful. By integrating artistic
              vision, design expertise, and technological advancements, we
              deliver exceptional web development, app development, and UI/UX
              services.
            </p>
          </div>
          <div className="text-center p-2">
            <Image
              src={images.resourceful}
              className="w-2/3 h-28 block mx-auto"
              alt="Driven by Innovation"
            />
            <h3 className="text-xl uppercase my-4">Innovating with Purpose</h3>
            <p className="text-sm">
              Each project kicks off with in-depth brand analysis to ensure our
              products are both purposeful and innovative. We combine artistry,
              design, and technology to create remarkable web, app, and UI/UX
              solutions that inspire and engage.
            </p>
          </div>
        </div>
      </div>

      {/* get in touch section */}
      <GetInTouch />
    </section>
  );
}
