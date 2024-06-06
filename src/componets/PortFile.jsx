// Imports
import React from "react";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resume from "./pages/resume/resume.jsx";
import Portfolio from "./pages/port/portfolio.jsx";

// Function that renders selected page state & exports
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Portfolio />;
  };