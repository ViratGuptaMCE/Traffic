import { useState, useEffect } from "react";
import { LEFT } from "../constants";

const useLVehicles = () => {
  const [leftVehicles, setLeftVehicles] = useState([]);

  useEffect(() => {
    const addVehicle = () => {
      const randType = Math.floor(Math.random() * 3 + 1);
      const randomVehicle = {
        id: Date.now(),
        vehicType: randType,
        position: LEFT.position[Math.floor(Math.random() + 0.5)],
        direction: "left",
      };
      setLeftVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
      timeoutId = setTimeout(addVehicle, 2000);
    };
    let timeoutId = setTimeout(addVehicle, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return [leftVehicles, setLeftVehicles];
};

export default useLVehicles;
