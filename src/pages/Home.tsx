import React from "react";
import Layout from "../layout/Layout";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Intro from "../components/Home/Intro";
import PartnersTestimonials from "../components/Home/Testimontials";
import FAQ from "../components/Home/FAQ";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className=" pb-20 bg-white">
        <Intro />
        <WhyChooseUs />
        <FAQ />
        <PartnersTestimonials />
      </div>
    </Layout>
  );
};

export default Home;
