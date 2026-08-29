"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  User,
} from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Watches" },
  { href: "/about", label: "About Lunar" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("ค้นหา:", search);

    // ถ้ามีหน้าสินค้า สามารถเปลี่ยนเป็น
    // window.location.href = `/service?search=${search}`;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#f7f4ee]/95 backdrop-blur-xl shadow-sm border-b border-stone/10"
          : "bg-[#f7f4ee]/80 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full border border-stone/40 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
              <span className="font-serif text-lg text-stone">
                L
              </span>
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-wide text-stone">
                LUNAR
              </span>

              <span className="text-[8px] tracking-[0.35em] text-stone/50 mt-1">
                WATCHES
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-stone/70
                  hover:text-stone
                  transition-colors
                  py-2
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:w-0
                  after:h-px
                  after:bg-stone
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT MENU */}
          <div className="hidden lg:flex items-center gap-3">

            {/* SEARCH */}
            <form
              onSubmit={handleSearch}
              className="relative"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search watches..."
                className="
                  w-52
                  h-10
                  pl-10
                  pr-4
                  rounded-full
                  bg-stone/5
                  border
                  border-stone/10
                  text-sm
                  text-stone
                  placeholder:text-stone/40
                  focus:outline-none
                  focus:border-stone/30
                  focus:bg-white
                  transition-all
                "
              />

              <Search
                size={16}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-stone/50
                "
              />
            </form>

            {/* ACCOUNT */}
            <Link
              href="/login"
              aria-label="Account"
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-stone/70
                hover:text-stone
                hover:bg-stone/10
                transition-all
              "
            >
              <User size={19} />
            </Link>

            {/* CART */}
            <Link
              href="/service"
              aria-label="Shopping Cart"
              className="
                relative
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-stone/70
                hover:text-stone
                hover:bg-stone/10
                transition-all
              "
            >
              <ShoppingCart size={19} />

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  w-4
                  h-4
                  rounded-full
                  bg-stone
                  text-white
                  text-[9px]
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                3
              </span>
            </Link>
          </div>

          {/* MOBILE */}
          <div className="flex lg:hidden items-center gap-2">

            {/* MOBILE CART */}
            <Link
              href="/service"
              className="relative w-10 h-10 flex items-center justify-center text-stone/70"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />

              <span
                className="
                  absolute
                  top-0
                  right-0
                  w-4
                  h-4
                  rounded-full
                  bg-stone
                  text-white
                  text-[9px]
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                3
              </span>
            </Link>

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                hover:bg-stone/10
                transition-colors
              "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            lg:hidden
            bg-[#f7f4ee]/98
            backdrop-blur-xl
            border-t
            border-stone/10
            shadow-lg
          "
        >
          <div className="px-5 py-6">

            {/* MOBILE SEARCH */}
            <form
              onSubmit={handleSearch}
              className="relative mb-5"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search watches..."
                className="
                  w-full
                  h-11
                  pl-10
                  pr-4
                  rounded-xl
                  bg-stone/5
                  border
                  border-stone/10
                  text-sm
                  text-stone
                  placeholder:text-stone/40
                  focus:outline-none
                  focus:border-stone/30
                "
              />

              <Search
                size={17}
                className="
                  absolute
                  left-3.5
                  top-1/2
                  -translate-y-1/2
                  text-stone/50
                "
              />
            </form>

            {/* LINKS */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4
                    py-3.5
                    rounded-xl
                    text-sm
                    font-medium
                    text-stone/75
                    hover:bg-stone/10
                    hover:text-stone
                    transition-all
                  "
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-px bg-stone/10 my-3" />

              {/* ACCOUNT */}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="
                  px-4
                  py-3.5
                  rounded-xl
                  text-sm
                  font-medium
                  text-stone/75
                  hover:bg-stone/10
                  flex
                  items-center
                  gap-3
                  transition-all
                "
              >
                <User size={17} />
                My Account
              </Link>

              {/* CART */}
              <Link
                href="/service"
                onClick={() => setIsOpen(false)}
                className="
                  px-4
                  py-3.5
                  rounded-xl
                  text-sm
                  font-medium
                  text-stone/75
                  hover:bg-stone/10
                  flex
                  items-center
                  gap-3
                  transition-all
                "
              >
                <ShoppingCart size={17} />
                Shopping Cart

                <span className="ml-auto bg-stone text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>

            {/* MOBILE BRAND */}
            <div className="mt-6 pt-5 border-t border-stone/10 text-center">
              <p className="font-serif text-lg tracking-widest text-stone">
                LUNAR
              </p>

              <p className="text-[8px] tracking-[0.35em] text-stone/40 mt-1">
                TIMELESS · ELEGANT · YOURS
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}