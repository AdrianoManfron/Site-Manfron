import About from "@/components/layouts/about";
import Blog from "@/components/layouts/blog";
import Contact from "@/components/layouts/contact";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "@/components/layouts/hero";
import Projects from "@/components/layouts/projects";
import Skills from "@/components/layouts/skills";
import BtnBackToTop from "@/components/ui/btnBackToTop";

const Home = () => {
  return (
    <main className="max-w-[1920px] mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <BtnBackToTop />
    </main>
  )
}

export default Home;