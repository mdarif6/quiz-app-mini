import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="sm-mainlayout">{children}</div>
      <Footer />
    </div>
  );
}
