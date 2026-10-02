import { useEffect } from "react";
import Hero from "../sections/home/Hero";
import Introduction from "../sections/home/Introduction";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import TransformationShowcase from "../sections/home/TransformationShowcase";
import TransformationStory from "../components/transformation/TransformationStory";
import Process from "../sections/home/Process";
import Categories from "../sections/home/Categories";
import RecentInstallations from "../sections/home/RecentInstallations";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import Stats from "../sections/home/Stats";
import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA";
import { getFeaturedProjects } from "../services/projectService";
import { setPageMeta } from "../utils/seo";

export default function Home() {
  const storyProject = getFeaturedProjects()[0];
  useEffect(() => setPageMeta(), []);

  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedProjects />
      <TransformationShowcase />
      <TransformationStory project={storyProject} preview />
      <Process />
      <Categories />
      <RecentInstallations />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
