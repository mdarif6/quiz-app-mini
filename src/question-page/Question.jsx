import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import QuestionMain from "./QuestionMain";

export default function Question() {
  return (
    <div className="sm-quiz">
      <Header />
      <QuestionMain />
      <Footer />
    </div>
  );
}
