import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // the setInterval function we called in useEffect is still running in the background, and updating state every second.
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
