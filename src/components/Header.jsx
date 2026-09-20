import { useState, useRef } from "react";

function Header() {
  const nameInpputRef = useRef("");
  const [name, setName] = useState(null);

  function handleSubmit(e) {
    setName(nameInpputRef.current.value);
    nameInpputRef.current.value = "";
  }

  return (
    <main className="flex flex-col gap-2 items-center justify-center text-center">
      <h1 className="uppercase text-xl md:text-4xl text-light-cyan-1 font-akaya tracking-widest">
        The <span className="text-white">Almost</span> Final Countdown
      </h1>
      <p className="text-light-cyan-1 tracking-wide text-xs md:text-base max-w-xs md:max-w-lg">
        Stop the timer once you estimate that time is (almost) up
      </p>
      <p className="text-light-cyan-1">
        {`Welcome ${name ?? "Unknown Entity!"}`}
      </p>
      <div className="flex gap-2 items-center justify-center">
        <input
          ref={nameInpputRef}
          type="text"
          placeholder="Enter Name"
          className="bg-dark-cyan-3 
                  text-light-cyan-1
                  placeholder:text-light-cyan-1
                  placeholder:tracking-wide
                  placeholder:text-xs
                  md:placeholder:text-base
                  px-2 py-1
                  w-48 md:w-64
                  rounded-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-light-cyan-1
                  focus:ring-offset-2
                  focus:ring-offset-dark-cyan-3"
        ></input>
        <button
          className="bg-light-cyan-1
                    text-dark-cyan-3
                    hover:bg-light-cyan-2
                    active:bg-light-cyan-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-light-cyan-1
                    focus:ring-offset-2
                    focus:ring-offset-dark-cyan-3
                    px-4 py-1
                    hover:cursor-pointer
                    rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
}

export default Header;
