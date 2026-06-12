import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Appointment from "@/components/Appointment";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import InstagramFloat from "@/components/InstagramFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Services />
        <About />
        <Appointment />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <InstagramFloat />
    </>
  );
}
