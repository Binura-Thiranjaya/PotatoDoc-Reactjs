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
        <div className="pest-details-container d-flex">
          {/* 1 */}
          <div className="col-6">
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
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={LeafMiner1}
                            alt="1"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-6">
                          <img
                            src={LeafMiner2}
                            alt="1"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <ul>
                        <li>Regular field inspection</li>
                      </ul>

                      <ul>
                        <li>Yellow colour sticky trap</li>
                      </ul>

                      <ul>
                        <li>
                          Covering crops with suitable material prevent
                          mitigating flies
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
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Augment ecto-parasitoid{" "}
                          <span className="special-word">Diglyphus isaea</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Encourage naturally found parasitoids{" "}
                          <span className="special-word">
                            Hemiptarsenus semibiclavas and Opius spp
                          </span>
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
          {/* 2 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#potatoTuberMoth"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Potato tuber moth - Phthorimaea operculella
              </button>
              <div className="collapse" id="potatoTuberMoth">
                <div className="card card-body">
                  <div className="pest-description">
                    Most economic damage occurs to potato tubers in storage
                    conditions <b>Damage Symptoms</b> <u>In Field</u> Larvae
                    destroy the crop by mining leaves or boring in to petioles
                    and terminal shoots. This cause wilting and reduce
                    photosynthesis.After tuberization the larvae enter into the
                    tubers and feed on them. Infested tubers are further exposed
                    to secondary infections which lead to rotting.{" "}
                    <u>In stores</u> Adult moth infests tubers by depositing
                    eggs near the tuber eyes. Larvae cause irregular galleries
                    and tunnels deep inside or just below the skin of the
                    tubers. Tunnel can be detected by excreta appearing black at
                    the entrance. Larval damage results both weight and quality
                    loss of potato tubers.
                  </div>
                  <div className="pest-sample-image pt-4">
                    <div className="d-flex justify-content-center">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={PotatoTuberMoth1}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={PotatoTuberMoth2}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={PotatoTuberMoth3}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={PotatoTuberMoth4}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={PotatoTuberMoth5}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={PotatoTuberMoth6}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <li className="pest-subtitle">
                        <u>In field</u>
                      </li>

                      <ul>
                        <li>Regular monitoring</li>
                      </ul>

                      <ul>
                        <li>
                          Healthy seed tubers to be planted slightly deeper
                        </li>
                      </ul>

                      <ul>
                        <li>Proper earthing up to avoid exposing tubers</li>
                      </ul>
                      <ul>
                        <li>Crop rotation</li>
                      </ul>
                      <ul>
                        <li>Discourage growing of alternate host plants </li>
                      </ul>
                      <ul>
                        <li>
                          Proper irrigation to prevent soil cracks and soil
                          spaces are
                        </li>
                      </ul>
                      <ul>
                        <li>Removing all tubers from fields at harvesting</li>
                      </ul>
                      <ul>
                        <li>
                          Destruction of residues and maintain proper field
                          sanitation
                        </li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Chlorantraniliprole20%+Thiamethoxam 20%WG at the rate
                          of 5g per 16l of water
                        </li>
                      </ul>
                      <li className="pest-subtitle">
                        <u>In stores</u>
                      </li>
                      <ul>
                        <li>
                          Reject seed lots from fields or storage that had been
                          infested with PTM
                        </li>
                      </ul>
                      <ul>
                        <li>Maintain proper Storage sanitation</li>
                      </ul>
                      <ul>
                        <li>
                          Tubers must be undamaged and free from soil or other
                          residues
                        </li>
                      </ul>
                      <ul>
                        <li>Tubers should be kept at cold store</li>
                      </ul>
                      <ul>
                        <li>
                          Application of seed treatments- Thiocyclam (Hydrogen
                          Oxalate) 50% SP-40g/100Kg of seeds
                        </li>
                      </ul>
                      <li className="pest-subtitle">
                        <u>In field</u>
                      </li>
                      <ul>
                        <li>
                          Pirimiphose methyl 500g/l EC at the rate of 64 ml per
                          16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Acetamiprid 200g/l SP at the rate of 16 ml per 16 l of
                          water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Novaluron 100g/l EC at the rate of 16 ml per 16 l of
                          water
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          {/* 3 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#blackCut"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Black cut worm - Agrotis spp
              </button>
              <div className="collapse" id="blackCut">
                <div className="card card-body">
                  <div className="pest-description">
                    <b>Damage symptoms</b> Habitually they are nocturnal. Early
                    instars make round holes in leaves. Later, the shoots are
                    damaged close to the ground, often cut the whole plant at
                    the base, during emergence. Cut several plants in a single
                    night and pulling the plant stem belowground. Cut plants
                    show wilting during day time. Formed unsightly holes in the
                    potato tubers.
                  </div>
                  <div className="pest-sample-image pt-4">
                    <div className="d-flex justify-content-center">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={BlackCut1}
                            alt="Black cut worm - Agrotis spp"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={BlackCut2}
                            alt="Black cut worm - Agrotis spp"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={BlackCut3}
                            alt="Black cut worm - Agrotis spp"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={BlackCut4}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src={BlackCut5}
                            alt="Potato tuber moth - Phthorimaea operculella"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>

                      <ul>
                        <li>Regular monitoring</li>
                      </ul>

                      <ul>
                        <li>Hand collecting and destroying </li>
                      </ul>

                      <ul>
                        <li>Weed management</li>
                      </ul>
                      <ul>
                        <li>Proper field sanitation</li>
                      </ul>
                      <ul>
                        <li>
                          Plough the soil deeply to bring the larvae and pupa to
                          the surface of the soil
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Proper irrigation to prevent soil cracks and soil
                          spaces are
                        </li>
                      </ul>
                      <ul>
                        <li>Removing all tubers from fields at harvesting</li>
                      </ul>
                      <ul>
                        <li>
                          Encourage predatory birds to preying the worms during
                          tillage operation
                        </li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Profenophos 500 g/l EC at the rate of 32 ml per 16 l
                          of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Etofenprox 100g/l EC at the rate of 24 ml per 16 l of
                          water
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          {/* 4 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#goldenCyst"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Golden cyst nematode - Globodera rostochiensis
              </button>
              <div className="collapse" id="goldenCyst">
                <div className="card card-body">
                  <div className="pest-description">
                    <b>Damage symptoms</b> Nematode remove nutrient from the
                    roots and diminish supply of nutrient and water to the stems
                    and leaves by injuring the roots and stunning their growth.
                    Moderately infested plants normally have reduced tuber size.
                    Heavily infested plants develop poorly and show yellowing of
                    plants. Temperature become wormer, wilting of plants occurs.
                  </div>

                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <p>There are three basic challenges in managing PCN.</p>
                      <ul>
                        <li>Keeping potato land free of PCN</li>
                      </ul>

                      <ul>
                        <li>
                          Preventing lightly infested land from becoming heavily
                          infested
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Bring high populations back to manageable levels
                        </li>
                      </ul>
                      <p>
                        Follow the instruction below if the land is not infested
                      </p>
                      <ul>
                        <li>Use certified seeds from DOA</li>
                      </ul>

                      <ul>
                        <li>
                          Avoid use of seed potatoes, soil and agriculture
                          implements from infested land
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Treat the seed with 1% Sodium Hypochlorite solution
                          for 25-30 minutes before planting
                        </li>
                      </ul>
                      <ul>
                        <li>Soil testing before planting</li>
                      </ul>
                      <ul>
                        <li>Use interval between potato crops</li>
                      </ul>
                      <ul>
                        <li>
                          Preventing lightly infested land from becoming heavily
                          infested
                        </li>
                      </ul>
                      <ul>
                        <li>Crop rotation</li>
                      </ul>
                      <ul>
                        <li>Fallowing </li>
                      </ul>

                      <ul>
                        <li>
                          Avoid cultivation potato or solanaceous crops two or
                          three seasons
                        </li>
                      </ul>
                      <ul>
                        <li>Use of resistant varieties</li>
                      </ul>
                      <ul>
                        <li>
                          Repeated sampling and determine the whether management
                          is working
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Bring high populations back to manageable levels
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Apply Calcium hypochlorite at the rate of 70Kg/ha
                        </li>
                      </ul>
                      <p>
                        Other than that educated farmers on the followings are
                        more important
                      </p>
                      <ul>
                        <li>Importance of PCN as a potato pest</li>
                      </ul>
                      <ul>
                        <li>Easy method to detect PCN</li>
                      </ul>
                      <ul>
                        <li>Control methods</li>
                      </ul>
                      <ul>
                        <li>Prevent spread of PCN to new land</li>
                      </ul>
                    </div>
                    {/* <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Profenophos 500 g/l EC at the rate of 32 ml per 16 l
                          of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Etofenprox 100g/l EC at the rate of 24 ml per 16 l of
                          water
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </p>
          </div>
          {/* 5 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#potatoAphid"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Potato aphid - Myzus persicae
              </button>
              <div className="collapse" id="potatoAphid">
                <div className="card card-body">
                  <div className="pest-description">
                    Aphids are vectors of several viruses. Direct feeding damage
                    is not significant. <b>Damage symptoms</b> They occur in
                    large numbers on the tender shoots and lower leaf surfaces
                    and suck the plant sap. Severe aphid infestations cause
                    young leaves to curl and become deformed. Produce honeydew,
                    which leads to the development of sooty mould. Transmit
                    virus diseases.
                  </div>
                  <div className="pest-sample-image pt-4">
                    <div className="d-flex justify-content-center">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={PotatoAphid1}
                            alt="Black cut worm - Agrotis spp"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                        <div className="col-md-6">
                          <img
                            src={PotatoAphid2}
                            alt="Black cut worm - Agrotis spp"
                            width="300px"
                            height="300px"
                            className="rounded-3 pb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>

                      <ul>
                        <li>
                          Monitoring aphids’ population visually or placing
                          yellow color water trap.
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Weed control in crop fields to reduce the availability
                          of alternate host plants
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Protect the predators and parasitoids by avoiding the
                          use of broad-spectrum pesticides unnecessarily
                        </li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Thiamethoxam 25% WG at the rate of 5g per 16 l of
                          water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Imidacloprid 70%WG at the rate of 2g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Thiocyclam (Hydrogen Oxalate) 50% SP at the rate of
                          40g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Chlorantraniliprole 20% + Thiamethoxam 20% WG at the
                          rate of 5g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Buprofezin 25% SC at the rate of 45ml per 16 l of
                          water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Azadirachtine 5%EC at the rate of 16ml per 16 l of
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
          <div className="col-6">
          {/* 6 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#thrip"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Thrip - Thrips palmi and Thrips spp
              </button>
              <div className="collapse" id="thrip">
                <div className="card card-body">
                  <div className="pest-description">
                    <b>Damage symptoms</b><br/>Thrips feed on potato leaves by
                    rasping plant cells and sucking out its contents. Feeding on
                    leaves caused deformities of the crop. Commonly found on the
                    underside of leaves. Distinctive silvery or bronze scarring
                    on the surfaces of the stems or leaves where the thrips
                    feed.
                  </div>

                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <ul>
                        <li>
                          Weed control in crop fields to reduce the availability
                          of alternate host plants
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Protect the predators and parasitoids by avoiding the
                          use of broad-spectrum pesticides unnecessarily
                        </li>
                      </ul>

                      <ul>
                        <li>Planting at correct time</li>
                      </ul>

                      <ul>
                        <li>Crop rotation</li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Thiamethoxam 25% WG at the rate of 5g per 16 l of
                          water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Imidacloprid 70%WG at the rate of 2g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Thiocyclam (Hydrogen Oxalate) 50% SP at the rate of
                          40g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Chlorantraniliprole 20% + Thiamethoxam 20% WG at the
                          rate of 5g per 16 l of water
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Buprofezin 25% SC at the rate of 45ml per 16 l of
                          water
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Azadirachtine 5%EC at the rate of 16ml per 16 l of
                          water
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          {/* 7 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#whiteFly"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Whitefly - Bemisia tabaci
              </button>
              <div className="collapse" id="whiteFly">
                <div className="card card-body">
                  <div className="pest-description">
                    <b>Damage symptoms</b><br/>
                    The adults and nymphs suck the plant
                    sap and reduce the vigor of the plant. In severe
                    infestations, the leaves turn yellow and drop off. When the
                    populations are high they secrete large quantities of
                    honeydew, which favors the growth of sooty mould on leaf
                    surfaces and reduces the photosynthetic efficiency of the
                    plants.
                  </div>

                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <ul>
                        <li>
                          Maintain a high standard of weed control in crop
                          fields to reduce the availability of alternate host
                          plants
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Use yellow/blue sticky traps (Hang the traps slightly
                          above or at the canopy level for better trapping)
                        </li>
                      </ul>

                      <ul>
                        <li>Spraying water – useful in dislodging adults</li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Thiocyclam (Hydrogen Oxalate) 50% SP at the rate of
                          40g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Chlorantraniliprole 20% + Thiamethoxam 20% WG at the
                          rate of 5g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Buprofezin 25% SC at the rate of 45ml per 16 l of
                          water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Azadirachtine 5%EC at the rate of 16ml per 16 l of
                          water
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          {/* 8 */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#whiteGrub"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                White grub - Melolontha spp/Anomala spp
              </button>
              <div className="collapse" id="whiteGrub">
                <div className="card card-body">
                  <div className="pest-description">
                    These pests are recorded as occasional pest.
                    <br />
                    <b>Damage symptoms</b><br/>
                    The larvae damage roots, stems and
                    tubers and reduce the market quality of tubers.
                  </div>

                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <ul>
                        <li>
                          Plough the soil deeply to bring grubs to the surface
                        </li>
                      </ul>

                      <ul>
                        <li>
                          Encourage predatory birds to preying the worms during
                          tillage operation
                        </li>
                      </ul>

                      <ul>
                        <li>Crop rotation</li>
                      </ul>
                      <ul>
                        <li>Increase field sanitation</li>
                      </ul>
                      <ul>
                        <li>
                          Application of properly decomposed FYM(Farm Yard
                          Manure) /compost at recommended dose
                        </li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                          Thiocyclam (Hydrogen Oxalate) 50% SP at the rate of
                          40g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Chlorantraniliprole 20% + Thiamethoxam 20% WG at the
                          rate of 5g per 16 l of water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Buprofezin 25% SC at the rate of 45ml per 16 l of
                          water
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Azadirachtine 5%EC at the rate of 16ml per 16 l of
                          water
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          {/* 9 Slug and Snail */}
          <div className="row">
            <p>
              <button
                className="btn btn-primary btn-block"
                type="button"
                data-toggle="collapse"
                data-target="#slugNsnail"
                aria-expanded="false"
                aria-controls="pestManagement"
              >
                Slug and Snail
              </button>
              <div className="collapse" id="slugNsnail">
                <div className="card card-body">
                  <div className="pest-description"> 
                    <b>Damage symptoms</b>
                    <br/>
                    Create irregular holes with smooth edges on leaves and destroy tender leaves. Damage is common during rainy weather or an abundance of weed growth.
                  </div>

                  <div className="d-grid justify-items-center pt-4">
                    <div className="pest-management">
                      <div className="pest-subtopic">Management</div>
                      <ul>
                        <li>
                        Eliminate place where can shelter during day time
                        </li>
                      </ul>

                      <ul>
                        <li>
                        Regular practice of trapping and removing snails

                        </li>
                      </ul>

                      <ul>
                        <li>
                        Removing debris and manage field sanitations
                          </li>
                      </ul>
                      <ul>
                        <li>
                        Proper weed management
                          </li>
                      </ul>
                      <ul>
                        <li>
                        Regular field infection and hand collection

                        </li>
                      </ul>

                      <ul>
                        <li>
                        Encourage predatory birds by enhancing natural habitats
                        </li>
                      </ul>
                    </div>
                    <div className="pest-chemical-control">
                      <div className="pest-subtopic">Chemical Control</div>
                      <ul>
                        <li>
                         Metaldehyde 5% GR at the rate of 10-40 Kg/ha
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
    </div>
  );
}
