export default function Hero() {
    return (
      <section className="bg-[url('/hero.webp')] bg-cover bg-[position:65%_center] h-[470px] xl:h-[600px] flex items-center">
        <div className="ml-10 space-y-6 w-[100%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
          <h1 className="text-[#87E64B] text-4xl md:text-5xl font-extrabold italic">
            QUIN STOTT
          </h1>
          <h2 className="text-white text-2xl md:text-4xl font-extrabold italic">
            Transform Your Body, Elevate <span className="text-[#87E64B]">Your Life</span>
          </h2>
          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-[#87E64B] hover:text-white transition duration-300">
            Workout Programs
          </button>
        </div>
      </section>
    );
  }
  