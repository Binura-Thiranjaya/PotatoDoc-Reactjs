import React from "react";
import "./css/information.css";
import PotatoImage from "../assets/image/info.png";
export default function information() {
  return (
    <div>
      <div className="container pb-5">
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
        <div className="details">
          {/*Climatic requirements/ Areas suitable for cultivation */}
          <div className="row  ">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#climaticRequirements"
                aria-expanded="false"
                aria-controls="climaticRequirements"
              >
                Climatic requirements/ Areas suitable for cultivation
              </button>
            </p>
            <div class="collapse" id="climaticRequirements">
              <div class="card card-body">
                Tuber initiation of potato requires low soil temperature less
                than 24 oC. Day and night temperature difference should have
                more than 10 oC for successful crop. Potato grows well in up
                country area whereas heat tolerance varieties can be grown in
                dry areas such as Jaffna and Kalpitiya.
              </div>
            </div>
          </div>
          {/* Soil */}
          <div className="row  ">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#soil"
                aria-expanded="false"
                aria-controls="soil"
              >
                Soil
              </button>
            </p>
            <div class="collapse" id="soil">
              <div class="card card-body">
                Well drain soil with more organic matter is required. Suitable
                pH range is 5.5-6.6.
              </div>
            </div>
          </div>
          {/*Seed requirement*/}
          <div className="row">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#seed"
                aria-expanded="false"
                aria-controls="seed"
              >
                Seed requirement
              </button>
            </p>
            <div class="collapse" id="seed">
              <div class="card card-body">2000 kg tubers /ha</div>
            </div>
          </div>
          {/* Land preparation */}
          <div className="row">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#land"
                aria-expanded="false"
                aria-controls="land"
              >
                Land preparation
              </button>
            </p>
            <div class="collapse" id="land">
              <div class="card card-body">
                Plough soil to the depth of 30 cm and add lime if pH is low.
              </div>
            </div>
          </div>
          {/*Planting*/}
          <div className="row">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#planting"
                aria-expanded="false"
                aria-controls="planting"
              >
                Planting
              </button>
            </p>
            <div class="collapse" id="planting">
              <div class="card card-body">
                Potato tubers can be planted in ridges or raised beds. Soil
                earthing up is carried out 30 days after planting
              </div>
            </div>
          </div>
          {/* Spacing */}
          <div className="row">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#spacing
                "
                aria-expanded="false"
                aria-controls="spacing
                "
              >
                Soil
              </button>
            </p>
            <div class="collapse" id="spacing">
              <div class="card card-body">60 x 25 cm</div>
            </div>
          </div>
          {/*Water supply */}
          <div className="row">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#water"
                aria-expanded="false"
                aria-controls="water"
              >
                Water supply
              </button>
            </p>
            <div class="collapse" id="water">
              <div class="card card-body">
                Tuberization and tuber bulking stages are critical for water
                supply. High yielding crop required about 70 % available water.
                Sprinkler or drip irrigation methods are more suitable than the
                furrow irrigation.
              </div>
            </div>
          </div>
          {/* Weed Control
           */}
          <div className="row">
            <p>
              <button
                class="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#weed"
                aria-expanded="false"
                aria-controls="weed"
              >
                Weed Control
              </button>
            </p>
            <div class="collapse" id="weed">
              <div class="card card-body">
                Pre-emergent herbicide: metribuzine can be spray to control
                weeds. Weeds also control by intercultural operations at 2 and 4
                weeks after planting.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
