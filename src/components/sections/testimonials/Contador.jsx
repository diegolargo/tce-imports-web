import {  useState, useEffect } from 'react'
export function useContador(inicio, fin, velocidad, incremento) {
    const [contador, setContador] = useState(inicio);
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        if (contador < fin) {
          setContador(contador + incremento);
        } else {
          clearInterval(intervalo);
        }
      }, velocidad); // Ajusta este valor para controlar la velocidad de la animación
  
      return () => clearInterval(intervalo); // Limpia el intervalo cuando el componente se desmonta
    }, [contador]);
  
    return contador;
}
  