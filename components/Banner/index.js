import React from "react";

const Banner = ({title, des, img}) => {
  return (
    <div className="banner">
         <img src={img} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>{title}</h1>
        {/* <p>{des}</p> */}
      </div>
    </div>
  );
};

export default Banner;
