import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-md rounded-2xl border border-white/10 
        bg-white/5 backdrop-blur-lg p-8 shadow-xl"
      >
        <div className="flex flex-col gap-6 text-center">
          
          {/* Address */}
          <div className="flex items-center justify-center gap-3 text-neutral-300">
            <MapPin className="h-5 w-5 text-purple-400" />
            <span>{CONTACT.address}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <Phone className="h-5 w-5 text-pink-400" />
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-neutral-300 hover:text-white transition"
            >
              {CONTACT.phoneNo}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-5 w-5 text-red-400" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-pink-400 hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* CTA */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-6 inline-block rounded-full 
            bg-gradient-to-r from-purple-500 to-pink-500 
            px-6 py-3 text-sm font-medium text-white 
            transition hover:opacity-90"
          >
            Let’s Work Together
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
