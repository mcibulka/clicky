import React from "react";

class Instructions extends React.Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column has-text-centered">
          <div>
            <p className="title is-2">Clicky Game!</p>
            <p className="subtitle is-3">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
