"use client"

import React from "react"
import { motion } from "framer-motion"

type AnimatedElementProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "bounce"
}

export function AnimatedElement({
  children,
  delay = 0,
  className = "",
  animation = "fadeIn",
}: AnimatedElementProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay }
    },
    slideIn: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay }
    },
    bounce: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={selectedAnimation.transition}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedImage({
  src,
  alt,
  className = "",
  delay = 0,
  animation = "fadeIn",
}: {
  src: string
  alt: string
  className?: string
  delay?: number
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "bounce"
}) {
  return (
    <AnimatedElement delay={delay} animation={animation}>
      <img src={src} alt={alt} className={className} />
    </AnimatedElement>
  )
}

export function AnimatedSvg({
  children,
  className = "",
  delay = 0,
  animation = "fadeIn",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "bounce"
}) {
  return (
    <AnimatedElement delay={delay} animation={animation} className={className}>
      {children}
    </AnimatedElement>
  )
}

export function HoverScaleElement({
  children,
  className = "",
  scale = 1.05,
}: {
  children: React.ReactNode
  className?: string
  scale?: number
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}