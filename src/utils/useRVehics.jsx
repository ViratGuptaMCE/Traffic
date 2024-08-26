import { useState, useEffect } from "react";
import { RIGHT } from "../constants";

const useRVehicles = () => {
  const [rightVehicles, setRightVehicles]= useState([]);

  useEffect(() => {
    const addVehicle = () => {
      const randType = Math.floor(Math.random() * 3 + 1);
      const randomVehicle = {
        id: Date.now(),
        vehicType: randType,
        position: RIGHT.position[Math.floor(Math.random() + 0.5)],
        direction: "right",
      };
      setRightVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
      timeoutId = setTimeout(addVehicle, 2000);
    }
    let timeoutId = setTimeout(addVehicle, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return [rightVehicles , setRightVehicles];
};

export default useRVehicles;