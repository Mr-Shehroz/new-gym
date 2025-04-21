"use client";
import Image from "next/image";

export default function Line2() {
  return (
    <div className="flex justify-center items-center bg-[#87E64B] overflow-hidden border-t-8 border-b-8 border-t-[#343B33] border-b-[#343B33] py-4">
      <div className="flex items-center gap-40 animate-[moveLine_120s_linear_infinite] whitespace-nowrap">
        {/* First Item */}
        <div className="flex items-center gap-2">
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
          <h2 className="text-black text-2xl md:text-4xl font-bold italic">
            Gradient Text Scrolling Infinitely
          </h2>
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
        </div>

        {/* Second Item */}
        <div className="flex items-center gap-2">
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
          <h2 className="text-black text-2xl md:text-4xl font-bold italic">
            Transform Your Body, Transform Your Life
          </h2>
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
        </div>

        {/* Third Item */}
        <div className="flex items-center gap-2">
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
          <h2 className="text-black text-2xl md:text-4xl font-bold italic">
            Achieve Your Fitness
          </h2>
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
        </div>

        {/* Fourth Item */}
        <div className="flex items-center gap-2">
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
          <h2 className="text-black text-2xl md:text-4xl font-bold italic">
            Goals with Tailored Coaching
          </h2>
          <Image className="w-[20px] h-[20px]" src="/star.png" width={50} height={50} alt="star" />
        </div>
      </div>

      <style jsx>{`
        @keyframes moveLine {
          0% {
            transform: translateX(100%); /* Starts from the right outside */
          }
          50% {
            transform: translateX(0); /* Reaches the center */
          }
          100% {
            transform: translateX(-100%); /* Moves out to the left outside */
          }
        }
      `}</style>
    </div>
  );
}
