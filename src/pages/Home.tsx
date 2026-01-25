import React from "react";
import Layout from "../layout/Layout";
import StatsSection from "../components/Home/StatsSection";
import Products from "../components/Home/Products";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Intro from "../components/Home/Intro";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className=" pb-20 bg-white">
        <Intro />
        <StatsSection />
        <Products />
        <WhyChooseUs />
      </div>
    </Layout>
  );
};

export default Home;
