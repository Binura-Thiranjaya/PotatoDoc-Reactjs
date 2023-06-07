import React from "react";
import "./css/pest.css";
import Pest from "../assets/image/pest.png";
export default function pestManagement() {
  return (
    <div>
      <div className="container pb-5">
        <div className="row pt-2">
          <div className="col-md-6">
            <div className="pest-content-left">
              <div className="pest-title">Pest Management</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pest-content-right">
              <div className="d-flex justify-content-center">
                <img src={Pest} alt="potato" className="pest-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="pest-details-container">
          
        </div>
      </div>
    </div>
  );
}
