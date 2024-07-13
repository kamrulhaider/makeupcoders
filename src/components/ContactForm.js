"use client";
import React, { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import loaderlottie from "../../public/lottiefiles/loader.json";
import Lottie from "react-lottie-player";

export default function ContactForm() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        return toast.error("Network error!!");
      }

      // Handle successful response
      toast.success(
        "Message sent successfully!! We will contact you through your email."
      );
      e.target.reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form className="px-4" onSubmit={handleSubmit}>
        <input
          onInput={(e) => setName(e.target.value)}
          required
          type="text"
          className="w-full border-b-2 border-white py-3 bg-transparent focus:outline-none"
          placeholder="Name"
        />
        <input
          onInput={(e) => setEmail(e.target.value)}
          required
          type="email"
          className="w-full border-b-2 border-white py-3 bg-transparent focus:outline-none my-3"
          placeholder="Email"
        />
        <input
          onInput={(e) => setPhone(e.target.value)}
          type="text"
          className="w-full border-b-2 border-white py-3 bg-transparent focus:outline-none mb-3"
          placeholder="Phone"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={3}
          className="w-full bg-transparent focus:outline-none border-b-2 border-white mb-5"
          placeholder="Message"
        ></textarea>
        {loading ? (
          <Lottie
            loop
            animationData={loaderlottie}
            play
            style={{ height: 100 }}
          />
        ) : (
          <Button type={"submit"} title={"Send Message"} />
        )}
      </form>
    </div>
  );
}
