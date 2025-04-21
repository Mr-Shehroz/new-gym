import Image from "next/image";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Testimonials() {
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

  return (
    <section className="bg-[url(/neon_bg.webp)] bg-cover bg-center bg-no-repeat text-white">
      <Announcement />
      <Header />

      <div className="bg-[url(/testi.webp)] bg-cover bg-center bg-no-repeat py-16 text-center">
        <h1 className="text-4xl font-bold text-white italic">TESTIMONIALS</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black border border-[#C2C2C2] rounded-3xl shadow-md p-6 flex flex-col justify-between space-y-4"
          >
            {/* Client Info */}
            <div className="flex items-center gap-6">
              <Image
                src={testimonial.image}
                width={80}
                height={80}
                className="rounded-full object-cover"
                alt={testimonial.name}
              />
              <div className="flex items-center gap-4">
                <div className="h-[60px] w-[3px] bg-[#87E64B]" />
                <div>
                  <Image
                    src={testimonial.quoteImg}
                    height={30}
                    width={30}
                    alt="Quote"
                    className="mb-1"
                  />
                  <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                  <h3 className="text-sm text-gray-500">{testimonial.date}</h3>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-base leading-relaxed text-gray-300">
              {testimonial.content}
            </p>

            {/* Rating */}
            <div>
              <Image
                src={testimonial.ratingImg}
                height={30}
                width={120}
                alt="Rating stars"
              />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
}
