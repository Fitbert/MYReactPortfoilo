// Imports
import React from "react";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
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