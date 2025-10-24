import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const RepairsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement("script");
    script1.src = "js/global-7482.js";
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <Head>
        <title>Computer Repairs — OverTime-Tech</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/shuffle-for-bootstrap.png"
        />
      </Head>
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
                  className="text-sm hover:text-white font-medium text-white transition-colors duration-200"
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
              href="/#ready-to-get-started"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </section>

      <section className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-heading mb-6">
                Computer Repairs
              </h1>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-300">
                Professional diagnostic and repair services for desktops, laptops, and mobile devices with quick turnaround times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6">
                  What We Repair
                </h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Desktop computers and workstations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Laptops and notebooks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tablets and mobile devices
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gaming consoles and peripherals
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Printers and networking equipment
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Diagnosis</h3>
                      <p className="text-neutral-300">We thoroughly diagnose the issue using professional tools and techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Quote</h3>
                      <p className="text-neutral-300">We provide a detailed quote with no hidden fees before starting work.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Repair</h3>
                      <p className="text-neutral-300">Our certified technicians perform the repair with quality parts and tools.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Testing</h3>
                      <p className="text-neutral-300">We thoroughly test your device to ensure everything works perfectly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6 text-center">
                Common Repair Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Hardware Issues</h3>
                  <p className="text-neutral-300">Screen replacements, keyboard repairs, battery issues, and component upgrades.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.666.804 4.332A1 1 0 0113 21H7a1 1 0 01-.707-1.707L7.1 16H5a2 2 0 01-2-2V5zm5.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Software Problems</h3>
                  <p className="text-neutral-300">Virus removal, OS installation, driver updates, and performance optimization.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Data Recovery</h3>
                  <p className="text-neutral-300">Recover lost files, photos, and documents from damaged or corrupted drives.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
                href="/#ready-to-get-started"
              >
                Get Your Repair Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
        <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-75 filter blur-3xl" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-neutral-900 border-r border-neutral-800 overflow-y-auto">
          <div className="flex items-center mb-12">
            <Link href="/" className="mr-auto" onClick={() => setIsMenuOpen(false)}>
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
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-white transition-all duration-200"
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

      <footer className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800 py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="https://static.shuffle.dev/uploads/files/1b/1b37e02bbb4082b8497a17db81592718b7cf54b1/logos/logo-78d34ac57821d853aaf47e300463f4f0.png"
                alt="OverTime Tech"
                className="h-8 mb-2"
              />
              <p className="text-neutral-400 text-sm">
                Complete technology solutions for your business
              </p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <Link
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                href="/#our-tech-services"
              >
                Services
              </Link>
              <Link
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                href="/#ready-to-get-started"
              >
                Contact
              </Link>
              <Link
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                href="/privacy"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-6 mt-6 text-center">
            <p className="text-neutral-500 text-sm">
              © 2025 OverTime Tech. All rights reserved. You bring the tech, we
              bring the OverTime.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default RepairsPage;
