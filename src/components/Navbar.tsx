"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Languages", href: "#languages" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // offset for fixed navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel-dark/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-xl sm:text-2xl font-bold cyber-text hover:text-cyber-blue transition-colors"
        >
          Saif<span className="text-cyber-blue">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-6 sm:space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-sm sm:text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyber-blue transition-all group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
