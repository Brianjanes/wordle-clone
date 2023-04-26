import React, { useState, useEffect } from "react";

const Keyboard = ({ usedKeys }) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="keyBoard">
      {alphabet.map((l, i) => {
        const color = usedKeys[l];
        return (
          <div key={i} className={color}>
            {l}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
