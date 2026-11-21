import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import PaymentTerms from './pages/PaymentTerms'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import ShopManagementSoftware from './pages/landing/ShopManagementSoftware'
import SmallBusinessShopManagement from './pages/landing/SmallBusinessShopManagement'
import AutoRepairShopSoftware from './pages/landing/AutoRepairShopSoftware'
import BlogIndex from './pages/blog/BlogIndex'
import BestShopManagementSoftware from './pages/blog/BestShopManagementSoftware'
import HowToChooseShopManagement from './pages/blog/HowToChooseShopManagement'
import BenefitsCloudShopManagement from './pages/blog/BenefitsCloudShopManagement'
import { trackPageView } from './lib/analytics'

export default function App() {
  const location = useLocation()

  // Scroll to top and fire page_view on every client-side route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    trackPageView(location.pathname, document.title)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Primary promoted landing page — renders the Home switch-to flow. */}
          <Route path="/lp/switch-to-fixoraerp" element={<Home />} />
          {/* Fix for the earlier /ip/ typo so inbound links still work. */}
          <Route path="/ip/switch-to-fixoraerp" element={<Navigate to="/lp/switch-to-fixoraerp" replace />} />

          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/payment-terms" element={<PaymentTerms />} />
          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="/shop-management-software" element={<ShopManagementSoftware />} />
          <Route path="/small-business-shop-management-software" element={<SmallBusinessShopManagement />} />
          <Route path="/auto-repair-shop-software" element={<AutoRepairShopSoftware />} />

          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/best-shop-management-software-for-small-business" element={<BestShopManagementSoftware />} />
          <Route path="/blog/how-to-choose-shop-management-software" element={<HowToChooseShopManagement />} />
          <Route path="/blog/benefits-of-cloud-based-shop-management-software" element={<BenefitsCloudShopManagement />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
