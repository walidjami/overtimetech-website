import React from "react";
import Link from "next/link";

const IndexSectionCustomComponents4: React.FC = () => {
  return (
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
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("our-tech-services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
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
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("ready-to-get-started")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
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
  );
};

export default IndexSectionCustomComponents4;
