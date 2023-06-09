import React from "react";
import { useState } from "react";
import "./css/hero.css";
import BgImage from "../assets/image/bg.png";
export default function Hero() {

  return (
    <section className="hero" style={{ backgroundImage:`url(${BgImage})`}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">PotatoDoc | AI</div>
              <div className="text-hero-bold">
                Potato Leaf Disease Detection
              </div>
              <div className="text-hero-regular">
                PotatoDoc is an innovative solution that leverages the power of
                image processing and machine learning to identify potato plant
                diseases accurately and quickly. By simply capturing an image of
                a potato leaf using a smartphone or camera, the application can
                diagnose the disease and provide recommended treatments to
                mitigate it. This approach not only saves farmers time and money
                but also reduces the environmental impact of excessive pesticide
                use. PotatoDoc is user-friendly and accessible, making it an
                invaluable tool for potato growers looking to increase their
                yields and protect their crops.
              </div>
              <div className="row">
                <div className="col col-lg-4 pb-1">
                <a href="#image-engine" className="btn btn-primary shadow-none ">
                  Get Started
                </a>
                </div>
                <div className="col col-lg-4 ">
                <a href="#" className="btn btn-secondary shadow-none ">
                  Treatments
                </a>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-4 d-flex align-items-center justify-content-center">
            <div className="rounded-9 w-100 d-flex align-items-center justify-content-center  bg-black bg-opacity-25" style={{height:"250px"}}>
              <div className="">
                <a className="btn btn-primary" href="#image-engine" ><i className='bx bxs-cloud-upload'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
            {/* <div className="upload container-fluid">
              <form>
                <div className="mb-3">
                  <label htmlFor="image-upload" className="text-label">
                    Upload an Image
                  </label>
                  <div className="row">
                  <input
                    type="file"
                    className="form-control"
                    id="image-upload"
                    accept="image/*"
                    onChange={fileSelectedHandler}
                  />
                  <button
                    type="submit"
                    className="btn mt-3 mb-3 float-end btn-primary shadow-none"
                  >
                    Upload
                  </button>
                  </div>
                  
                </div>
                <div className="preview-container">
                  <div id="upload-icon">
                    <i class='bx bxs-cloud-upload'></i>
                  </div>
                  <img
                    id="image-preview"
                    src="#"
                    alt="Image Preview"
                    style={{ display: "none" }}
                  />
                  <span
                    id="remove-icon"
                    className="remove-icon"
                    style={{ display: "none" }}
                    onClick={fileRemovedHandler}
                  >
                    <i className="fas fa-times-circle"></i>
                  </span>
                </div>
              </form>
            </div> */}