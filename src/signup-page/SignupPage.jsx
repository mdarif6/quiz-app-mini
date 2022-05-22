import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SignupMain from "./SignupMain";

export default function SignupPage() {
  return (
    <div className="signuppage">
      <Header />
      <SignupMain />
      <Footer />
    </div>
  );
}
