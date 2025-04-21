import Image from "next/image";

export default function Services() {
    return (
        <section className="bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat py-12 px-6 text-white">
            {/* Header and Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold italic text-center md:text-left">
                    1 on 1 coaching <span className="text-[#87E64B]">services</span>
                </h2>
                <button className="bg-[#87E64B] text-black font-medium px-6 py-3 rounded-full hover:bg-lime-400 transition mt-4 md:mt-0">
                    Learn More
                </button>
            </div>

            {/* Services List */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between relative">
                {/* Item 1 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left p-6">
                    <div className="flex flex-col items-center md:items-center mt-1 z-10">
                        <Image src="/one.webp" width={60} height={60} alt="one" className="mb-2" />
                        <Image src="/tri.png" width={20} height={20} alt="triangle" />
                    </div>

                    <div className="hidden md:block border-3 w-[95%] rounded-full border-[#87E64B] absolute top-14 z-0"></div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Customized Workout Programs</h3>
                        <p className="text-gray-300">
                            Get personalized workout plans based on your goals, fitness level, and schedule.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left p-6">
                    <div className="flex flex-col items-center md:items-center mt-1 z-10">
                        <Image src="/two.webp" width={60} height={60} alt="two" className="mb-2" />
                        <Image src="/tri.png" width={20} height={20} alt="triangle" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Nutrition Coaching</h3>
                        <p className="text-gray-300">
                            Fuel your body right with tailored nutrition plans that optimize energy and promote results.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left p-6">
                    <div className="flex flex-col items-center md:items-center mt-1 z-10">
                        <Image src="/three.webp" width={60} height={60} alt="three" className="mb-2" />
                        <Image src="/tri.png" width={20} height={20} alt="triangle" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">One-on-One Coaching Sessions</h3>
                        <p className="text-gray-300">
                            Receive direct guidance through virtual to ensure you re progressing safely and effectively.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
