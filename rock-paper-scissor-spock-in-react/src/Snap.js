import { useEffect, useState } from "react";
import "./Game.css";

const Snap = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice =
      selection[Math.floor(Math.random() * selection.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "✂️📰":
        case "🧱✂️":
        case "📰🧱":
        case "🦎📰":
        case "🖖✂️":
        case "🧱🦎":
        case "📰🖖":
        case "🖖🧱":
        case "✂️🦎":
        case "🦎🖖":
          setResult("YOU WON! 🎉");
          break;
        case "📰✂️":
        case "✂️🧱":
        case "🧱📰":
        case "📰🦎":
        case "✂️🖖":
        case "🦎🧱":
        case "🖖📰":
        case "🧱🖖":
        case "🦎✂️":
        case "🖖🦎":
          setResult("YOU LOSE! 👎 ");
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setResult("ITS A DRAW! 💥 ");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <>
      <h1>Rock Paper Scissors lizard Spock</h1>
      <div>
        <div className="container">
          <div className="section">
            <div className="info">
              <h3>You</h3>
            </div>
            <div className="show">{userChoice}</div>
          </div>

          <div className="section">
            <div className="info">
              <h3>Computer</h3>
            </div>
            <div className="show computer">{computerChoice}</div>
          </div>
        </div>
        <h2>{result} </h2>

        <div className="attack-btn">
          {selection.map((choice, index) => (
            <button key={index} onClick={() => handleClick(choice)}>
              <div className="emojiSize">{choice}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Snap;
