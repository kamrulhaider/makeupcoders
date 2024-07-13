import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="global-container">
      <div className="hero-section lg:h-[500px] rounded-2xl lg:px-20 px-3 py-10 mb-16">
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          <div className="lg:w-1/2 z-10">
            <h1 className="lg:text-6xl text-4xl font-bold mb-5">Contact Us</h1>
            <p className="mb-5">
              Ready to elevate your project? Let&apos;s discuss your ideas and
              discover how we can help your business expand. If you&apos;re
              seeking distinctive digital experiences that resonate with your
              users, reach out to us.
            </p>
          </div>
          <div className="lg:w-1/2 z-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
