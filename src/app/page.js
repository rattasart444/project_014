"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ProductGrid } from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import StickyStackSection from "@/components/StickyStackSection";
import { TextReveal } from "@/components/ScrollReveal";
import {
  ArrowRight,
  Truck,
  Shield,
  Clock,
  Flame,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

// ========================================
// Lunar Watch - Flash Sale Products
// ========================================

const flashSaleProducts = [
  {
    id: 101,
    name: "Lunar Classic Silver",
    price: 3990,
    originalPrice: 4990,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80",
    sold: 78,
    total: 100,
    rating: 4.8,
  },
  {
    id: 102,
    name: "Lunar Moonlight Automatic",
    price: 7490,
    originalPrice: 8990,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
    sold: 45,
    total: 60,
    rating: 4.9,
  },
  {
    id: 103,
    name: "Lunar Chronograph Elite",
    price: 5990,
    originalPrice: 7490,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&q=80",
    sold: 92,
    total: 120,
    rating: 4.7,
  },
  {
    id: 104,
    name: "Lunar Rose Gold",
    price: 4990,
    originalPrice: 6490,
    discount: 23,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80",
    sold: 156,
    total: 200,
    rating: 4.8,
  },
];

// ========================================
// How Lunar Watch Works
// ========================================

const howItWorksSteps = [
  {
    title: "Choose your timepiece",
    description:
      "Explore our curated collection of classic, automatic, chronograph, and luxury watches.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80",
  },
  {
    title: "Fast & secure delivery",
    description:
      "Your Lunar Watch is carefully packed and delivered safely with order tracking.",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=80",
  },
  {
    title: "Wear it with confidence",
    description:
      "Every Lunar Watch comes with a warranty and quality assurance for peace of mind.",
    image:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&q=80",
    cta: {
      label: "Shop Watches",
      href: "/service",
    },
  },
];

// ========================================
// Home Page
// ========================================

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />

      <Navbar />

      <Hero />

      {/* ========================================
          WATCH CATEGORIES
      ======================================== */}

      <section className="py-6 lg:py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Classic",
                count: 18,
                image:
                  "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80",
              },
              {
                name: "Automatic",
                count: 12,
                image:
                  "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
              },
              {
                name: "Chronograph",
                count: 15,
                image:
                  "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&q=80",
              },
              {
                name: "Luxury",
                count: 24,
                image:
                  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80",
              },
            ].map((cat, i) => (
              <AnimatedSection
                key={cat.name}
                delay={i * 0.1}
              >
                <Link
                  href="/service"
                  className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-stone/30 group-hover:bg-stone/40 transition-colors duration-300" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="font-serif text-lg sm:text-xl text-cream mb-1">
                      {cat.name}
                    </h3>

                    <p className="text-xs text-cream/70">
                      {cat.count} watches
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FLASH SALE
      ======================================== */}

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-stone to-stone-light rounded-3xl p-8 sm:p-12 lg:p-16 text-cream relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                  <Flame size={14} />
                  Lunar Special Sale
                </div>

                <TextReveal
                  as="h2"
                  className="font-serif text-3xl md:text-5xl text-cream mb-4"
                >
                  Up to 23% off
                </TextReveal>

                <p className="text-cream/80 mb-8 max-w-lg">
                  Discover limited-time offers on selected Lunar Watch
                  collections. Find your perfect timepiece before they're
                  gone.
                </p>

                <Link
                  href="/service"
                  className="btn-white pill-btn"
                >
                  <span>
                    Shop Sale <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          NEW ARRIVALS
      ======================================== */}

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-stone/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-3">
                  Lunar Collection
                </p>

                <TextReveal
                  as="h2"
                  className="font-serif text-3xl md:text-4xl text-cream"
                >
                  New Arrivals
                </TextReveal>
              </div>

              <Link
                href="/service"
                className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors"
              >
                View all
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <ProductGrid
            title=""
            subtitle="Discover the latest Lunar Watch collection."
          />
        </div>
      </section>

      {/* ========================================
          MOST POPULAR
      ======================================== */}

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-stone/90 backdrop-blur-sm" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp
                size={18}
                className="text-accent"
              />

              <p className="font-mono text-xs uppercase tracking-widest text-cream/60">
                Trending Now
              </p>
            </div>

            <TextReveal
              as="h2"
              className="font-serif text-3xl md:text-4xl text-cream"
            >
              Most Popular Watches
            </TextReveal>
          </AnimatedSection>

          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-beige/10 via-stone/40 to-stone/60 p-4 sm:p-6 shadow-xl shadow-black/20">
            <ProductGrid
              products={[
                {
                  id: 201,
                  name: "Lunar Classic Silver",
                  category: "Classic",
                  price: 4590,
                  originalPrice: 5290,
                  discount: 13,
                  image:
                    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
                  tag: "Hot",
                  rating: 4.9,
                  sold: 5205,
                },
                {
                  id: 202,
                  name: "Lunar Moonlight Automatic",
                  category: "Automatic",
                  price: 8990,
                  originalPrice: 9990,
                  discount: 10,
                  image:
                    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
                  tag: "Best Seller",
                  rating: 4.8,
                  sold: 3892,
                },
                {
                  id: 203,
                  name: "Lunar Chronograph Elite",
                  category: "Chronograph",
                  price: 7590,
                  originalPrice: 8490,
                  discount: 11,
                  image:
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
                  tag: "Limited",
                  rating: 4.7,
                  sold: 1567,
                },
                {
                  id: 204,
                  name: "Lunar Rose Gold",
                  category: "Luxury",
                  price: 6490,
                  originalPrice: 7490,
                  discount: 13,
                  image:
                    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
                  tag: "Sale",
                  rating: 4.9,
                  sold: 2341,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS
      ======================================== */}

      <StickyStackSection steps={howItWorksSteps} />

      {/* ========================================
          LUNAR WATCH BENEFITS
      ======================================== */}

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-stone/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Carefully packed and safely delivered to your door.",
              },
              {
                icon: Shield,
                title: "Watch Warranty",
                desc: "Every Lunar Watch comes with warranty protection.",
              },
              {
                icon: Clock,
                title: "Timeless Quality",
                desc: "Designed to be worn today and treasured for years.",
              },
            ].map((feature, i) => (
              <AnimatedSection
                key={feature.title}
                delay={i * 0.15}
                className="text-center p-8 rounded-2xl bg-cream/5 border border-cream/10"
              >
                <feature.icon
                  size={32}
                  className="text-accent mx-auto mb-4"
                  strokeWidth={1.5}
                />

                <h3 className="font-serif text-lg text-cream mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-cream/60">
                  {feature.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-stone text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <TextReveal
              as="h2"
              className="font-serif text-3xl md:text-5xl text-cream mb-6"
            >
              Find Your Perfect Timepiece
            </TextReveal>

            <p className="text-cream/80 mb-10 max-w-lg mx-auto">
              Discover the Lunar Watch collection, crafted for those who
              appreciate timeless design and quality.
            </p>

            <Link
              href="/service"
              className="btn-white pill-btn"
            >
              <span>
                Explore Lunar Watch
                <ArrowRight size={16} />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
