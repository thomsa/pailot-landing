import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default HomePage;
