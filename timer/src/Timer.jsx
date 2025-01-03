import { useEffect, useState } from "react";

const Timer = () => {
  let [flag, setFlag] = useState(false);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  let [time, setTime] = useState(0);

  const reset = () => {
    setFlag(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setTime(0);
  };

  let id;
  useEffect(() => {
    id = setInterval(() => {
      if (flag) {
        if (hour == 0 && minute == 0 && second == 0) {
          setFlag(false);
        } else {
          setSecond((second) => second - 1);
          if (second == 0 && minute > 0) {
            setSecond(59);
            setMinute((minute) => minute - 1);
          }
          if (minute == 0 && hour > 0) {
            setMinute(59);
            setHour((hour) => hour - 1);
          }
        }
      }
    }, 10);

    return () => {
      clearInterval(id);
    };
  });

  const divide = () => {
    if (time > 0) {
      let newTime = time / 60;
      setHour(Math.floor(newTime));
      setMinute(Math.floor((newTime - Math.floor(newTime)) * 60 - 1));
      setSecond(59);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Timer</h1>
      <h2 className="text-5xl font-mono text-blue-600 mb-6">
        {String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")}:
        {String(second).padStart(2, "0")}
      </h2>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFlag(!flag)}
          className={`px-6 py-2 text-white rounded-lg shadow-md transition ${
            flag
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {flag ? "Stop" : "Start"}
        </button>
        <button
          onClick={divide}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition"
        >
          Set Time
        </button>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col items-center">
        <label
          htmlFor="time-input"
          className="text-gray-700 font-semibold mb-2"
        >
          Set Time (In Minutes)
        </label>
        <input
          id="time-input"
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Timer;
