"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-(--color-cream-soft) backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/logo2.svg"
            width={130}
            height={25}
            alt="Purenestra"
            priority
            className="w-30 h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm text-(--color-brown-dark) font-plus-jakarta-sans border border-(--color-beige-light) py-2 px-4 rounded-full">
          <Link href="#home" className="hover:font-semibold">
            Home
          </Link>
          <Link href="#formula" className="hover:font-semibold">
            Formula
          </Link>
          <Link href="#ritual" className="hover:font-semibold">
            Ritual
          </Link>
          <Link href="#questions" className="hover:font-semibold">
            Questions
          </Link>
        </div>

        <Link
          href=""
          className="hidden md:block bg-(--color-brown-soft) text-(--color-cream-light) font-medium font-plus-jakarta-sans px-4 py-2 rounded-full text-sm transition hover:opacity-90"
        >
          Contact us
        </Link>

        <button
          className="md:hidden text-(--color-brown-dark)"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-2 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`flex flex-col gap-4 bg-(--color-cream-soft) rounded-2xl p-4 shadow-md text-(--color-brown-dark) font-plus-jakarta-sans transform transition-all duration-300 ease-in-out ${
              isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
            }`}
          >
            <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#formula" onClick={() => setIsOpen(false)}>
              Formula
            </Link>
            <Link href="#ritual" onClick={() => setIsOpen(false)}>
              Ritual
            </Link>
            <Link href="#questions" onClick={() => setIsOpen(false)}>
              Questions
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center bg-(--color-brown-soft) text-(--color-cream-light) px-4 py-2 rounded-full"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
