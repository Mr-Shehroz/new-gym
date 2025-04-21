"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    image: "/men1.webp",
    quoteImg: "/wuoto.png",
    name: "Harrison",
    date: "Jul 09, 2023",
    content:
      "Really detailed workout plan which all you have to do is follow and I'm so happy that I'm progressing at a faster rate. It's really good nutrition advice and you definitely will see the program is made for my genetics — progress in the first couple of weeks. 10/10!",
    ratingImg: "/stars.png",
  },
  {
    image: "/men2.webp",
    quoteImg: "/wuoto.png",
    name: "Colton",
    date: "Jul 25, 2023",
    content:
      "Major leaps in strength! In 8 weeks my bench and squat both went up 15lbs, and my deadlift went from 345 to 405. I also learned the importance of timing your rest period in between sets to maintain intensity or to maximize your power. 10/10!",
    ratingImg: "/stars.png",
  },
  {
    image: "/men3.webp",
    quoteImg: "/wuoto.png",
    name: "Matěj",
    date: "Jul 30, 2023",
    content:
      "With this plan I have improved my bench, squat and deadlift. Quinn is a really great trainer, he will make you a diet plan and plan your workouts with exact instructions on how to do what. I am very satisfied and can only recommend it. For me, a great investment of money.",
    ratingImg: "/stars.png",
  },
  {
    image: "/men4.webp",
    quoteImg: "/wuoto.png",
    name: "Vicente",
    date: "Aug 07, 2023",
    content:
      "Gained strength, size, and explosiveness; as well as muscle endurance and flexibility. Great investment of money. Awesome results in only 2 months.",
    ratingImg: "/stars.png",
  },
];

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (direction: number) => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + direction * 2) % testimonials.length;
      return newIndex < 0 ? testimonials.length - 2 : newIndex;
    });
  };

  // Get the two testimonials for this "page"
  const firstTestimonial = testimonials[currentIndex];
  const secondTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="bg-black">
      <section className="py-16 px-6 max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold italic text-center md:text-left">
            What My Clients <br /> <span className="text-[#87E64B]">Are Saying</span>
          </h2>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Image
              onClick={() => paginate(-1)}
              className="rotate-180 cursor-pointer hover:scale-110 transition-transform"
              src="/right.webp"
              height={40}
              width={40}
              alt="Previous"
            />
            <Image
              onClick={() => paginate(1)}
              className="cursor-pointer hover:scale-110 transition-transform"
              src="/right.webp"
              height={40}
              width={40}
              alt="Next"
            />
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative flex flex-col md:flex-row gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={firstTestimonial.name}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[48%] h-auto md:h-[360px] bg-black border border-[#C2C2C2] rounded-3xl shadow-md p-6 flex flex-col justify-between space-y-4"
            >
              {/* Client Info */}
              <div className="flex items-center gap-6">
                <Image
                  src={firstTestimonial.image}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  alt={firstTestimonial.name}
                />
                <div className="flex items-center gap-4">
                  <div className="h-[60px] w-[3px] bg-[#87E64B]" />
                  <div>
                    <Image
                      src={firstTestimonial.quoteImg}
                      height={30}
                      width={30}
                      alt="Quote"
                      className="mb-1"
                    />
                    <h2 className="text-lg font-semibold">{firstTestimonial.name}</h2>
                    <h3 className="text-sm text-gray-500">{firstTestimonial.date}</h3>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300 flex-1">
                {firstTestimonial.content}
              </p>

              {/* Rating */}
              <div>
                <Image
                  src={firstTestimonial.ratingImg}
                  height={30}
                  width={120}
                  alt="Rating stars"
                />
              </div>
            </motion.div>

            {/* Show the second testimonial card */}
            <motion.div
              key={secondTestimonial.name}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[48%] h-auto md:h-[360px] bg-black border border-[#C2C2C2] rounded-3xl shadow-md p-6 flex flex-col justify-between space-y-4"
            >
              {/* Client Info */}
              <div className="flex items-center gap-6">
                <Image
                  src={secondTestimonial.image}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  alt={secondTestimonial.name}
                />
                <div className="flex items-center gap-4">
                  <div className="h-[60px] w-[3px] bg-[#87E64B]" />
                  <div>
                    <Image
                      src={secondTestimonial.quoteImg}
                      height={30}
                      width={30}
                      alt="Quote"
                      className="mb-1"
                    />
                    <h2 className="text-lg font-semibold">{secondTestimonial.name}</h2>
                    <h3 className="text-sm text-gray-500">{secondTestimonial.date}</h3>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300 flex-1">
                {secondTestimonial.content}
              </p>

              {/* Rating */}
              <div>
                <Image
                  src={secondTestimonial.ratingImg}
                  height={30}
                  width={120}
                  alt="Rating stars"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
