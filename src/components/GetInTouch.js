import Link from "next/link";
import Button from "./Button";

export default function GetInTouch() {
  return (
    <div className="hero-section lg:h-[300px] rounded-2xl lg:px-20 px-3 py-10 relative top-20">
      <div className="flex lg:flex-row flex-col items-center h-full lg:text-left text-center gap-4">
        <div className="lg:w-1/2">
          <h2 className="lg:text-6xl text-4xl font-bold mb-5">
            Let&apos;s discuss your project.
          </h2>
          <p>
            Ready to elevate your business? Reach out to us today and discover
            how our expertise can drive your growth.
          </p>
        </div>
        <div className="text-end lg:w-1/2">
          <Link href={"https://wa.me/8801675654439"}>
            <Button title={"Get in touch"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
