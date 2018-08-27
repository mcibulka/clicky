import React from "react";

const Header = () => (
  <div className="columns">
    <div className="column has-text-centered">
      <div>
        <p className="title is-3">Clicky Game</p>
      </div>
    </div>
    <div className="column has-text-centered">
      <div>
        <p className="subtitle is-3">Click an image to begin!</p>
      </div>
    </div>
    <div className="column has-text-centered">
      <div>
        <p className="subtitle is-3">Score: 0 | Top Score: 0</p>
      </div>
    </div>
  </div>
);

export default Header;
