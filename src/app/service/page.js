"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { TextReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedBackground from "@/components/AnimatedBackground";

export const dynamic = "force-dynamic";

const collections = [
  {
    title: "Luxury Collection",
    description:
      "นาฬิกาหรูดีไซน์พรีเมียม สำหรับผู้ที่ต้องการความโดดเด่นและมีระดับในทุกโอกาส",
    price: "เริ่มต้น ฿8,990",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000&q=80",
    features: [
      "วัสดุคุณภาพสูง",
      "ดีไซน์หรูและทันสมัย",
      "รับประกันสินค้า",
    ],
  },
  {
    title: "Classic Collection",
    description:
      "นาฬิกาสไตล์คลาสสิก เรียบง่ายเหนือกาลเวลา เหมาะสำหรับใส่ทำงานและออกงาน",
    price: "เริ่มต้น ฿4,990",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000&q=80",
    features: [
      "ดีไซน์เรียบหรู",
      "เหมาะกับทุกโอกาส",
      "สายหนังและสเตนเลส",
    ],
  },
  {
    title: "Sport Collection",
    description:
      "นาฬิกาสำหรับคนรุ่นใหม่ที่ชื่นชอบความคล่องตัว พร้อมดีไซน์สปอร์ตที่โดดเด่น",
    price: "เริ่มต้น ฿3,990",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=80",
    features: [
      "ดีไซน์สปอร์ต",
      "น้ำหนักเบา",
      "เหมาะสำหรับชีวิตประจำวัน",
    ],
  },
];

export default function Service() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=2400&q=85"
          alt="Lunar Watch Collection"
          className="h-full w-full object-cover"
          fallbackClassName="h-full w-full"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 mb-5">
                LUNAR WATCHES
              </p>

              <TextReveal
                as="h1"
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-white"
              >
                Collections
              </TextReveal>

              <p className="text-white/80 mt-6 max-w-xl mx-auto text-sm md:text-base">
                ค้นพบนาฬิกาที่สะท้อนตัวตนของคุณ
                ผ่านดีไซน์ที่เรียบหรูและเหนือกาลเวลา
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
        <div className="absolute inset-0 bg-stone/80 backdrop-blur-sm" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60 mb-4">
              OUR COLLECTION
            </p>

            <TextReveal
              as="h2"
              className="font-serif text-3xl md:text-5xl text-cream mb-6"
            >
              Find Your Time
            </TextReveal>

            <p className="text-cream/70 max-w-2xl mx-auto">
              เลือกนาฬิกาที่เหมาะกับสไตล์ของคุณ
              จากคอลเลกชันที่คัดสรรมาเป็นพิเศษจาก Lunar
            </p>
          </AnimatedSection>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, i) => (
              <AnimatedSection
                key={item.title}
                delay={i * 0.15}
              >
                <div className="group h-full flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  
                  {/* IMAGE */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackClassName="h-full w-full"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-black/70 text-white text-xs backdrop-blur-sm">
                        LUNAR
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 p-7 flex flex-col">
                    <h3 className="font-serif text-2xl text-stone mb-3">
                      {item.title}
                    </h3>

                    <p className="text-stone/65 text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <p className="font-mono text-sm text-stone mb-6">
                      {item.price}
                    </p>

                    <ul className="space-y-2 mb-8 flex-1">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-stone/75"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-stone"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center gap-2 bg-stone text-white py-3 px-5 rounded-full text-sm font-medium hover:bg-black transition-all"
                    >
                      <ShoppingBag size={16} />
                      ดูสินค้า
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-24 bg-stone text-cream">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-5">
              LUNAR PHILOSOPHY
            </p>

            <TextReveal
              as="h2"
              className="font-serif text-4xl md:text-6xl mb-8"
            >
              Time is a statement.
            </TextReveal>

            <p className="text-cream/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Lunar เชื่อว่านาฬิกาไม่ใช่เพียงเครื่องบอกเวลา
              แต่เป็นส่วนหนึ่งของตัวตนและสไตล์ของผู้สวมใส่
              เราจึงคัดสรรนาฬิกาที่ผสมผสานระหว่างความเรียบหรู
              คุณภาพ และดีไซน์ที่อยู่เหนือกาลเวลา
            </p>

            <Link
              href="/products"
              className="btn-white pill-btn inline-flex"
            >
              <span>Shop Watches</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <TextReveal
              as="h2"
              className="font-serif text-3xl md:text-5xl text-cream mb-6"
            >
              Find the watch that defines you.
            </TextReveal>

            <p className="text-cream/70 max-w-lg mx-auto mb-10">
              เลือกนาฬิกาเรือนโปรดของคุณจากคอลเลกชัน Lunar
            </p>

            <Link
              href="/products"
              className="btn-white pill-btn"
            >
              <span>Explore Collection</span>
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}