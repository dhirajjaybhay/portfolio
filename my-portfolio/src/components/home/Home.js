import React from "react";
import Header from "../header/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeComponent">
      <Header />
      <div>
        <div className="home row d-flex justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12 profileSummury">
            <div className="profileHeadline">
              <h1>
                Dhiraj is a{" "}
                <span className="forntendTag">Front-end Web Developer</span>
              </h1>
              <p className="">
                Development is my passion, my purpose. I thrive on learning and
                pushing boundaries in IT. Excellence is my goal.
              </p>
            </div>
            <div className="contctMeBtn">
              <button>
                <a href="/">Contact Me !!</a>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center profile-img">
            {/* <img className='imgDj' src="" alt="555" /> */}
            <div className="bannerImg">{/* <h1>cnjjndjndnj</h1> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
