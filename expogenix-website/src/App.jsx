import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Audience from "./components/Audience.jsx";
import Tickets from "./components/Tickets.jsx";
import Benefits from "./components/Benefits.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import useHashRoute from "./hooks/useHashRoute.js";

export default function App() {
  const hash = useHashRoute();

  if (hash === "#help" || hash === "#help-support") {
    return <HelpPage />;
  }

  if (hash === "#privacy") {
    return <PrivacyPage />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Features />
        <HowItWorks />
        <Audience />
        <Tickets />
        <Benefits />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}