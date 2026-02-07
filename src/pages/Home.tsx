import React from "react";
import Navbar from "../components/Layout/Navbar";
import WhyUs from "../components/Home/Whyus";
import Partners from "../components/Home/Partners";
import ClientFeedbacks from "../components/Home/Clients";
import FAQ from "../components/Home/FAQ";
import ExampleFragrances from "../components/Home/Examples";
import Footer from "../components/Layout/Footer";
import "../assets/styles/home.css";
import Intro from "../components/Home/Intro";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-linear-to-br from-amber-50 via-white to-rose-50 relative overflow-hidden">
      <Navbar />
      <Intro />
      <WhyUs />
      <Partners />
      <ClientFeedbacks />
      <FAQ />
      <ExampleFragrances />
      <Footer />
    </section>
  );
};

export default HeroSection;
