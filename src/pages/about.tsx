import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

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
        <title>About OverTime Tech | Computer Repair, Custom PCs & Technology Services</title>
        <meta
          name="description"
          content="Learn about OverTime Tech and the engineering experience behind our computer repair, custom PC, software development, and website services in Northern Virginia."
        />
      </Head>
      <section className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="container px-4 mx-auto">
          <nav className="flex justify-between items-center py-8">
            <div className="flex flex-col items-center">
              <Link href="/">
                <img
                  src="/hlogo.svg"
                  alt="OverTime Tech"
                  className="h-20"
                />
              </Link>
              <span className="text-neutral-400 text-sm mt-1">
                Complete Tech Solutions
              </span>
            </div>
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
              <li className="border-l border-neutral-700 pl-8">
                <Link
                  className="text-sm hover:text-white font-medium text-white transition-colors duration-200"
                  href="/about"
                >
                  About
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
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">
                About OverTime Tech
              </p>
              <h1 className="text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-heading mb-6">
                Built by an engineer. Driven by problem-solving.
              </h1>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-300">
                OverTime Tech is a locally owned technology business serving Northern Virginia and the
                greater DMV area. We combine professional software engineering experience with hands-on
                technology expertise to provide practical, dependable solutions for individuals and businesses.
              </p>
            </div>

            {/* Founder */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-2 flex justify-center">
                  {photoFailed ? (
                    <div className="w-64 h-80 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.35)]">
                      <span className="text-7xl font-medium text-white">W</span>
                    </div>
                  ) : (
                    <img
                      src="/walid.jpg"
                      alt="Walid, founder of OverTime Tech"
                      width={400}
                      height={500}
                      onError={() => setPhotoFailed(true)}
                      className="w-64 md:w-full max-w-xs aspect-[4/5] object-cover rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.35)]"
                    />
                  )}
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-2">
                    Meet the person behind OverTime Tech
                  </p>
                  <h2 className="text-3xl font-medium text-white mb-4">Hi, I'm Walid.</h2>
                  <div className="space-y-4 text-neutral-300">
                    <p>I'm the engineer behind OverTime Tech.</p>
                    <p>
                      I've always enjoyed figuring out how technology works—and especially figuring out why it
                      doesn't. That curiosity started with taking things apart and experimenting with electronics
                      and computers, and eventually became a career in software engineering.
                    </p>
                    <p>
                      I started OverTime Tech to bring that same problem-solving mindset to my local community.
                      Instead of dealing with a large chain or a faceless support department, customers can work
                      directly with the person responsible for solving their problem.
                    </p>
                  </div>
                  <p className="mt-6 text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Local business. Personal service. Professional expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6 text-center">
                The Experience Behind OverTime Tech
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.482 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">Education</h3>
                      <p className="text-neutral-400">Bachelor's Degree in Computer Engineering</p>
                    </div>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    A George Mason University graduate with a Bachelor's degree in Computer Engineering and a
                    foundation spanning computer hardware, software systems, digital design, and embedded systems.
                  </p>
                  <p className="text-sm text-neutral-500">
                    Hardware · Software · Digital Systems · Embedded Systems
                  </p>
                </div>

                <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">Professional Experience</h3>
                      <p className="text-neutral-400">Software Engineering</p>
                    </div>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    My professional experience as a software engineer has involved building and maintaining
                    software across web applications, mobile applications, embedded systems, and automation.
                  </p>
                  <p className="text-neutral-300">
                    That experience provides a broader perspective when troubleshooting technology—from the
                    hardware a system runs on to the software that makes it work.
                  </p>
                </div>
              </div>
            </div>

            {/* Why OverTime Tech */}
            <div className="mb-16">
              <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6 text-center">
                Why OverTime Tech?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🛠️",
                    title: "Engineering Experience",
                    text: "Formal engineering education, professional software development experience, and hands-on hardware knowledge come together to solve problems from multiple angles.",
                  },
                  {
                    icon: "🤝",
                    title: "Straightforward Service",
                    text: "No unnecessary jargon or upselling. I'll explain the problem, walk you through your options, and recommend the solution that makes the most sense.",
                  },
                  {
                    icon: "📍",
                    title: "Local & Personal",
                    text: "As a small local business, I care about the people I serve. You get direct communication, personal attention, and someone who stands behind the work.",
                  },
                ].map((c) => (
                  <div key={c.title} className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-xl">
                      {c.icon}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">{c.title}</h3>
                    <p className="text-neutral-300 text-sm">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How I work */}
            <div className="mb-16">
              <h2 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-6 text-center">
                A Simple Approach to Technology
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { n: "01", title: "Understand", text: "I start by understanding what you actually need—not what you should buy." },
                  { n: "02", title: "Diagnose", text: "I take the time to identify the underlying problem rather than simply treating the symptoms." },
                  { n: "03", title: "Recommend", text: "I'll explain your options and recommend the solution that makes the most sense for your situation and budget." },
                  { n: "04", title: "Solve", text: "Once you've chosen the right approach, I'll take care of the technical work and make sure everything is working properly." },
                ].map((step) => (
                  <div key={step.n} className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
                    <div className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                      {step.n}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-neutral-300 text-sm">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-10 text-center">
              <h2 className="text-3xl font-medium text-white mb-4">Need Technology Help in Northern Virginia?</h2>
              <p className="max-w-2xl mx-auto text-neutral-300 mb-8">
                Whether you need a computer repaired, a custom PC built, software developed, or a website created,
                tell me what you're working with and we'll figure out the right solution.
              </p>
              <Link
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
                href="/#ready-to-get-started"
              >
                Get Started →
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
                src="/hlogo.svg"
                alt="OverTime Tech"
                className="h-20"
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
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-white transition-all duration-200"
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
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
            <div className="mb-6 md:mb-0 text-center">
              <img
                src="/hlogo.svg"
                alt="OverTime Tech"
                className="h-20 mb-2"
              />
              <p className="text-neutral-400 text-sm">
                Complete Tech Solutions
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
              © 2025 OverTime Tech. All rights reserved.<br />
              You bring the tech, we bring the OverTime
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
