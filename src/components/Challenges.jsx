import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

const challengesList = [
  { title: "Easy", time: "1" },
  { title: "Medium", time: "5" },
  { title: "Hard", time: "10" },
  { title: "Insane", time: "15" },
  { title: "OMG", time: "20" },
  { title: "No Way", time: "25" },
  { title: "Impossible", time: "30" },
  { title: "No Hope", time: "35" },
];

function Challenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const timerRef = useRef(null);
  const resultModalRef = useRef();

  function handelStartChallenge() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
    setTimerIsActive(true);
  }

  function handleStopChallenge() {
    clearInterval(timerRef.current);
    setTimerIsActive(false);
    resultModalRef.current.showModal();
  }

  function handleResetChallenge() {
    clearInterval(timerRef.current);
    setTimeRemaining(targetTime * 1000);
    setTimerIsActive(false);
  }

  if (timeRemaining <= 0 && timerIsActive) {
    clearInterval(timerRef.current);
    setTimerIsActive(false);
    resultModalRef.current.showModal();
  }

  return (
    <>
      <ResultModal
        ref={resultModalRef}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleResetChallenge}
      />
      <main
        className="flex flex-col justify-around items-center gap-4 w-10/12
            p-4 rounded-lg mx-auto text-white bg-dark-cyan-3 shadow-md shadow-dark-cyan-4/50 "
      >
        <h1 className="text-lg font-bold tracking-widest font-poppins ">
          {title}
        </h1>
        <p className="text-md font-semibold tracking-wide font-poppins border-2 border-dark-cyan-7 px-3 py-1 rounded-md">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button
          className="px-3 py-1 bg-dark-cyan-8 rounded-md shadow-2xl 
      hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={timerIsActive ? handleStopChallenge : handelStartChallenge}
        >
          {timerIsActive ? "Stop Challenge" : "Start Challenge"}
        </button>
        <p
          className={`text-sm text-gray-200 ${timerIsActive ? "text-md animate-ping" : ""}`}
        >
          Timer {timerIsActive ? "active" : "inactive"}
        </p>
      </main>
    </>
  );
}

function Challenges() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {challengesList.map((challenge, index) => (
        <Challenge
          key={challenge.title + index}
          title={challenge.title}
          targetTime={challenge.time}
        />
      ))}
    </main>
  );
}

export default Challenges;
