import Image from "next/image";
import Link from "next/link";

export default function Coach() {
    return (
        <section className="bg-[url(/neon_bg.webp)] h-auto bg-cover bg-no-repeat bg-center py-10 px-6">
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 max-w-7xl mx-auto">
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/body.webp"
                        width={500}
                        height={500}
                        alt="body"
                        className="rounded-lg shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-white space-y-6">
                    <h4 className="text-3xl md:text-4xl font-bold">Meet Your Coach</h4>
                    <p className="text-lg leading-relaxed">
                        With over a decade of experience in the fitness industry, I`ve helped transform more than 1,000 clients, guiding them to achieve significant muscle and strength gains. As an online fitness coach, my focus is on delivering personalized, effective training plans that fit your lifestyle and goals. Together, we`ll push past your limits and unlock your full potential, no matter where you are in your fitness journey.
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="bg-[#87E64B] text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-400 transition">
                            Let’s get started
                        </button>
                        <Link href="#" className="underline text-[#87E64B] font-medium hover:text-lime-300">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
