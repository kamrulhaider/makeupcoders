"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import images from "../../../public/images/images";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Shibly Pathan",
      role: "Founder, Mytrams  & Tramedi",
      image: images.Shibly,
      text: "We needed a complete travel agency management solution, and the team executed it flawlessly. From ticketing modules to accounting and role-based access control, everything was built with precision and scalability in mind.",
    },
    {
      name: "Shaikat Barua",
      role: "Founder, Travelion",
      image: images.Shaikat,
      text: "The Laravel backend architecture was structured and scalable, with a smooth admin panel tailored for real travel agency workflows. The system handles ticketing, accounting, and role-based access efficiently. Very professional execution.",
    },
    {
      name: "Mohibul Alam",
      role: "Founder, Tech Solution BD",
      image: images.Mohib,
      text: "From UI design to backend integration,The team developed our React Native & Web application with a strong focus on usability and performance. The interface feels modern, the system is stable, and the delivery timeline was properly maintained.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Testimonials
          </p>

          <h2 className="mt-5 text-3xl lg:text-4xl font-semibold text-white">
            Clients trust us for a reason.
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
                <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Stars */}
                <div className="text-amber-300 text-sm">★★★★★</div>

                {/* Text */}
                <p className="mt-4 text-sm leading-7 text-white/80">
                  “{item.text}”
                </p>

                {/* Client */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-2xl object-cover border border-white/10"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-white/60">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
