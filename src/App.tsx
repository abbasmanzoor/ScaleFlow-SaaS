import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProductOverview from './components/sections/ProductOverview';
import AnimatedFeatures from './components/sections/AnimatedFeatures';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import PricingCalculator from './components/sections/PricingCalculator';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ThemeCustomizer from './components/ui/ThemeCustomizer';
import BackToTop from './components/ui/BackToTop';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />
        <AnimatedFeatures />
        <Testimonials />
        <Pricing />
        <PricingCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
        <ThemeCustomizer />
        <BackToTop />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;