'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Announcement() {
  const heading = ["JOIN MY FREE DISCORD", "sk JOIN MY FREE SKOOL"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heading.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  },);

  const currentHeading = heading[currentIndex];

  return (
    <div className="flex justify-center items-center bg-[#87E64B] text-black p-4 mb-4 transition-all duration-500 ease-in-out">
      <h1 className="text-[19px] font-normal leading-[23px] flex items-center gap-1">
        {currentHeading === "JOIN MY FREE DISCORD" ? (
          <>
            <Image
              width={100}
            height={100}
              // 👇 Replace this with your image path or URL
              src="/heading.png" // 👈 Replace this with your image path or URL
              alt="Discord"
              className="w-8 h-8"
            />
            {currentHeading}
          </>
        ) : currentHeading.startsWith('sk') ? (
          <>
            <span className="text-2xl leading-[32px] font-bold">sk</span>{" "}
            {currentHeading.replace('sk ', '')}
          </>
        ) : (
          currentHeading
        )}
      </h1>
    </div>
  );
}
