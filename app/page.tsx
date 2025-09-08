"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { Cpu, Cloud, Shield, Code } from "lucide-react";

// const Icon = ({ children }) => (
//   <div className="w-8 h-8 mb-4 text-cyan-400">{children}</div>
// );

// <Icon><Cpu size={32} /></Icon>
// <Icon><Cloud size={32} /></Icon>
// <Icon><Shield size={32} /></Icon>
// <Icon><Code size={32} /></Icon>


const Icon = ({ src, alt }) => (
  <div className="w-8 h-8 mb-4">
    <Image src={src} alt={alt} width={32} height={32} />
  </div>
);

export default function OverTimeTech() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 text-gray-800 p-6">
      <header className="text-center mb-16">
        <motion.h1 
          className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          OverTime Tech
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Innovative Tech Solutions That Work Around the Clock
        </motion.p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="bg-gradient-to-b from-cyan-800 to-cyan-900 shadow-2xl rounded-2xl">
          <CardContent className="p-6 text-white">
            <Icon src="/icons/cpu.svg" alt="CPU icon" />
            <h2 className="text-xl font-bold mb-2">Our Mission</h2>
            <p>
              We deliver tech that never sleeps—building reliable, scalable, and cutting-edge IT solutions for businesses of every size.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-indigo-800 to-indigo-900 shadow-2xl rounded-2xl">
          <CardContent className="p-6 text-white">
            <Icon src="/icons/cloud.svg" alt="Cloud icon" />
            <h2 className="text-xl font-bold mb-2">Cloud Integration</h2>
            <p>
              Seamless and secure cloud strategies to keep your business agile, scalable, and competitive.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-purple-800 to-purple-900 shadow-2xl rounded-2xl">
          <CardContent className="p-6 text-white">
            <Icon src="/icons/shield.svg" alt="Shield icon" />
            <h2 className="text-xl font-bold mb-2">Cybersecurity</h2>
            <p>
              Advanced protection for your digital assets—around the clock threat detection and prevention.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-pink-800 to-pink-900 shadow-2xl rounded-2xl">
          <CardContent className="p-6 text-white">
            <Icon src="/icons/code.svg" alt="Code icon" />
            <h2 className="text-xl font-bold mb-2">Custom Software</h2>
            <p>
              Tailored solutions built from the ground up to solve your business challenges with precision.
            </p>
          </CardContent>
        </Card>
      </section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-4">Let’s Work Together</h2>
        <p className="text-lg text-gray-600 mb-6">
          Reach out and let’s build something extraordinary. OverTime Tech has your back 24/7.
        </p>
        <Button onClick={handleContactClick} className="text-lg px-6 py-2 rounded-2xl shadow-md bg-cyan-600 hover:bg-cyan-500">
          Contact Us
        </Button>
      </motion.section>
    </main>
  );
}
