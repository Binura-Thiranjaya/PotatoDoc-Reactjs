import React from "react";
import "./css/footer.css";
export default function footer() {
  return (
    <div className=" pt-4" style={{ color: "black" }}>
      <div className="footer">
        <div className="row">
          <div className="col">
            <div className="footer-title text-center">About Us</div>
            <p className="about-us-title pl-2">
              This application is a final year research project developed with
              the aim of providing an efficient and user-friendly solution for
              disease detection and management in potato crops. Our team has
              dedicated significant effort and expertise to create a
              comprehensive system that utilizes advanced technologies to
              improve the agricultural practices of potato growers.{" "}
            </p>
          </div>

          <div className="col">
            <div className="footer-title text-center">Services</div>
            <div className="service">
              <ul>
                <li>
                  <a href="/info">Information</a>
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <a href="/disease">Disease Management </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/pest">Pest Management</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col">
            <div className="footer-title text-center">Inquiry</div>
            <div className="">
              <ul>
                <div className="col-9">
                  <label>Email</label>
                  <input
                    type="email"
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Email"
                  />
                </div>
              </ul>
              <ul>
                <div className=" col-9">
                  <label>Message</label>
                  <textarea
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Message"
                  />
                </div>
              </ul>
              <ul>
                <button type="submit" className="btn btn-danger">Send</button>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="pt-3 pb-1 bg-danger">
        <p className="text-center h6">
          Project By Binura Thiranjaya @2023 Version: 1.4
        </p>
      </div>
    </div>
  );
}
