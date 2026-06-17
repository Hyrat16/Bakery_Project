import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function useClock(formatRelogio: string) {
  const [horaAtual, setHoraAtual] = useState("");

  useEffect(() => {
    const atualizarHora = () => {
      const horaFormatada = format(new Date(), formatRelogio, {
        locale: ptBR,
      });
      setHoraAtual(horaFormatada);
    };

    atualizarHora();

    const intervalo = setInterval(atualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, [formatRelogio]);

  return horaAtual;
}
