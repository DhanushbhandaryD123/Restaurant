import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useLenis from "./hooks/useLenis";
import Layout from "./components/layout/Layout";
import Loader from "./components/common/Loader";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Chefs from "./pages/Chefs";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Fade-through transition between routes.
function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  useLenis();
  const location = useLocation();

  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />

      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/menu" element={<Page><Menu /></Page>} />
            <Route path="/about" element={<Page><About /></Page>} />
            <Route path="/chefs" element={<Page><Chefs /></Page>} />
            <Route path="/gallery" element={<Page><Gallery /></Page>} />
            <Route path="/reservation" element={<Page><Reservation /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}
