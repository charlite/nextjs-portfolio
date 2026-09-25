"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Software Engineer with over{" "}
        <span className="font-medium">9 years of experience</span> building and
        maintaining modern web and mobile applications across{" "}
        <span className="font-medium">fintech, e-commerce, and SaaS</span>.
        Skilled in React, Next.js, Node.js, Python, Java, SwiftUI, and RESTful
        APIs, with solid expertise in server-side rendering, WebSockets, and
        accessibility best practices.
      </p>
      <p>
        <span className="italic">What I bring:</span> hands-on technical depth ·
        business-oriented problem solving · clean code & UI/UX · AI-native
        product engineering
      </p>
    </motion.section>
  );
}
