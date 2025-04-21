import Image from "next/image";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <section className="bg-black text-white bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat">
      <Announcement />
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 italic text-[#87E64B]">
          ABOUT ME
        </h1>

        {/* Flex Container for Text and Image */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
          {/* Text Section */}
          <div className="max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed space-y-6">
            <p>
              What&apos;s up guys! I am <strong>Quin Stott</strong>. I&apos;m a former D1 athlete from Northern Massachusetts. 
              My goal is to channel what I&apos;ve experienced in my own pursuits into a platform to educate and inspire others. 
              I am so excited to share this special opportunity with you all, so you can see exactly what I implement into 
              my daily workout and nutrition routines. I look forward to helping you start your fitness journey today!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src="/about.webp"
              width={400}
              height={400}
              alt="About"
              className="rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
