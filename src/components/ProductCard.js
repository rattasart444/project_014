"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/utils/cn";
import ImageWithFallback from "@/components/ImageWithFallback";

// ========================================
// Lunar Watch Products
// ========================================

const products = [
  {
    id: 1,
    name: "Lunar Classic Silver",
    category: "Classic",
    price: 4590,
    originalPrice: 5290,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
    tag: "Best Seller",
    rating: 4.9,
    sold: 1280,
  },
  {
    id: 2,
    name: "Lunar Moonlight Automatic",
    category: "Automatic",
    price: 8990,
    originalPrice: 9990,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    tag: "New",
    rating: 4.8,
    sold: 685,
  },
  {
    id: 3,
    name: "Lunar Minimal Black",
    category: "Minimal",
    price: 3290,
    originalPrice: 3990,
    discount: 18,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    tag: null,
    rating: 4.7,
    sold: 945,
  },
  {
    id: 4,
    name: "Lunar Chronograph Elite",
    category: "Chronograph",
    price: 7590,
    originalPrice: 8490,
    discount: 11,
    image:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    tag: "Limited",
    rating: 4.9,
    sold: 420,
  },
  {
    id: 5,
    name: "Lunar Rose Gold",
    category: "Luxury",
    price: 6490,
    originalPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
    tag: "Hot",
    rating: 4.8,
    sold: 768,
  },
  {
    id: 6,
    name: "Lunar Midnight Steel",
    category: "Premium",
    price: 5890,
    originalPrice: 6990,
    discount: 16,
    image:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80",
    tag: null,
    rating: 4.6,
    sold: 532,
  },
  {
    id: 7,
    name: "Lunar Heritage Gold",
    category: "Luxury",
    price: 12990,
    originalPrice: 14990,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80",
    tag: "Sale",
    rating: 4.9,
    sold: 215,
  },
  {
    id: 8,
    name: "Lunar Moon Smart",
    category: "Smart Watch",
    price: 4990,
    originalPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=80",
    tag: "New",
    rating: 4.7,
    sold: 1150,
  },
];

// ========================================
// Format Price
// ========================================

function formatPrice(price) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
  }).format(price);
}

// ========================================
// Product Card
// ========================================

export default function ProductCard({ product, index = 0 }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 40 }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.38, 0.98],
      }}
      className="group"
    >
      <Link href="/service" className="block">
        {/* Product Image */}
        <div
          className="
            relative
            aspect-square
            overflow-hidden
            rounded-2xl
            bg-stone-100
            mb-3
            border
            border-transparent
            group-hover:border-accent/40
            transition-colors
            duration-300
            shadow-sm
            group-hover:shadow-md
            group-hover:shadow-accent/10
          "
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-expo-out
              group-hover:scale-105
            "
            fallbackClassName="h-full w-full"
          />

          {/* Product Tag */}
          {product.tag && (
            <span
              className="
                absolute
                top-3
                left-3
                bg-accent
                text-white
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                px-2.5
                py-1
                rounded-lg
                shadow-sm
              "
            >
              {product.tag}
            </span>
          )}

          {/* Discount */}
          {product.discount && (
            <span
              className="
                absolute
                top-3
                right-3
                bg-red-500
                text-white
                text-[11px]
                font-bold
                px-2
                py-1
                rounded-lg
              "
            >
              -{product.discount}%
            </span>
          )}

          {/* Add To Cart */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-3
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
            "
          >
            <button
              type="button"
              className="
                bg-white
                text-stone
                font-medium
                text-sm
                py-3
                rounded-xl
                w-full
                justify-center
                items-center
                gap-2
                flex
                hover:bg-accent
                hover:text-white
                transition-colors
              "
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-1.5 px-0.5">
          {/* Category */}
          <p className="text-[11px] font-mono uppercase tracking-wider text-cream/70">
            {product.category}
          </p>

          {/* Name */}
          <h3
            className="
              text-sm
              font-medium
              text-cream
              leading-snug
              line-clamp-2
              group-hover:text-cream/80
              transition-colors
            "
          >
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-cream">
              {formatPrice(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-xs text-cream/50 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Rating + Sold */}
          <div className="flex items-center gap-3 text-[11px] text-cream/70">
            <span className="flex items-center gap-1">
              <Star
                size={12}
                className="text-accent fill-accent"
              />
              {product.rating}
            </span>

            <span>|</span>

            <span>
              {product.sold.toLocaleString("th-TH")} ขายแล้ว
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ========================================
// Product Grid
// ========================================

export function ProductGrid({
  products: productsProp,
  title,
  subtitle,
}) {
  const displayProducts = productsProp || products;

  return (
    <div>
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="text-sm text-cream/60">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          gap-4
          sm:gap-6
        "
      >
        {displayProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
