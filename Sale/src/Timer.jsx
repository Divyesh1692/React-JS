import React, { useEffect, useState } from "react";

const Timer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = endTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [endTime]);

  return (
    <div className="timer mb-2">
      {Object.keys(timeLeft).length > 0 ? (
        <p>
          Time left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      ) : (
        <p>Sale ended!</p>
      )}
    </div>
  );
};

export default Timer;
