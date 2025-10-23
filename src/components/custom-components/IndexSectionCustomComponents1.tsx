import React, { useState } from "react";
import Link from "next/link";

const IndexSectionCustomComponents1: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container px-4 mx-auto">
        <nav className="flex justify-between items-center py-8">
          <Link href="/">
            <img
              src="https://static.shuffle.dev/uploads/files/1b/1b37e02bbb4082b8497a17db81592718b7cf54b1/logos/logo-78d34ac57821d853aaf47e300463f4f0.png"
              alt="OverTime Tech"
              className="h-8"
            />
          </Link>
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="block hover:text-white text-neutral-300 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex ml-auto mr-8 items-center w-auto space-x-8">
            <li>
              <Link
                className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                href="/repairs"
              >
                Repairs
              </Link>
            </li>
            <li>
              <Link
                className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                href="/custom-builds"
              >
                Custom Builds
              </Link>
            </li>
            <li>
              <Link
                className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                href="/software"
              >
                Software
              </Link>
            </li>
            <li>
              <Link
                className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                href="/websites"
              >
                Websites
              </Link>
            </li>
          </ul>
          <Link
            className="hidden lg:block px-4 py-2 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
            href="#ready-to-get-started"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("ready-to-get-started")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Quote
          </Link>
        </nav>
        <div className="flex flex-wrap items-center -mx-4 mt-8 lg:mt-12 pb-20">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="mb-6">
              <span className="text-sm text-neutral-400 font-medium">
                Complete Tech Solutions
              </span>
            </div>
            <h1 className="max-w-2xl mb-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
              You bring the tech, we bring the OverTime
            </h1>
            <p className="max-w-xl mb-10 text-lg leading-relaxed text-neutral-300">
              From computer repairs and custom builds to software development
              and website creation - OverTime Tech delivers comprehensive
              technology solutions with professional expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg group"
                href="#ready-to-get-started"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("ready-to-get-started")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
                <svg
                  className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white hover:text-white border border-neutral-700 hover:border-white hover:border-opacity-50 rounded-full transition-all duration-200"
                href="#our-tech-services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("our-tech-services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Services
              </Link>
            </div>
            <div className="flex items-center space-x-6 mt-12">
              <div className="text-sm text-neutral-400">
                Trusted by 1,000+ clients
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full p-px border border-white border-opacity-20 -ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="w-8 h-8 rounded-full p-px border border-white border-opacity-20">
                  <img
                    src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw2fHxmYWNlfGVufDB8Mnx8fDE3NDg4OTE1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&w=450"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="w-8 h-8 rounded-full p-px border border-white border-opacity-20">
                  <img
                    src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxOXx8ZmFjZXxlbnwwfDJ8fHwxNzQ4ODkxNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&w=450"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="w-8 h-8 rounded-full p-px border border-white border-opacity-20">
                  <img
                    src="https://images.unsplash.com/photo-1506464253090-7af30fe60a71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&h=300&q=80"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-purple-800 rounded-2xl filter blur-3xl" />
              <div className="p-1 border border-white border-opacity-20 rounded-2xl">
                <img
                  className="relative object-cover w-full rounded-xl border border-neutral-800"
                  src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
        <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-75 filter blur-3xl" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-neutral-900 border-r border-neutral-800 overflow-y-auto">
          <div className="flex items-center mb-12">
            <Link href="/" className="mr-auto">
              <img
                src="https://static.shuffle.dev/uploads/files/1b/1b37e02bbb4082b8497a17db81592718b7cf54b1/logos/logo-78d34ac57821d853aaf47e300463f4f0.png"
                alt="OverTime Tech"
                className="h-8"
              />
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <svg
                className="h-6 w-6 cursor-pointer hover:text-white text-neutral-400 transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                  href="/repairs"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Repairs
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                  href="/custom-builds"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Builds
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                  href="/software"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                  href="/websites"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Websites
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-6 py-3 text-sm text-center font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-200"
                href="/#ready-to-get-started"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document
                    .getElementById("ready-to-get-started")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Quote
              </Link>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-neutral-500">
              <span>© 2025 OverTime Tech. All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents1;
