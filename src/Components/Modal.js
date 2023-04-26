import React from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isCorrect, turn, solution, handleCloseModal }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <FiX className="exit-icon" onClick={(e) => handleCloseModal(e)} />
          <h1>You've won!</h1>
          <p className="solution">{solution}</p>
          <p>You've found the solution in {turn} guesses!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <FiX className="exit-icon" onClick={(e) => handleCloseModal(e)} />
          <h1>You've lost!</h1>
          <p className="solution">The solution was {solution}</p>
          <p>Better luck next time.</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
