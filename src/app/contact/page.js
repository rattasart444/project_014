"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Swal from "sweetalert2";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await Swal.fire({
      icon: "success",
      title: "ส่งข้อความสำเร็จ",
      text: "ขอบคุณที่ติดต่อ LUNAR เราจะติดต่อกลับโดยเร็วที่สุด",
      confirmButtonColor: "#111111",
    });

    e.target.reset();
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative h-[55vh] md:h-[60vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=2000&q=90"
          alt="Lunar Watch"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div>
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-gray-300 mb-5">
              LUNAR WATCH
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-light">
              Contact Us
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl mx-auto">
              มีคำถามเกี่ยวกับนาฬิกา การสั่งซื้อ หรือบริการของ LUNAR
              สามารถติดต่อเราได้ทุกช่องทาง
            </p>
          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CONTACT */}
      {/* ================================================= */}

      <section className="py-24 md:py-32 px-6 lg:px-16 bg-[#111111]">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* ================= FORM ================= */}

            <div>

              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-5">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                Let's talk
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
                หากคุณต้องการสอบถามข้อมูลสินค้า สอบถามสถานะการจัดส่ง
                หรือมีคำถามเกี่ยวกับบริการของเรา
                สามารถส่งข้อความหาเราได้เลย
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    ชื่อ
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="กรอกชื่อของคุณ"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/50 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/50 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    เบอร์โทรศัพท์
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="08x-xxx-xxxx"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/50 transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    หัวข้อ
                  </label>

                  <select
                    name="subject"
                    className="w-full bg-[#111111] border border-white/15 rounded-xl px-5 py-4 text-gray-300 focus:outline-none focus:border-white/50 transition"
                  >
                    <option value="product">
                      สอบถามสินค้า
                    </option>

                    <option value="order">
                      สอบถามคำสั่งซื้อ
                    </option>

                    <option value="shipping">
                      สอบถามการจัดส่ง
                    </option>

                    <option value="warranty">
                      สอบถามการรับประกัน
                    </option>

                    <option value="other">
                      อื่น ๆ
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    ข้อความ
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="พิมพ์ข้อความของคุณ..."
                    className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/50 transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
                >
                  ส่งข้อความ →
                </button>

              </form>

            </div>

            {/* ================= INFORMATION ================= */}

            <div>

              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-5">
                LUNAR STORE
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-light mb-10">
                We're here
                <br />
                <span className="text-gray-500">
                  to help.
                </span>
              </h2>

              <div className="space-y-8">

                {/* Store */}
                <div className="border-b border-white/10 pb-8">

                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Store
                  </p>

                  <h3 className="text-lg font-medium mb-2">
                    LUNAR Watch Store
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    123 ถนนนิมมานเหมินท์
                    <br />
                    ตำบลสุเทพ อำเภอเมือง
                    <br />
                    เชียงใหม่ 50200
                  </p>

                </div>

                {/* Email */}
                <div className="border-b border-white/10 pb-8">

                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Email
                  </p>

                  <a
                    href="mailto:contact@lunarwatch.com"
                    className="text-lg hover:text-gray-400 transition"
                  >
                    contact@lunarwatch.com
                  </a>

                  <p className="text-sm text-gray-500 mt-2">
                    เราจะตอบกลับภายใน 24 ชั่วโมง
                  </p>

                </div>

                {/* Phone */}
                <div className="border-b border-white/10 pb-8">

                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Phone
                  </p>

                  <a
                    href="tel:0801234567"
                    className="text-lg hover:text-gray-400 transition"
                  >
                    080-123-4567
                  </a>

                  <p className="text-sm text-gray-500 mt-2">
                    จันทร์ - ศุกร์ 09:00 - 18:00 น.
                  </p>

                </div>

                {/* Social */}
                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    Follow LUNAR
                  </p>

                  <div className="flex gap-3">

                    <a
                      href="#"
                      className="px-5 py-3 border border-white/15 rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                      Instagram
                    </a>

                    <a
                      href="#"
                      className="px-5 py-3 border border-white/15 rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                      Facebook
                    </a>

                    <a
                      href="#"
                      className="px-5 py-3 border border-white/15 rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                      TikTok
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* STORE BANNER */}
      {/* ================================================= */}

      <section className="relative py-28 px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?w=1800&q=85"
          alt="Lunar Store"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">

          <p className="text-xs tracking-[0.4em] uppercase text-gray-300 mb-5">
            LUNAR WATCH
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-light">
            Your time matters.
          </h2>

          <p className="text-gray-300 mt-6">
            ทุกช่วงเวลามีความหมาย เลือกนาฬิกาที่เป็นตัวคุณ
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}