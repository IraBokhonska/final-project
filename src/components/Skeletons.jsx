import React from "react";
import LoaderIcon from "react-loader-icon";

function Skeletons() {
  return [...new Array(12)].map((_, index) => (
    <div key={index} className="gallery__skeleton gallery__photo">
      <div className="text">Loading... Please, wait a few seconds</div>
      <LoaderIcon type={"spokes"} />
    </div>
  ));
}

export default Skeletons;
