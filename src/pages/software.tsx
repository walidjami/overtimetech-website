import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const SoftwarePage: React.FC = () => {
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
        <title>Software Development — OverTime-Tech</title>
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
                  className="text-sm hover:text-white font-medium text-white transition-colors duration-200"
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
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
              </div>
              <h1 className="text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-heading mb-6">
                Software Development
              </h1>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-300">
                Custom software solutions and applications designed to streamline your business processes and boost productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6">
                  Development Services
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
                    <h3 className="text-xl font-medium text-white mb-3">Web Applications</h3>
                    <p className="text-neutral-300 mb-4">Custom web applications built with modern frameworks and technologies.</p>
                    <ul className="text-sm text-neutral-400 space-y-1">
                      <li>• React, Vue.js, Angular</li>
                      <li>• Node.js, Python, PHP</li>
                      <li>• Database integration</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
                    <h3 className="text-xl font-medium text-white mb-3">Mobile Apps</h3>
                    <p className="text-neutral-300 mb-4">Native and cross-platform mobile applications for iOS and Android.</p>
                    <ul className="text-sm text-neutral-400 space-y-1">
                      <li>• React Native, Flutter</li>
                      <li>• Native iOS/Android</li>
                      <li>• App Store deployment</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
                    <h3 className="text-xl font-medium text-white mb-3">Desktop Software</h3>
                    <p className="text-neutral-300 mb-4">Custom desktop applications for Windows, macOS, and Linux.</p>
                    <ul className="text-sm text-neutral-400 space-y-1">
                      <li>• Electron, .NET, Java</li>
                      <li>• Cross-platform compatibility</li>
                      <li>• Enterprise integration</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Requirements Analysis</h3>
                      <p className="text-neutral-300">We analyze your business needs and create detailed specifications for your software solution.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Design & Planning</h3>
                      <p className="text-neutral-300">We create wireframes, user flows, and technical architecture for your application.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Development</h3>
                      <p className="text-neutral-300">Our experienced developers build your software using agile methodologies and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Testing & Deployment</h3>
                      <p className="text-neutral-300">We thoroughly test your software and deploy it with ongoing support and maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6 text-center">
                Technologies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Frontend</h3>
                  <p className="text-neutral-300 text-sm">React, Vue.js, Angular, TypeScript</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Backend</h3>
                  <p className="text-neutral-300 text-sm">Node.js, Python, .NET, Java</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Database</h3>
                  <p className="text-neutral-300 text-sm">PostgreSQL, MongoDB, MySQL</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.666.804 4.332A1 1 0 0113 21H7a1 1 0 01-.707-1.707L7.1 16H5a2 2 0 01-2-2V5zm5.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Cloud</h3>
                  <p className="text-neutral-300 text-sm">AWS, Azure, Google Cloud</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
                href="/#ready-to-get-started"
              >
                Start Your Project
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
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-white transition-all duration-200"
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
                onClick={() => setIsMenuOpen(false)}
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

export default SoftwarePage;
