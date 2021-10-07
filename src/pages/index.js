import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/homedefault/banner";
import About from "../components/homedefault/about";
import Service from "../components/homedefault/service";
import Project from "../components/homedefault/project";
import Chooseus from "../components/homedefault/chooseus";
import SkillTwo from "../components/homedefault/skillTwo";
import Testimonial from "../components/homedefault/testimonial";
import Brand from "../components/homedefault/brand";
import BlogPost from "../components/blogPost";
import Calltoaction from "../elements/calltoaction/calltoaction";
import Contact from "../elements/contact/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="CJ Kemdirim" />
    <About />
    <Project />
    <SkillTwo />
    <Contact />
  </Layout>
  
)
export default IndexPage;