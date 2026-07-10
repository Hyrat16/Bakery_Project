import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function useClock(clockFormat: string) {
  const [currentTime, setcurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formattedTime = format(new Date(), clockFormat, {
        locale: ptBR,
      });
      setcurrentTime(formattedTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [clockFormat]);

  return currentTime;
}
