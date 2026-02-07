import React from "react";
import Layout from "../layout/Layout";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Intro from "../components/Home/Intro";
import PartnersTestimonials from "../components/Home/Testimontials";
import FAQ from "../components/Home/FAQ";
import Partners from "../components/Home/Partners";

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <Intro />
        <Partners />
        <WhyChooseUs />
        <FAQ />
        <PartnersTestimonials />
      </div>
    </Layout>
  );
};

export default Home;
