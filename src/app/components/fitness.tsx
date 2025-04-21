import Image from "next/image";

export default function Fitness() {
    return (
        <section className="flex flex-col md:flex-row items-center py-10 px-6">
            <div className="mb-6 md:mb-0 md:w-1/2">
                <Image
                    src="/fitness.webp"
                    width={500}
                    height={500}
                    alt="fitness"
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="space-y-6 md:space-y-8 md:w-1/2 md:px-6">
                <div className="flex items-center gap-4">
                    <Image
                        className="h-[100px] w-auto"
                        src="/line.png"
                        width={60}
                        height={60}
                        alt="line"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white italic">
                        Personalized Fitness Plans for{" "}
                        <span className="text-[#87E64B]">Every Body</span>
                    </h2>
                </div>

                <div className="flex items-start gap-4">
                    <Image
                        className="w-[60px] h-[60px]"
                        src="/icon1.avif"
                        width={60}
                        height={60}
                        alt="icon1"
                    />
                    <p className="text-white max-w-lg sm:max-w-xl">
                        Get expert guidance, customized workout routines, and nutrition
                        plans that help you reach your full potential.
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <Image
                        className="w-[60px] h-[60px]"
                        src="/icon2.avif"
                        width={60}
                        height={60}
                        alt="icon2"
                    />
                    <p className="text-white max-w-lg sm:max-w-xl">
                        Whether you re a beginner or seasoned athlete, I m here to help you
                        crush your fitness goals with proven methods.
                    </p>
                </div>
                <button className="bg-[#87E64B] px-6 py-3 text-black rounded-full text-lg font-semibold mt-4 md:mt-8">
                    View Workout Programs
                </button>
            </div>
        </section>
    );
}
