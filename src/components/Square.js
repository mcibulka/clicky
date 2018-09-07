import React from "react";
import bmo from "../images/BMO.png"

class Square extends React.Component {
  render() {
    return (
      <div>
        <figure className="image is-square">
          <img src={bmo} alt=""></img>
        </figure>
      </div>
    );
  }
}

export default Square;
