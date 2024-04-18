import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Dice } from "./components";
import "./App.css";

const App: React.FC<any> = () => {
  const [dice, setDice] = useState(allNewDice());
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  };
  const holdDice = (id: string) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
  const diceElements = dice.map((die, index) => (
    <Dice key={String(index)} dice={die} holdDice={() => holdDice(die.id)} />
  ));
  return (
    <main className="App">
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
};

export default App;
