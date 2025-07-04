"use client";
import { motion } from "framer-motion";
import React from "react";

type AnimatedHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedHeading({ children, className }: AnimatedHeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}