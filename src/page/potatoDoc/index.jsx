import React from "react"
import Navbar from "../../component/navbar"
import Hero from "../../component/hero"
import Potatodoc from "../../component/potatodoc"
import Footer from "../../component/footer"
export default function PotatoDoc() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Potatodoc/>
      <Footer/>
    </div>
  );
}
