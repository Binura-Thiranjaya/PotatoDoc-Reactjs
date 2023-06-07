import React, { useEffect, useState } from "react";
import "./css/disease.css";
import Disease from "../assets/image/disease.png";

export default function DiseaseManagement() {
  //fetch data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/disease")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data[7])
  // //print the name
  // const name = data.map((item) => {
  //   item = item.name;
  //   return item;
  // });
  // console.log(name);

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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto reiciendis totam, et quas aliquid voluptates
                accusantium, omnis excepturi assumenda aspernatur repellendus
                debitis veritatis, consequuntur nulla sint ea eius nostrum
                quibusdam.
              </div>
            </div>
          </div>
        </div>
        <div className="details pt-4">
          {/* map the data */}
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
                    <div className="">Treatments</div>
                    {item.treatments.map((treatment, index) => {
                      return (
                        <div className="" key={index}>
                          <ul>
                            <li>{treatment.treatment}</li>
                          </ul>
                        </div>
                      );
                    })}
                    <div className="">Fungicide</div>
                    {item.fungicides.map((fungicide, index) => {
                      return (
                        <div className="" key={index}>
                          <ul>
                            <li>{fungicide.fungicide}</li>
                          </ul>
                          </div>
                      );
                    })}
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
