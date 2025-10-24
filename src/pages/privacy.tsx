import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const PrivacyPage: React.FC = () => {
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
        <title>Privacy Policy — OverTime-Tech</title>
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-heading mb-6">
                Privacy Policy
              </h1>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-300">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  Information We Collect
                </h2>
                <p className="text-neutral-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="text-neutral-300 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fill out our contact form or request a quote
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Communicate with us via email or phone
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Use our services or request technical support
                  </li>
                </ul>
                <p className="text-neutral-300">
                  This information may include your name, email address, phone number, 
                  project details, and any other information you choose to provide.
                </p>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-neutral-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-neutral-300 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Provide, maintain, and improve our services
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Send you technical information, updates, and marketing communications
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Process transactions and send related information
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  Information Sharing
                </h2>
                <p className="text-neutral-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="text-neutral-300 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    With your explicit consent
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    To comply with legal obligations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    To protect our rights and prevent fraud
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  Data Security
                </h2>
                <p className="text-neutral-300 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  Your Rights
                </h2>
                <p className="text-neutral-300 mb-4">
                  You have the right to:
                </p>
                <ul className="text-neutral-300 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Access and update your personal information
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Request deletion of your personal information
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Opt out of marketing communications
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Withdraw consent at any time
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  Contact Us
                </h2>
                <p className="text-neutral-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="text-neutral-300 space-y-2">
                  <p>Email: info@overtimetech.com</p>
                  <p>Phone: (662) 622-1505</p>
                  <p>Address: 123 Tech Street, Digital City, DC 12345</p>
                </div>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-neutral-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
                <p className="text-neutral-400 text-sm mt-4">
                  Last Updated: January 2025
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
                href="/"
              >
                Back to Home
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
                onClick={() => setIsMenuOpen(false)}
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

export default PrivacyPage;
