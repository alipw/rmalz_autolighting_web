"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full font-sans">
      {/* Header */}
      <header className={`bg-primary text-white sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4 shadow-lg' : 'py-4'
        }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/rmalz_main_logo.png"
              alt="Rmalz Autolighting"
              width={isScrolled ? 120 : 180}
              height={isScrolled ? 120 : 180}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
          <nav className={`hidden md:flex space-x-8 transition-all duration-300 ease-in-out ${isScrolled ? 'text-bas8' : 'text-lg'
            }`}>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-secondary transition-colors">Home</a>
            <a href="/showcase" className="hover:text-secondary transition-colors">Showcase</a>
            <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-secondary transition-colors">Location</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-secondary transition-colors">Contact</a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className="max-w-7xl grid grid-cols-1 gap-4 mx-auto mt-10">
        <section id="home" className="relative h-96 md:h-[780px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-neutral-800">
            <Image src="/hero_xmax.png" alt="Motorcycle" fill className="object-cover" />
          </div>
          <div className="gradient-overlay absolute inset-0"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                One Stop Light Solution
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                At our workshop, we guarantee customer satisfaction with top-quality motorcycle lighting products that deliver superior performance and reliability every time.
              </p>
              <button className="bg-secondary px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <a href="/showcase">
                  Explore Showcase
                </a>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section id="showcase" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-neutral-900">Featured Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-24">
              {/* PRO7 */}
              <div className="gap-y-2 grid w-full">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-neutral-900 shadow-2xl">
                  <Image
                    src="/pro7.png"
                    alt="PRO7 Brand"
                    fill
                    style={{
                      transform: 'scale(1.8)',
                      transformOrigin: 'center',
                    }}
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-neutral-600 font-semibold text-xl text-shadow-lg">PRO7</p>
              </div>

              {/* BULLAES */}
              <div className="gap-y-2 grid">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/bullaes.png"
                    alt="BULLAES Brand"
                    fill
                    style={{
                      transform: 'scale(2.7)',
                      transformOrigin: 'center',
                    }}
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-neutral-600 font-semibold text-xl text-shadow-lg">BULLAES</p>
              </div>


              {/* SABER */}
              <div className="gap-y-2 grid">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg shadow-lg bg-neutral-900">
                  <Image
                    src="/saber.png"
                    alt="SABER Brand"
                    fill
                    style={{
                      transform: 'scale(1.2)',
                      left: '-4px',
                      transformOrigin: 'center',
                    }}
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-neutral-600 font-semibold text-xl text-shadow-lg">SABER</p>
              </div>

              {/* BEEBOT */}
              <div className="gap-y-2 grid">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/beebot.png"
                    alt="BEEBOT Brand"
                    fill
                    style={{
                      transformOrigin: 'center',
                    }}
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-neutral-600 font-semibold text-xl text-shadow-lg">BEEBOT</p>
              </div>

            </div>
          </div>
        </section>

        {/* Our Location */}
        <section id="location" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-neutral-900">Our Location</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-200 rounded-lg h-[700px] w-full mx-auto overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.068411461126!2d107.62063699129436!3d-7.005255121984191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eb007997e08f%3A0x850008cebe3bc89a!2sRmalz.autolight!5e0!3m2!1sen!2sid!4v1749101768142!5m2!1sen!2sid"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full"
                >
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-16 text-neutral-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-neutral-900">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* WhatsApp */}
                <div className="">
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-neutral-600">081399053006</p>
                </div>

                {/* Instagram */}
                <div className="">
                  <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                  <p className="text-neutral-600">@rmalz_autolighting</p>
                </div>

                {/* Shopee */}
                <div className="">
                  <h3 className="font-semibold text-lg mb-2">Shopee</h3>
                  <p className="text-neutral-600">@rmalz.light</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-neutral-900 pb-10">
            <div className="flex flex-col justify-between items-center gap-y-12">
              <div className="flex space-x-8 mb-4 md:mb-0">
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                <a href="#showcase" className="hover:text-primary transition-colors">Products</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>
              <div className="text-center text-neutral-400 mx-auto">
                <p>&copy; 2025 Rmalz Lighting. All rights reserved.</p>
              </div>
            </div>
        </footer>
      </div>
    </div>
  );
}
