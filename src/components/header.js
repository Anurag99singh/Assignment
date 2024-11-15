// src/components/Header.js
import React from "react";

const Header = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      background: "#e96262",
      color: "#fff",
      height: "60px",
    },
    title: {
      margin: 0,
      fontSize: "1.5rem",
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>News App</h1>
    </header>
  );
};

export default Header;
