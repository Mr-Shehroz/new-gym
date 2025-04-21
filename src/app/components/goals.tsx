import Image from "next/image";

export default function Goals() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 text-center bg-black text-white">
            {/* Left Image */}
            <div className="lg:flex-shrink-0">
                <Image
                    src="/read-1-image.webp"
                    height={250}
                    width={250}
                    alt="Fitness"
                    className="w-[200px] md:w-[300px] object-contain"
                />
            </div>

            {/* Text Content */}
            <div className="lg:w-sm">
                <h2 className="text-3xl font-bold mb-4 italic">
                    Ready to Achieve Your <span className="text-[#87E64B]">Fitness Goals?</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                    Let’s work together to create a personalized plan that fits your lifestyle and goals.
                </p>
                <button className="bg-[#87E64B] text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 transition duration-300">
                    Get Started Today
                </button>
            </div>

            {/* Right Image */}
            <div className="lg:flex-shrink-0">
                <Image
                    src="/iamge_2.webp"
                    height={280}
                    width={280}
                    alt="Fitness"
                    className="w-[200px] md:w-[300px] object-contain"
                />
            </div>
        </section>
    );
}
