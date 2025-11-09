"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import NewsSection from "../components/NewsSection"; // ✅ add this line
import TrainingPrograms from "../components/TrainingPrograms";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <NewsSection />   {/* ✅ new section in the flow */}
      <TrainingPrograms />
    </>
  );
}
