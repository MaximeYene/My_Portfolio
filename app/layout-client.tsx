"use client";

import { useEffect } from "react";

export function LayoutClient() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Performance optimization: Preload images
    const preloadImages = () => {
      const images = [
        "/hero-bg.jpg",
        "/profile-illustration.jpg",
        "/projects-showcase.jpg",
      ];
      images.forEach((img) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = img;
        document.head.appendChild(link);
      });
    };

    preloadImages();

    // Optimize animations based on user preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.01ms",
      );
    }
  }, []);

  return null;
}
