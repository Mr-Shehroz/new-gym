import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[url(/footer-bg.webp)] bg-cover bg-center bg-no-repeat py-10 px-6">
      <div className="max-w-7xl mx-auto md:flex justify-between gap-12">
        {/* Contact Section */}
        <div className="w-full md:w-[30%]">
          <h2 className="text-2xl font-semibold text-white mb-6">CONTACT US</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image src="/email.webp" height={30} width={30} alt="Email" />
              <span className="text-white">stottquin@gmail.com</span>
            </div>
            <div className="flex gap-4">
              <Image src="/instagram.webp" height={30} width={30} alt="Instagram" />
              <Image src="/youtue.webp" height={30} width={30} alt="YouTube" />
              <Image src="/tiktok.webp" height={30} width={30} alt="TikTok" />
            </div>
            <div className="flex gap-4">
              <Image src="/dicord.webp" height={30} width={30} alt="Discord" />
              <Image src="/sk.webp" height={30} width={30} alt="Skype" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-[30%] mt-10 md:mt-0">
          <h2 className="text-2xl font-semibold text-white mb-6">QUICK LINKS</h2>
          <div className="flex flex-col gap-3">
            <Link href="#" className="text-white hover:text-[#87E64B] transition-colors">Workout Programs</Link>
            <Link href="#" className="text-white hover:text-[#87E64B] transition-colors">Nutrition Guides</Link>
            <Link href="#" className="text-white hover:text-[#87E64B] transition-colors">About Me</Link>
            <Link href="#" className="text-white hover:text-[#87E64B] transition-colors">1 on 1 Coaching</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-[35%] md:mt-0 mt-10">
          <h2 className="text-xl font-extrabold text-white mb-4">
            Subscribe to my newsletter for more strength & muscle building tips
          </h2>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-4 py-2 rounded-full border border-[#666] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#87E64B]"
            />
            <button className="bg-[#87E64B] text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12">
        <div className="border-t border-white mb-4"></div>
        <h4 className="text-white text-center text-sm">© 2025 Quin Stott Fitness. All rights reserved.</h4>
      </div>
    </footer>
  );
}
