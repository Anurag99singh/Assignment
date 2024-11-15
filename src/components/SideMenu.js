import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const SideMenu = ({ onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Navigation Icon */}
      <button
        onClick={toggleMenu}
        style={{
          fontSize: "1.5rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          position: "fixed",
          top: "1rem",
          left: isOpen ? "200px" : "1rem",
          zIndex: 1000,
        }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Side Menu */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: isOpen ? "200px" : "0",
          background: "#f4f4f4",
          overflowX: "hidden",
          transition: "width 0.3s ease",
          padding: isOpen ? "1rem" : "0",
          boxShadow: isOpen ? "2px 0 5px rgba(0, 0, 0, 0.2)" : "none",
          zIndex: 999,
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => {
                onSelectCategory(category);
                toggleMenu();
              }}
              style={{
                cursor: "pointer",
                padding: "0.5rem 0",
                borderBottom: "1px solid #ccc",
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
