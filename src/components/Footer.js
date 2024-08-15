"use client";
import Image from "next/image";
import Link from "next/link";
import images from "../../public/images/images";

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-28">
      <section className="global-container">
        <div className="flex lg:flex-row flex-col items-center gap-5 justify-between py-5  border-gray-600 lg:border-b lg:text-left text-center">
          <div className="border-b flex justify-center lg:border-none lg:w-auto w-full border-gray-600 lg:pb-0 pb-5">
            <Link href="/">
              <Image src={images.logo} alt="Agency Logo" height={30} />
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link className="text-gray-300 hover:text-white" href="/about">
              ABOUT US
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/services">
              SERVICES
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/contact">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="py-5 flex lg:flex-row flex-col justify-between items-center lg:text-left text-center gap-5">
          <div className="flex gap-5 lg:flex-row flex-col">
            <div>
              <p>MB Complex, 4th Floor</p>
              <p>Wasa Circle, Chattogram</p>
              <p>Bangladesh</p>
            </div>
            <div>
              <p>Contact US</p>
              <p>+880 1690-150490</p>
              <p>info@makeupcoders.com</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link suppressHydrationWarning href="https://wa.me/8801675654439">
              <Image
                className="h-8 w-8"
                src={images.whatsapp}
                alt="Whatsapp icon"
              />
            </Link>
            <Link
              suppressHydrationWarning
              href="https://www.facebook.com/makeupcoder"
            >
              <Image
                className="h-8 w-8"
                src={images.facebook}
                alt="Facebook icon"
              />
            </Link>
            <Link
              suppressHydrationWarning
              href="https://www.instagram.com/makeupcoders/"
            >
              <Image
                className="h-8 w-8"
                src={images.instagram}
                alt="Instagram icon"
              />
            </Link>
            <Link
              suppressHydrationWarning
              href="https://www.linkedin.com/company/makeupcoder/"
            >
              <Image
                className="h-8 w-8"
                src={images.linkedin}
                alt="LinkedIn icon"
              />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
