"use client";

import { useState, useEffect, useId, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Bail out before touching state so scrolling does not queue a render per frame.
      setIsScrolled((prev) => {
        const next = window.scrollY > 50;
        return prev === next ? prev : next;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Escape closes the mobile menu and hands focus back to the control that opened it,
  // so keyboard users are not dropped at the top of the document.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-(--color-cream-soft) backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/png/logo.png"
            width={130}
            height={25}
            alt="Purenestra"
            priority
            className="w-35 h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm text-(--color-brown-dark) font-plus-jakarta-sans border border-(--color-beige-light) py-2 px-4 rounded-full">
          <Link href="#home" className="hover:font-semibold">
            Home
          </Link>
          <Link href="#formula" className="hover:font-semibold">
            Formula
          </Link>
          <Link href="#testimonials" className="hover:font-semibold">
            Testimonials
          </Link>
          <Link href="#questions" className="hover:font-semibold">
            Questions
          </Link>
        </div>

        <Link
          href="mailto:info@purenestra.com"
          className="hidden md:block bg-(--color-brown-soft) text-(--color-cream-light) font-medium font-plus-jakarta-sans px-4 py-2 rounded-full text-sm transition hover:opacity-90"
        >
          Contact us
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="md:hidden text-(--color-brown-dark)"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Stays mounted so it can animate both ways and so aria-controls always
          resolves; `inert` keeps it out of the tab order while collapsed. */}
      <div
        id={menuId}
        inert={!isOpen}
        className={`md:hidden grid px-4 transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex flex-col gap-4 bg-(--color-cream-soft) rounded-2xl p-4 shadow-md text-(--color-brown-dark) font-plus-jakarta-sans transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
            }`}
          >
            <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#formula" onClick={() => setIsOpen(false)}>
              Formula
            </Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="#questions" onClick={() => setIsOpen(false)}>
              Questions
            </Link>

            <Link
              href="mailto:info@purenestra.com"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center bg-(--color-brown-soft) text-(--color-cream-light) px-4 py-2 rounded-full"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
