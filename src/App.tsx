import { ThemeProvider } from "@/components/ThemeProvider";
import HeaderNav from "@/components/HeaderNav";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

function App() {
  const navItems = ["Home", "Projects", "Certifications", "Resume", "Contact"];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HeaderNav navItems={navItems} />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
