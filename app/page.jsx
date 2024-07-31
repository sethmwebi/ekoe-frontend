import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ClothingRepairSection from "@/components/ClothingRepair";
import AboutEkoe from "@/components/Ekoe/AboutEkoe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <AboutEkoe />
      <ClothingRepairSection />
      <Footer />
    </>
  );
}
