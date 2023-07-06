import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import "./css/potatodoc.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Potatodoc() {

  useEffect(() => {
    AOS.init();
  }, [])
  const [selectedImage, setSelectedImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [treatmentLoader, setTreatmentLoader] = useState(false);
  //Store the Treatments
  const [treatments, setTreatments] = useState(null);
  //Store the Prediction
  const [predictionTagName, setPredictionTagName] = useState(null);
  const [predictionProbability, setPredictionProbability] = useState(null);

  const uploadBtn = document.getElementById("upload-btn");
  const fileInput = document.getElementById("image-upload");

  if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
      fileInput.click();
    });
  }
  const handleTreatments = async (value) => {
    console.log(value);
    try {
      setLoader(true);
      const number = getTreatmentNumber(value);
      if (number === 0) {
        setLoader(false);
        setTreatmentLoader(false);
        return;
      }
      const backendUrl = process.env.REACT_APP_BACKEND_API;
      const treatmentUrl = `${backendUrl}disease/${number}`;
      const response = await fetch(treatmentUrl);
      const data = await response.json();
      setTreatments(data);
      console.log(data);
      setLoader(false);
      setTreatmentLoader(true);
    } catch (error) {
      console.log(error);
      setLoader(false);
      setTreatmentLoader(false);
    }
  };
  const handlePredictUsingURL = async (value) => {
    const predictionUrl = process.env.REACT_APP_PREDICTION_URL_URL;
    const predictionKey = process.env.REACT_APP_PREDICTION_KEY;
    const contentType = "application/json";
    const BodyURL = { Url: `${value}` };

    try {
      setLoader(true);
      const response = await fetch(predictionUrl, {
        method: "POST",
        headers: {
          "Prediction-Key": predictionKey,
          "Content-Type": contentType,
        },
        body: JSON.stringify(BodyURL),
      });
      const data = await response.json();
      console.log(data);
      const prediction = data.predictions.reduce(
        (acc, curr) => {
          return acc.probability > curr.probability ? acc : curr;
        },
        { probability: -1 }
      );

      setPredictionTagName(prediction.tagName);
      setPredictionProbability(prediction.probability);
      // Display the prediction
      console.log(
        `The image is most likely "${
          prediction.tagName
        }" with a probability of ${Math.round(prediction.probability * 100)}%.`
      );

      handleTreatments(prediction.tagName);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const handlePredictUsingFile = async (value) => {
    const predictionKey = process.env.REACT_APP_PREDICTION_KEY;
    const predictionUrl = process.env.REACT_APP_PREDICTION_IMAGE_URL; //process.env.REACT_APP_PREDICTION_IMAGE_URL
    const contentType = "application/octet-stream";
    console.log(value);

    const bodyFile = value;

    try {
      setLoader(true);
      const response = await fetch(predictionUrl, {
        method: "POST",
        headers: {
          "Prediction-Key": predictionKey,
          "Content-Type": contentType,
        },
        body: bodyFile,
      });
      const data = await response.json();
      console.log(data);

      const prediction = data.predictions.reduce(
        (acc, curr) => {
          return acc.probability > curr.probability ? acc : curr;
        },
        { probability: -1 }
      );

      setPredictionTagName(prediction.tagName);
      setPredictionProbability(prediction.probability);
      // Display the prediction
      console.log(
        `The image is most likely "${
          prediction.tagName
        }" with a probability of ${Math.round(prediction.probability * 100)}%.`
      );
      handleTreatments(prediction.tagName);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  const getTreatmentNumber = (value) => {
    switch (value) {
      case "Late Blight":
        return 1;
      case "Early Blight":
        return 2;
      default:
        return 0;
    }
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        Swal.fire({
          title: "Image Preview",
          imageUrl: reader.result,
          imageAlt: "Selected Image",
          showCancelButton: true,
          confirmButtonText: "Save",
          cancelButtonText: "Cancel",
          imageWidth: 400,
          imageHeight: 200,
        }).then((result) => {
          if (result.isConfirmed) {
            setSelectedImage(reader.result);
            handlePredictUsingFile(file);
          } else {
            setSelectedImage(null);
          }
        });
      };
    } else {
      setSelectedImage(null);
    }
  };
  const handleUrlInputChange = () => {
    Swal.fire({
      title: "Enter Image URL",
      input: "text",
      inputPlaceholder: "https://example.com/image.jpg",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a URL";
        } else if (
          !value.match(/\.(jpeg|jpg|gif|png)$/) &&
          !value.startsWith("data:image/")
        ) {
          return "Please enter a valid image URL";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectedImage(result.value);
        handlePredictUsingURL(result.value);
      } else {
        setSelectedImage(null);
      }
    });
  };
  const handleRemoveButtonClick = () => {
    setSelectedImage(null);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapsibleRef = useRef(null);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    // Smoothly scroll to the top of the collapsible content when it's expanded
    if (collapsibleRef.current && isCollapsed) {
      collapsibleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container" id="image-engine" name="image-engine" data-aos="zoom-in-up">
      <div className="engine">
        <div className="engine-title">PotatoDoc | AI</div>
        <div className="engine-subtitle">Potato Leaf Disease Detection</div>
        {loader ? (
          <div id="loader">
            <div id="loader-content">
              <div className="loader-spinner"></div>
              <div className="loader-text">Loading...</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="d-grid justify-content-center pt-3 pb-3 ">
              <div className="image-upload  rounded d-flex justify-content-center align-items-center flex-column">
                <label
                  htmlFor="image-upload"
                  id="upload-icon"
                  className="btn btn-danger mt-1"
                >
                  <i className="fas fa-cloud-upload-alt" id="upload-btn"></i>
                  Upload Image
                </label>
                <label
                  htmlFor="image-upload-url"
                  id="upload-url"
                  className="mt-2"
                  onClick={handleUrlInputChange}
                >
                  <i className="fas fa-link" id="upload-url"></i>
                  Upload URL
                </label>

                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
                <div className="prediction">
                  {predictionTagName && predictionProbability ? (
                    <div className="prediction-result">
                      <div className="prediction-probability">
                        {Math.round(predictionProbability * 100)}%
                      </div>
                      <div className="prediction-tag-name p-2">
                        {predictionTagName}
                      </div>
                    </div>
                  ) : (
                    <div className="prediction-placeholder">
                      No prediction yet.
                    </div>
                  )}
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              {treatmentLoader ? (
                // print hello world
                <div className="treatments">
                  <div className="treatments-heading">Treatments</div>
                  <div className="treatments-content">
                    <p className="treatments-title">{treatments.name}</p>

                    <div className="treatments-details">
                      <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                          <div className="treatments-image">
                            <img
                              src={treatments.images[0].image}
                              alt="Treatment"
                              className="img-fluid"
                              width="400px"
                              style={{ height: "400px" }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="treatments-image">
                            <img
                              src={treatments.images[1].image}
                              alt="Treatment"
                              className="img-fluid"
                              width="400px"
                              style={{ height: "400px" }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-center pt-3">
                        <div className="treatment-description w-75">
                          <p className="">{treatments.description}</p>
                        </div>
                      </div>

                      <div className="d-flex pt-3 pb-2">
                        <div className="col-md-6">
                          <div className="treatment-method">
                            <p className="treatments-subtopic">
                              1. Treatment Methods
                            </p>
                            {treatments.treatments.map((treatment, index) => {
                              return (
                                <div className="treatment-list" key={index}>
                                  <ul>
                                    <li>
                                      <div className="treatment-title">
                                        {treatment.treatment}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="treatment-fungicides">
                            <p className="treatments-subtopic">2. Fungicides</p>
                            {treatments.fungicides.map((fungicide, index) => {
                              return (
                                <div className="treatment-list" key={index}>
                                  <ul>
                                    <li>
                                      <div className="treatment-title">
                                        {fungicide.fungicide}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="image-view pb-3 pt-5">
              <div className="d-flex justify-content-center">
                <button
                  onClick={handleToggleCollapse}
                  className="btn btn-secondary"
                >
                  {isCollapsed ? (
                    <div>
                      <i className="fas fa-plus-circle"></i> View
                    </div>
                  ) : (
                    <>
                      <i className="fas fa-minus-circle"></i> Hide
                    </>
                  )}
                </button>
              </div>

              {!isCollapsed && (
                <div
                  ref={collapsibleRef}
                  className="d-flex justify-content-center"
                >
                  <div className="image-preview mt-2">
                    {selectedImage ? (
                      <div className="position-relative">
                        <img
                          src={selectedImage}
                          alt="Preview"
                          className="img-fluid"
                          width="200px"
                        />
                        <button
                          className="btn btn-danger btn-sm position-absolute top-0 end-0"
                          onClick={handleRemoveButtonClick}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="text-muted text-center">
                        No image selected
                      </div>
                    )}
                  </div>{" "}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* if treatmentLoader is true just show if not nothing display */}
    </div>
  );
}
