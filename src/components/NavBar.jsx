import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navBarOptions } from "../constans";
import '../App.css';

const NavBar = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(() => {
    if (location.pathname.startsWith("/portfolio") || location.pathname.startsWith("/project")) {
      return navBarOptions.portfolio;
    }
    return navBarOptions.about;
  });

  useEffect(() => {
    if (location.pathname.startsWith("/portfolio") || location.pathname.startsWith("/project")) {
      setSelectedTab(navBarOptions.portfolio);
    } else if (location.pathname === "/") {
      setSelectedTab(navBarOptions.about);
    } else {
      setSelectedTab(navBarOptions.about); // Default to about for other routes
    }
  }, [location.pathname]);

  return (
    <div className="navbar-container">
      <div className="logo">
        <svg
          width="316"
          height="75"
          viewBox="0 0 316 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content here */}
        </svg>
      </div>
      <div className="nav-list-container">
        <nav className="navbar-list">
          <Link
            to="/"
            key={navBarOptions.about}
            className={"about"}
            onClick={() => setSelectedTab(navBarOptions.about)}
          >
            About
            {selectedTab === navBarOptions.about && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </Link>
          <Link
            to="/portfolio"
            key={navBarOptions.portfolio}
            className={"portfolio"}
            onClick={() => setSelectedTab(navBarOptions.portfolio)}
          >
            Portfolio
            {selectedTab === navBarOptions.portfolio && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </Link>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default NavBar;
