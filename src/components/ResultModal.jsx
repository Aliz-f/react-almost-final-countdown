import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, timeRemaining, onReset }) {
  const userLost = timeRemaining <= 0;
  const score = Math.round(
    (1 - Math.abs(timeRemaining) / (targetTime * 1000)) * 100,
  );

  return createPortal(
    <dialog
      ref={ref}
      onClose={onReset}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:backdrop-blur-2xl bg-white text-dark-cyan-8 rounded-lg p-4 shadow-md shadow-dark-cyan-4/50 min-w-xs md:min-w-lg text-center text-lg"
    >
      <p className="text-md font-bold mb-2">
        {" "}
        {userLost ? "You LOST!" : `Your Score is: ${score}`}{" "}
      </p>
      <p className="text-sm mb-2">
        The target time is{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p className="text-sm mb-2">
        The time remaining is{" "}
        <strong>
          {(timeRemaining / 1000).toFixed(2)} second
          {timeRemaining / 1000 > 1 ? "s" : ""}
        </strong>
      </p>
      <form method="dialog">
        <button
          className="self-end px-3 py-1 text-white bg-dark-cyan-8 rounded-md shadow-2xl hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 ease-in-out"
          type="submit"
        >
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
}

export default ResultModal;
