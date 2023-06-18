import React from "react";
import "./css/pest.css";
import Pest from "../assets/image/pest.png";
// Assets
import LeafMiner1 from "../assets/POTATODOC-PEST/Leaf miner-Liriomyza huidobrensis/WM-Leaf-miner-adult-flies-punctured-leaf-by-using-ovipositor-and-deposits-eggs-on-the-upper-side-of-the-leaf.jpg";
import LeafMiner2 from "../assets/POTATODOC-PEST/Leaf miner-Liriomyza huidobrensis/WM-Leaf-miner-larval-damage-symptom-on-potato-leaves.jpg";

import BlackCut1 from "../assets/POTATODOC-PEST/Black cut worm-Agrotis spp/WM-Black-cut-worm-Adult-Gray-colour-medium-size-moth.jpg";
import BlackCut2 from "../assets/POTATODOC-PEST/Black cut worm-Agrotis spp/WM-Black-cut-worm-Larvae.jpg";
import BlackCut3 from "../assets/POTATODOC-PEST/Black cut worm-Agrotis spp/WM-Damage-symptom-of-black-cut-worm-on-potato-plant.jpg";
import BlackCut4 from "../assets/POTATODOC-PEST/Black cut worm-Agrotis spp/WM-Damage-symptom-of-black-cut-worm-on-potato-tuber.jpg";
import BlackCut5 from "../assets/POTATODOC-PEST/Black cut worm-Agrotis spp/WM-Pupa-stage-of-black-cut-worm.jpg";

import PotatoAphid1 from "../assets/POTATODOC-PEST/Potato aphid - Myzus persicae/WM-Aphids-are-colonized-under-side-of-the-leaves-and-pierce-cells-to-suck-up-sap-from-the-plant.jpg";
import PotatoAphid2 from "../assets/POTATODOC-PEST/Potato aphid - Myzus persicae/WM-Severe-aphids-infestation-Cause-leaflets-rolling-growth-disturbance-and-develop-aberrant-top.jpg";

import PotatoTuberMoth1 from "../assets/POTATODOC-PEST/Potato tuber moth- Phthorimaea operculella/WM-cross-section-of-potato-tuber-with-mines-of-the-larvae-of-the-potato-tuber-moth.jpg";
import PotatoTuberMoth2 from "../assets/POTATODOC-PEST/Potato tuber moth- Phthorimaea operculella/WM-damage-symptom-of-potato-tuber-moth-larvae-under-storage-conditions-on-seed-potato.jpg";
import PotatoTuberMoth3 from "../assets/POTATODOC-PEST/Potato tuber moth- Phthorimaea operculella/WM-Larval-Stage-of-Potato-tuber-moth.jpg";
import PotatoTuberMoth4 from "../assets/POTATODOC-PEST/Potato tuber moth- Phthorimaea operculella/WM-Potato-Tuber-moth-larval-damage-symptom-on-potato-leaves.jpg";
import PotatoTuberMoth5 from "../assets/POTATODOC-PEST/Potato tuber moth- Phthorimaea operculella/WM-Potato-Tuber-moth.jpg";
import PotatoTuberMoth6 from "../assets/POTATODOC-PEST/Potato tuber moth- Phthorimaea operculella/WM-Pupal-Stage-of-Potato-Tuber-moth.jpg";

export default function pestManagement() {
  return (
    <div>
      <div className="container pb-5">
        <div className="pest-title">Pest Management</div>
        <div className="row">
          <div className="col-md-4">
            <div className="pest-content-left ">
              <img src={Pest} alt="pest" className="pest-image" />
            </div>
          </div>
          <div className="col">
            <div className="pest-content-right">
              <div className="pest-text">
                pest management in PotatoDoc involves the effective
                identification, prevention, and treatment of potato leaf pests.
                The application uses image processing and analysis techniques to
                identify the pest affecting potato plants based on visual
                symptoms. Once the pest is identified, PotatoDoc provides
                detailed information about the specific pest, including its
                causes, symptoms, and potential impact on the plants.
              </div>
            </div>
          </div>
        </div>
        <div className="pest-details-container">
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#leafMiner"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Leaf miner - Liriomyza huidobrensis
              </button>
              <div className="collapse" id="leafMiner">
                <div className="card card-body">
                  <div className="pest-description">
                    Become serious pest during the dry period Damage symptoms
                    Adult punchers leave for both feeding and oviposition. This
                    may cause a spotted appearance on foliage. Larvae make
                    irregular mine and result drying and withering of leaves.
                    Damage potato plants succumb to secondary infection by late
                    blight.
                  </div>
                  <div className="pest-sample-image pt-4">
                    <div className="d-flex justify-content-center">
                      <div className="col-md-4">
                        <img
                          src={LeafMiner1}
                          alt="1"
                          width="400px"
                          height="400px"
                          className="rounded-3"
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={LeafMiner2}
                          alt="1"
                          width="400px"
                          height="400px"
                          className="rounded-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <ul>
                        <li>
                          Regular field inspection Yellow colour sticky trap
                          Covering
                        </li>
                      </ul>
                      <ul>
                        <li>
                          crops with suitable material prevent mitigating flies
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Removal of other host plants surrounds the crop field
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Removal and distraction of infected plant material
                          Augment
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Augment ecto-parasitoid <span>Diglyphus isaea</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Encourage naturally found parasitoids{" "}
                          <span>Hemiptarsenus semibiclavas and Opius spp</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Azadiractin 1% EC at the rate of 16ml/16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Abamectin 18g/l EC at the rate of 9.6 ml/16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Neem seed water extract at the rate of 640g/16 l of
                          water
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
