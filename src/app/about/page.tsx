import Image from "next/image";

export default function About() {
    return (
        <section className="bg-black text-white bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center mb-12 italic text-[#87E64B]">
                    ABOUT ME
                </h1>

                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                    <div className="max-w-xl text-lg text-gray-300 leading-relaxed">
                        <p>
                            What&apos;s up guys! I am <strong>Quin Stott</strong>. I`m a former D1 athlete from Northern Massachusetts. 
                            My goal is to channel what I`ve experienced in my own pursuits into a platform to educate and inspire others. 
                            I am so excited to share this special opportunity with you all, so you can see exactly what I implement into 
                            my daily workout and nutrition routines. I look forward to helping you start your fitness journey today!
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Image
                            src="/about.webp"
                            width={400}
                            height={400}
                            alt="About"
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
