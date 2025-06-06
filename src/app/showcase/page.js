"use client"
import Image from "next/image"
import { productsData } from "../../../data/product"
import { useEffect, useState } from "react";

export default function ShowcasePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-plus-jakarta-sans">
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
            <a href="/" className="hover:text-secondary transition-colors">Home</a>
            <a href="#" className="hover:text-secondary transition-colors">Showcase</a>
            <a href="/#location" className="hover:text-secondary transition-colors">Location</a>
            <a href="/#contact" className="hover:text-secondary transition-colors">Contact</a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-left font-red-hat-text text-gray-900">Showcase</h1>

        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="h-64 md:h-80 overflow-hidden shadow-lg">
            <Image
              src="/showcase1.png"
              alt="Showcase Image 1"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="h-64 md:h-80 overflow-hidden shadow-lg">
            <Image
              src="/showcase2.png"
              alt="Showcase Image 2"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Most Popular Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-red-hat-text text-gray-900">Most Popular</h2>
          <div className="grid grid-cols-1 gap-6">
            {productsData.mostPopular.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row bg-white"
              >
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold font-red-hat-text text-gray-900 mb-3">{product.name}</h3>
                  <ul className="mt-2 space-y-2 text-gray-600 font-public-sans">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xl font-bold text-purple-600 font-red-hat-text">{product.price}</p>
                </div>
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <Image
                    src={product.image || "/placeholder.svg?height=300&width=300"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Underglow Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-red-hat-text text-gray-900">Underglow</h2>
          <div className="grid grid-cols-1 gap-6">
            {productsData.underglow.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row bg-white"
              >
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold font-red-hat-text text-gray-900 mb-3">{product.name}</h3>
                  <ul className="mt-2 space-y-2 text-gray-600 font-public-sans">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xl font-bold text-purple-600 font-red-hat-text">{product.price}</p>
                </div>
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <Image
                    src={product.image || "/placeholder.svg?height=300&width=300"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-red-hat-text text-gray-900">Additional</h2>
          <div className="grid grid-cols-1 gap-6">
            {productsData.additional.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row bg-white"
              >
                <div className="p-6 flex-1">
                  <ul className="text-xl font-bold font-red-hat-text text-gray-900 mb-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
