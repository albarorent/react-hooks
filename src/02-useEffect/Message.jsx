import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
  //   useEffect(() => {
  //     console.log("se monta");
  //     return () => {
  //       console.log("se desmonta");
  //     };
  //   }, []);

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
    //   const coords = { x, y };
      setCoords({x,y})
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <h1>Usuario ya existe: {JSON.stringify(coords)}</h1>;
};
