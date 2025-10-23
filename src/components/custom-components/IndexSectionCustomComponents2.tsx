import React from "react";
import Link from "next/link";

const IndexSectionCustomComponents2: React.FC = () => {
  return (
    <section 
    id="our-tech-services"
    className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-heading mb-6">
            Our Tech Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-300">
            From repairs to custom solutions, we deliver comprehensive
            technology services that keep your business running smoothly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-colors duration-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-3">
              Computer Repairs
            </h3>
            <p className="text-neutral-300 mb-4">
              Professional diagnostic and repair services for desktops, laptops,
              and mobile devices with quick turnaround times.
            </p>
            <Link
              className="inline-flex items-center text-lg font-semibold text-white hover:text-white border-b border-white border-opacity-20 hover:border-opacity-50 transition-all duration-200"
              href="/repairs"
            >
              Learn more
            </Link>
          </div>
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-colors duration-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-3">
              Custom Builds
            </h3>
            <p className="text-neutral-300 mb-4">
              Tailored computer systems built to your exact specifications for
              gaming, workstation, or business applications.
            </p>
            <Link
              className="inline-flex items-center text-lg font-semibold text-white hover:text-white border-b border-white border-opacity-20 hover:border-opacity-50 transition-all duration-200"
              href="/custom-builds"
            >
              Learn more
            </Link>
          </div>
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-colors duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-3">
              Software Development
            </h3>
            <p className="text-neutral-300 mb-4">
              Custom software solutions and applications designed to streamline
              your business processes and boost productivity.
            </p>
            <Link
              className="inline-flex items-center text-lg font-semibold text-white hover:text-white border-b border-white border-opacity-20 hover:border-opacity-50 transition-all duration-200"
              href="/software"
            >
              Learn more
            </Link>
          </div>
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-colors duration-200">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-3">
              Website Creation
            </h3>
            <p className="text-neutral-300 mb-4">
              Professional web design and development services that help
              establish your digital presence and grow your business.
            </p>
            <Link
              className="inline-flex items-center text-lg font-semibold text-white hover:text-white border-b border-white border-opacity-20 hover:border-opacity-50 transition-all duration-200"
              href="/websites"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents2;
