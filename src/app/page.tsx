"use client";
import { useEffect } from "react";   // ⭐ added
import Hero from "../components/Hero";
import About from "../components/About";
import NewsSection from "../components/NewsSection"; 
import TrainingPrograms from "../components/TrainingPrograms";

export default function Home() {

  // ⭐ Snell Counter System — count visits
  useEffect(() => {
    fetch("/api/visit", { method: "POST" });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <NewsSection />   {/* still in the flow */}
      <TrainingPrograms />
    </>
  );
}
