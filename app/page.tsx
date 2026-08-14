import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Method from "@/components/method";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Download from "@/components/download";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Method />
        <Features />
        <Pricing />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
