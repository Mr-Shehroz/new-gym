"use client"
import { useRef } from "react";
import Image from "next/image";

export default function Success() {
  // Create a ref to the image container for scrolling
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll the container to the left
  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  // Function to scroll the container to the right
  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:justify-between md:gap-6">
        {/* Header & Arrows */}
        <div className="max-w-sm mx-auto flex flex-col items-center justify-between gap-6">
          <div className="space-y-4 md:mt-15">
            <h4 className="text-3xl md:text-4xl font-bold italic">
              Success <span className="text-[#87E64B]">Stories</span>
            </h4>
            <p className="text-lg text-gray-300">
              My clients achieve incredible transformations through personalized training and support,
              reaching their fitness goals and building confidence along the way.
            </p>
          </div>

          <div className="flex gap-4">
            {/* Left Arrow */}
            <button className="p-2" onClick={scrollLeft}>
              <Image className="rotate-180" src="/right.webp" width={40} height={40} alt="left arrow" />
            </button>
            {/* Right Arrow */}
            <button className="p-2" onClick={scrollRight}>
              <Image src="/right.webp" width={40} height={40} alt="right arrow" />
            </button>
          </div>
        </div>

        {/* 4 Fixed-Size Images in a Row with Horizontal Scrolling */}
        <div className="max-w-xl mx-auto mt-10 overflow-hidden">
          <div
            ref={imageContainerRef}
            className="flex space-x-4 overflow-x-auto hide-scrollbar"
          >
            <Image src="/1.webp" width={400} height={300} alt="1" className="rounded-lg shadow-lg md:w-[450px] lg:w-[500px] xl:w-[650px]" />
            <Image src="/2.webp" width={400} height={300} alt="2" className="rounded-lg shadow-lg md:w-[450px] lg:w-[500px] xl:w-[650px]" />
            <Image src="/3.webp" width={400} height={300} alt="3" className="rounded-lg shadow-lg md:w-[450px] lg:w-[500px] xl:w-[650px]" />
            <Image src="/4.webp" width={400} height={300} alt="4" className="rounded-lg shadow-lg md:w-[450px] lg:w-[500px] xl:w-[650px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
