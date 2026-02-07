import { ThemeProvider } from "@/components/ThemeProvider";
import HeaderNav from "@/components/HeaderNav";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

function App() {
  const navItems = ["Home", "Projects", "Certifications", "Resume", "Contact"];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Analytics />

      <HeaderNav navItems={navItems} />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
