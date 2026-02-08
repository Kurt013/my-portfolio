import { useState } from "react";
import { FolderCode } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";

interface HeaderNavProps {
  navItems?: string[];
}

const HeaderNav = ({ navItems = [] }: HeaderNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 shadow-md backdrop-blur-xs z-9999 bg-background/55">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <a aria-label="Navigate to Home" href="#home" className="inline-block transition-all hover:scale-120">
            <FolderCode className="h-7 w-7" />
          </a>
        </div>
        {/* Hamburger button */}
        <div className="flex items-center gap-6">
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-foreground my-1 transition-all duration-200 ${open ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground transition-colors duration-150 capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </nav>
      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full bg-background w-64 shadow-lg z-30 transform transition-transform duration-300 md:hidden
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute text-foreground top-4 left-4 text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          &times;
        </button>
        <ul className="flex flex-col gap-6 mt-20 px-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block transition-colors duration-150 capitalize text-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default HeaderNav;
