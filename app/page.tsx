import Image from "next/image";
import Navbar from "@/components/Navbar"
import Herosection from "@/components/Herosection"
import CommandCenter from "@/components/CommandCenter";
import ExhibitorHub from "@/components/ExhibitorHub";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import UseCases from "@/components/UseCases";
import FAQSection from "@/components/FAQSection";
import WaveGoodbye from "@/components/WaveGoodbye";
import EventQuoteWizard from "@/components/EventQuoteWizard";



export default function Home() {
  return (
    <>
    <Navbar />
    <Herosection></Herosection><CommandCenter /><ExhibitorHub /><WaveGoodbye/><Testimonials /><UseCases /><EventQuoteWizard /><ContactSection /><FAQSection /><Footer />
    
    </>
  );
}
