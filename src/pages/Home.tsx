import React from "react";
import Layout from "../layout/Layout";
import StatsSection from "../components/Home/StatsSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Intro from "../components/Home/Intro";

const Home: React.FC = () => {
  return (
    <Layout>

      
      <Intro />
      <StatsSection />
      <WhyChooseUs />
    </Layout>
  );
};

export default Home;
