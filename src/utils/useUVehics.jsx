import { useState, useEffect } from "react";
import { UP } from "../constants";

const useUVehicles = () => {
  const [upVehicles, setUpVehicles] = useState([]);

  useEffect(() => {
    const addVehicle = () => {
      const randType = Math.floor(Math.random() * 3 + 1);
      const randomVehicle = {
        id: Date.now(),
        vehicType: randType,
        position: UP.position[Math.floor(Math.random() + 0.5)],
        direction: "up",
      };
      setUpVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
      timeoutId = setTimeout(addVehicle, 2000);
    };
    let timeoutId = setTimeout(addVehicle, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return [upVehicles, setUpVehicles];
};

export default useUVehicles;
