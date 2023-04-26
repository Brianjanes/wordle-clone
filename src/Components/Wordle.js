import React, { useEffect, useState } from "react";
import useWordle from "../Hooks/useWordle";
import Keyboard from "./Keyboard";
import Grid from "./Grid";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (e) => {
    e.preventDefault();
    window.location.reload(true);
    setShowModal(!showModal);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
    if (turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);
  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Wordle;
