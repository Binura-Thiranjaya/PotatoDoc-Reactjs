import React from "react";
import "./css/information.css";
import PotatoImage from "../assets/image/info.png";
export default function information() {
  return (
    <div>
      <div className="container">
        <div className="info-title">Information</div>
        <div className="row">
          <div className="col-md-4">
            <div className="info-content-left">
              <img src={PotatoImage} alt="potato" className="info-image" />
            </div>
          </div>
          <div className="col">
            <div className="info-content-right">
              <div className="info-right-title">Potato</div>
              <div className="info-right-subtitle">Solanum tuberosum</div>
              <div className="info-text">
                Potato is belong to solanacea family. It was introduced to Sri
                Lanka by Samuel Baker in 1850. Large Scale cultivation of potato
                was started by Department of Agriculture in Rahangala farm but
                it was failed due to bacterial wilt. Farmers multiply potato
                seeds on land in higher elevation for producing seeds for the
                major cultivation season (Yala season).
              </div>
              <div className="info-varieties">
                <div className="info-sub-title">Released Varieties</div>
                <div className="info-sub-content">
                  {/* Point form */}
                  <ul>
                    <li>Golden Star</li>
                    <li>Granola</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle shadow-none"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Treatments
            </button>
            <div>
              <div className="climaticrequirements">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
