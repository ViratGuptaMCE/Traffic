import { useState, useEffect } from "react";
import { DOWN } from "../constants";

const useDVehicles = () => {
  const [downVehicles, setDownVehicles] = useState([]);

  useEffect(() => {
    const addVehicle = () => {
      const randType = Math.floor(Math.random() * 3 + 1);
      const randomVehicle = {
        id: Date.now(),
        vehicType: randType,
        position: DOWN.position[Math.floor(Math.random() + 0.5)],
        direction: "bottom",
      };
      setDownVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
      timeoutId = setTimeout(addVehicle, 2000);
    };
    let timeoutId = setTimeout(addVehicle, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return [downVehicles, setDownVehicles];
};

export default useDVehicles;
