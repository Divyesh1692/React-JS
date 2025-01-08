import { useEffect, useState } from "react";

const Timer = ({ h, m, s }) => {
  let [hour, setHour] = useState(h);
  let [minute, setMinute] = useState(m);
  let [second, setSecond] = useState(s);

  useEffect(() => {
    let id;

    id = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 0) {
          if (minute > 0 || hour > 0) {
            setMinute((prevMinute) => {
              if (prevMinute === 0) {
                setHour((prevHour) => prevHour - 1);
                return 59;
              }
              return prevMinute - 1;
            });
            return 59;
          } else {
            setFlag(false);
            return 0;
          }
        }
        return prevSecond - 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [second]);

  // const divide = () => {
  //   if (time > 0) {
  //     const totalSeconds = time * 60;
  //     const hours = Math.floor(totalSeconds / 3600);
  //     const minutes = Math.floor((totalSeconds % 3600) / 60);
  //     const seconds = totalSeconds % 60;

  //     setHour(hours);
  //     setMinute(minutes);
  //     setSecond(seconds);
  //   }
  // };

  return (
    <div className="flex justify-center items-center p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <p className="text-2xl font-semibold">
        Sale:
        <span className="mx-1">{hour.toString().padStart(2, "0")}</span>:
        <span className="mx-1">{minute.toString().padStart(2, "0")}</span>:
        <span className="mx-1">{second.toString().padStart(2, "0")}</span>
      </p>
    </div>
  );
};

export default Timer;
