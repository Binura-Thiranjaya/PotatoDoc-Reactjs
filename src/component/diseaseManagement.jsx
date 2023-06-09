import React, { useEffect, useState } from "react";
import "./css/disease.css";
import Disease from "../assets/image/disease.png";

export default function DiseaseManagement() {
  //fetch data
  const [data, setData] = useState([]);
  //use async on page load
  window.onload = async () => {
    const DiseaseAPI = process.env.REACT_APP_BACKEND_API;
    const response = await fetch(DiseaseAPI+"disease");
    const data = await response.json();
    setData(data);
  };


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const DiseaseAPI = process.env.REACT_APP_BACKEND_API;
  //     const response = await fetch(DiseaseAPI+"disease");
  //     const data = await response.json();
  //     setData(data);
  //     console.log(data);
  //     alert("Data Loaded");
  //   };
  //   fetchData();
  // }, []);
  


  // useEffect(() => {
  //   fetch("http://localhost:3000/disease")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div>
      <div className="container pb-5">
        <div className="disease-title">Disease Management</div>
        <div className="row">
          <div className="col-md-4">
            <div className="disease-content-left ">
              <img src={Disease} alt="potato" className="disease-image" />
            </div>
          </div>
          <div className="col">
            <div className="disease-content-right">
              <div className="disease-text">
                Disease management in PotatoDoc involves the effective
                identification, prevention, and treatment of potato leaf
                diseases. The application uses image processing and analysis
                techniques to identify the disease affecting potato plants based
                on visual symptoms. Once the disease is identified, PotatoDoc
                provides detailed information about the specific disease,
                including its causes, symptoms, and potential impact on the
                plants.
              </div>
            </div>
          </div>
        </div>
        <div className="details pt-4">
          {data.map((item, index) => {
            return (
              <div className="row" key={index}>
                <p>
                  <button
                    className="btn btn-primary btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${item.subname}`}
                    aria-expanded="false"
                    aria-controls={item.subname}
                  >
                    {item.id}. {item.name}
                  </button>
                </p>
                <div className="collapse" id={item.subname}>
                  <div className="card card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-title">Treatments</div>
                        {item.treatments.map((treatment, index) => {
                          return (
                            <div className="disease_data" key={index}>
                              <ul>
                                <li>{treatment.treatment}</li>
                              </ul>
                            </div>
                          );
                        })}
                        <div className="card-title">Fungicide</div>
                        {item.fungicides.map((fungicide, index) => {
                          return (
                            <div className="disease_data" key={index}>
                              <ul>
                                <li>{fungicide.fungicide}</li>
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      <div className="col-md-3">
                        <div className="card-title">Images</div>
                        {item.images.map((image, index) => {
                          return (
                            <div className="pb-1" key={index}>
                              <div className="">
                                <iframe
                                  src={image.image}
                                  width="300px"
                                  height="200px"
                                  frameBorder="0"
                                  scrolling="no"
                                  className="rounded-3"
                                  title={item.name}
                                ></iframe>
                                {/* <img
                                  src={require(`../assets/POTATODOC-DISEASE/${item.name}/${image.image}`)}
                                  alt="Disease"
                                  width="200px"
                                  height="200px"
                                  className="rounded-3"
                                /> */}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
