import React from "react";
import Square from "./Square";

const GameBoard = () => (
  <div>
    <div className="columns is-centered">
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
      <div className="column is-2">
        <Square />
      </div>
    </div>
  </div>
);

export default GameBoard;
