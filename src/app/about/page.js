"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const watches = [
  {
    name: "Lunar Classic",
    price: "฿8,900",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
    category: "Classic Collection",
  },
  {
    name: "Lunar Black",
    price: "฿12,900",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    category: "Premium Collection",
  },
  {
    name: "Lunar Silver",
    price: "฿15,900",
    image:
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80",
    category: "Luxury Collection",
  },
];

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=2000&q=90"
          alt="Lunar Watch"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16">

          <div className="max-w-2xl">

            <p className="text-sm tracking-[0.4em] text-gray-300 uppercase mb-6">
              LUNAR WATCH
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight">
              Time
              <br />
              <span className="italic">Beyond.</span>
            </h1>

            <p className="mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              นาฬิกาที่ออกแบบมาเพื่อคนที่ให้ความสำคัญกับทุกวินาที
              ผสมผสานดีไซน์เรียบหรู คุณภาพ และความเป็นเอกลักษณ์
              ไว้ในเรือนเดียว
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => router.push("/products")}
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
              >
                ดูสินค้าทั้งหมด
              </button>

              <button
                onClick={() => router.push("/about")}
                className="px-8 py-4 border border-white/50 rounded-full hover:bg-white hover:text-black transition"
              >
                เรื่องราวของเรา
              </button>

            </div>

          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between text-xs tracking-widest text-gray-400 uppercase">
            <span>Est. 2026</span>
            <span>Designed for every moment</span>
          </div>
        </div>

      </section>

      {/* ================================================= */}
      {/* INTRO */}
      {/* ================================================= */}

      <section className="py-24 md:py-32 px-6 bg-[#111111]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-6">
            About Lunar
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
            เพราะเวลา
            <br />
            <span className="text-gray-500">
              ไม่เคยหยุดเดิน
            </span>
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed max-w-2xl mx-auto">
            LUNAR เชื่อว่านาฬิกาไม่ได้เป็นเพียงเครื่องมือบอกเวลา
            แต่เป็นส่วนหนึ่งของตัวตนและเรื่องราวในชีวิตของคุณ
            เราจึงออกแบบนาฬิกาที่สามารถเข้ากับทุกช่วงเวลา
            ตั้งแต่วันธรรมดาไปจนถึงช่วงเวลาสำคัญ
          </p>

        </div>

      </section>

      {/* ================================================= */}
      {/* COLLECTION */}
      {/* ================================================= */}

      <section className="py-24 px-6 lg:px-16 bg-[#0b0b0b]">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>
              <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4">
                Featured Collection
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-light">
                Our Watches
              </h2>
            </div>

            <button
              onClick={() => router.push("/products")}
              className="text-sm border-b border-white pb-2 w-fit hover:text-gray-400 hover:border-gray-400 transition"
            >
              View all watches →
            </button>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {watches.map((watch) => (
              <div
                key={watch.name}
                className="group cursor-pointer"
              >

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#171717]">

                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                  <button
                    onClick={() => router.push("/products")}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-3 rounded-full text-sm transition-all duration-300"
                  >
                    ดูรายละเอียด
                  </button>

                </div>

                <div className="pt-5">

                  <p className="text-xs text-gray-500 tracking-widest uppercase">
                    {watch.category}
                  </p>

                  <div className="flex justify-between items-center mt-2">

                    <h3 className="text-lg font-medium">
                      {watch.name}
                    </h3>

                    <p className="text-gray-300">
                      {watch.price}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* WHY LUNAR */}
      {/* ================================================= */}

      <section className="py-24 md:py-32 px-6 bg-[#151515]">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-6">
                Why Lunar
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight">
                Crafted for
                <br />
                <span className="text-gray-500">
                  every moment.
                </span>
              </h2>

              <p className="mt-8 text-gray-400 leading-relaxed max-w-lg">
                เราใส่ใจตั้งแต่การเลือกวัสดุ การออกแบบ
                ไปจนถึงรายละเอียดเล็ก ๆ ในทุกชิ้นงาน
                เพื่อสร้างนาฬิกาที่คุณสามารถสวมใส่ได้ในทุกวัน
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="border border-white/10 rounded-2xl p-8">
                <p className="text-3xl font-serif mb-3">
                  01
                </p>

                <h3 className="font-medium mb-2">
                  Premium Design
                </h3>

                <p className="text-sm text-gray-500">
                  ดีไซน์เรียบหรูและทันสมัย
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8">
                <p className="text-3xl font-serif mb-3">
                  02
                </p>

                <h3 className="font-medium mb-2">
                  Quality
                </h3>

                <p className="text-sm text-gray-500">
                  คัดสรรวัสดุคุณภาพสูง
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8">
                <p className="text-3xl font-serif mb-3">
                  03
                </p>

                <h3 className="font-medium mb-2">
                  Timeless
                </h3>

                <p className="text-sm text-gray-500">
                  ดีไซน์ที่ไม่ตกยุค
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8">
                <p className="text-3xl font-serif mb-3">
                  04
                </p>

                <h3 className="font-medium mb-2">
                  Warranty
                </h3>

                <p className="text-sm text-gray-500">
                  รับประกันสินค้า
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="relative py-32 px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1800&q=80"
          alt="Lunar Watch Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">

          <p className="text-xs tracking-[0.4em] text-gray-300 uppercase mb-6">
            LUNAR
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-light">
            Find your time.
          </h2>

          <p className="text-gray-300 mt-6">
            ค้นหานาฬิกาที่เหมาะกับคุณ
          </p>

          <button
            onClick={() => router.push("/products")}
            className="mt-10 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition"
          >
            เลือกซื้อนาฬิกา
          </button>

        </div>

      </section>

      <Footer />

    </main>
  );
}