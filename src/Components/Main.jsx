import React from "react";
import backgroundimg from '../assets/background-img.png';
import downarrow from '../assets/Arrow2.svg';
import scrolldown from '../assets/Arrow.svg';
import './styles/main.css';

export const Main = () => {
    return (
      <div className="main-comp">
        <img
          src={backgroundimg}
          alt="background-image"
          className="background-image"
        />
        <div className="content">
          <input type="text" placeholder="Search" className="search-bar" />
          <h1>WEBSITE DEVELOPMENT AGENCY</h1>
          <button className="know-more-btn">Know more</button>
          <p className="tagline">
            CHEAPLY <br /> QUICKLY <br /> HIGH QUALITY
          </p>
        </div>
        <div className="scroll-down">
          <img src={scrolldown} alt="Scroll Down to Explore" className="scroll-image"/>
          <div className="scroll-arrow">
            <img src={downarrow} alt="Arrow" className="scroll-down-arrow" />
          </div>
        </div>
      </div>
    );
};