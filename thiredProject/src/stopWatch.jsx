import { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const [isRunning, setIsRuninng] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start_stop() {
    setIsRuninng(!isRunning)
  }
  function reset() {
    setElapsedTime(0);
    setIsRuninng(false);
  }
  function formatTime() {
    // let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    //  hours + ":" +

    return minutes + ":" + seconds + ":" + milliseconds;
  }

  return (
    <>
      <div className="stopwatch">
        <div className="display-time">{formatTime()}</div>
        <div className="controls-stopwatch">
          <button onClick={start_stop} className="start btn1">
            start_stop
          </button>
          <button onClick={reset} className="reset btn1">
            reset
          </button>
        </div>
      </div>
    </>
  );
}
