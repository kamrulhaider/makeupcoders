"use client";
import Image from "next/image";
import Link from "next/link";
import images from "../../public/images/images";
import { useState } from "react";

export default function Footer() {
  const addresses = {
    chattogram: {
      title: "Chattogram Office",
      lines: ["MB Complex, 4th Floor", "Wasa Circle, Chattogram", "Bangladesh"],
      mobile: "+880 1690-150490",
    },
    malaysia: {
      title: "Malaysia Office",
      lines: [
        `MH Platinum 2 Residences (Residensi MH Platinum 2),
Block B,Floor-29-03
Lot 21770 Setapak Jaya, 53200 Kuala Lumpur, Federal Territory of Kuala Lumpur`,
      ],
      mobile: "+60 11-1406 7182",
    },
    rajshahi: {
      title: "Rajshahi Office",
      lines: ["Beldarpara, Boalia, Rajshahi 6000, Rajshahi, Bangladesh, "],
      mobile: "+880 1690-150490",
    },
  };
  const [activeOffice, setActiveOffice] = useState("chattogram");
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
        <div className="py-5 flex lg:flex-row flex-col justify-between items-start lg:text-left text-center gap-5">
          <div className="flex gap-5 lg:flex-row flex-col">
            <div className="flex gap-3 justify-center lg:justify-start items-start">
              <button
                onClick={() => setActiveOffice("chattogram")}
                className={`px-4 py-1 text-sm rounded self-start leading-none ${
                  activeOffice === "chattogram"
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Chattogram
              </button>
              <button
                onClick={() => setActiveOffice("malaysia")}
                className={`px-4 py-1 text-sm rounded self-start leading-none ${
                  activeOffice === "malaysia"
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Malaysia
              </button>
              <button
                onClick={() => setActiveOffice("rajshahi")}
                className={`px-4 py-1 text-sm rounded self-start leading-none ${
                  activeOffice === "rajshahi"
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Rajshahi
              </button>
            </div>

            {/* Step 4: Display active office */}
            <div className="text-gray-300 max-w-md min-h-32 md:min-h-40 transition-all duration-300">
              <p className="font-semibold">{addresses[activeOffice].title}</p>
              {addresses[activeOffice].lines.map((line, idx) => (
                <p
                  key={idx}
                  className="text-sm text-gray-300 whitespace-pre-line break-words"
                >
                  {line}
                </p>
              ))}
            </div>

            <div>
              <p className="font-bold">Contact US</p>
              <p className="mt-2 text-sm text-gray-300">
                {addresses[activeOffice].mobile}
              </p>
              <p className="text-sm text-gray-300">info@makeupcoders.com</p>
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
