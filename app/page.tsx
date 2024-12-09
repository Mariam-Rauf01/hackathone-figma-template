import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Best from "../components/Best";
import Universe from "../components/Universe";
import Featured from "../components/Featured";
import Footer from "../components/Footer";


function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Best />
      <Universe />
      <Featured />
      <Footer />
      
    </div>
  );
}

export default page;
