import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Wraps every route: nav + page + footer, and scrolls to top on navigation.
export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-noir">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
