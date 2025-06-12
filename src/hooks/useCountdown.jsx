import { useState } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countdown = () => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = countDate - now;

    const sec = 1000;
    const min = sec * 60;
    const hr = min * 60;
    const dy = hr * 24;

    const d = Math.floor(interval / dy);
    const h = Math.floor((interval % dy) / hr);
    const m = Math.floor((interval % hr) / min);
    const s = Math.floor((interval % min) / sec);

    setDay(d);
    setHour(h);
    setMinute(m);
    setSecond(s);
  };

  setInterval(countdown, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;
