import Button from "@/components/Button";
import Image from "next/image";
import images from "../../../public/images/images";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import teamList from "../../../teams";
import TeamCard from "@/components/TeamCard";

export default function AboutPage() {
  return (
    <section className="global-container">
      {/* about company section */}
      <div className="hero-section rounded-2xl lg:pl-20 lg:pt-0 pt-5 mb-16">
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          <div className="lg:w-3/5 px-3">
            <h1 className="lg:text-6xl text-4xl font-bold mb-5">About Us</h1>
            <p className="mb-5">
              Established in 2023, we are a dynamic creative agency dedicated to
              achieving enduring outcomes for our clients. Collaborating with
              startups, corporations, and nonprofits, we specialize in designing
              solutions that drive significant change. Our passion lies in
              developing brands, products, and digital experiences that deeply
              resonate with our clients&apos; target audiences.
            </p>
          </div>
          <div className="lg:w-2/5">
            <Image
              className="w-full h-[400px] object-cover lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl"
              src={images.ouroffice}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>

      {/* about team section */}
      <div className="bg-gray-700 rounded-2xl lg:pr-20 lg:pt-0 lg:pb-0 pb-5">
        <div className="flex lg:flex-row flex-col items-center h-full lg:text-left text-center gap-4">
          <div className="lg:w-3/5">
            <Image
              className="w-full h-[600px] object-cover lg:rounded-l-2xl lg:rounded-tr-none rounded-t-2xl"
              src={images.teamdetails}
              alt="Hero Image"
            />
          </div>
          <div className="lg:w-1/2 px-3">
            <h1 className="lg:text-6xl text-4xl font-bold mb-5">
              Top-tier Talent
            </h1>
            <p className="mb-5">
              We are a team of strategists, problem-solvers, and technologists.
              Every design is meticulously crafted from concept to launch,
              ensuring it thrives in its intended market. We continuously update
              our skills across various platforms.
            </p>
            <p className="mb-5">
              Our multi-disciplinary team values not only form but also content
              and meaning. We prioritize craftsmanship, exceptional service, and
              timely delivery. Our clients are consistently impressed with our
              high-quality outcomes that capture their brand&apos;s story and
              mission.
            </p>
          </div>
        </div>
      </div>

      {/* team member's  */}
      <div className="mt-16">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-center">
          {teamList.map((item, i) => (
            <TeamCard
              key={i}
              name={item.name}
              image={item.image}
              position={item.position}
              github={item.github ? item.github : false}
              linkedin={item.linkedin}
              behance={item.behance ? item.behance : false}
            />
          ))}
        </div>
      </div>

      {/* Real deal section */}
      <div className="hero-section rounded-2xl lg:pl-20 lg:pt-0 pt-5 mt-16">
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          <div className="lg:w-3/5 px-3">
            <h1 className="lg:text-6xl text-4xl font-bold mb-5">
              Genuine Partners
            </h1>
            <p className="mb-5">
              As strategic allies in our clients’ businesses, we embrace every
              challenge as our own. Solving real problems demands empathy and
              collaboration, and we aim to bring a fresh perspective to every
              project. We make design and technology more accessible, providing
              tools to measure success.
            </p>
            <p className="mb-5">
              We are visual storytellers, creating appealing and captivating
              content. By merging business and marketing strategies, we motivate
              audiences to take action and achieve tangible results.
            </p>
          </div>
          <div className="lg:w-2/5 w-full">
            <Image
              className="w-full h-[600px] object-cover lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl"
              src={images.realdeal}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>

      {/* get in touch section  */}
      <GetInTouch />
    </section>
  );
}
