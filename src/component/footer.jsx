import React from "react";
import "./css/footer.css";
export default function footer() {
  return (
    <div className="container pt-4 pb-5" style={{ color: "black" }}>
      <div className="footer">
        <div className="row">
        <div className="col">
        <div className="footer-title text-center">About Us</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat, voluptates aperiam suscipit soluta veritatis pariatur molestias cumque quaerat id excepturi culpa, libero impedit omnis itaque sit reprehenderit! Ipsum, soluta?
          </p>
        </div>

          <div className="col">
            <div className="footer-title text-center">Services</div>
            <div className="">
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
          <div className="col">
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
          </div>
        </div>
        
      </div>
      <div className="pt-3 pb-1 bg-danger">
          <p className="text-center h6">Project By Binura Thiranjaya @2023 Version: 1.1</p>
        </div>
    </div>
    
  );
}
