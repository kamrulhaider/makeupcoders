"use client";
import React from "react";

export default function Button({ title, type, onClick, className }) {
  return (
    <button
      type={type}
      className={`${className} bg-white p-4 text-xl uppercase text-gray-800 rounded-2xl hover:bg-blue-600 hover:text-white transition-all ease-in-out`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
