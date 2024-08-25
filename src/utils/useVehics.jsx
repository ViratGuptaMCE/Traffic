// useVehicles.js
import { useState, useEffect } from "react";
import { RIGHT } from "../constants";

const useVehicles = () => {
  const [rightVehicles, setRightVehicles] = useState([]);
  // console.log('UseVehicles')

  useEffect(() => {
    const addVehicle = () => {
      const randType = Math.floor(Math.random() * 3 + 1);
      const randomVehicle = {
        vehicType: randType,
        position: RIGHT.position[Math.floor(Math.random() + 0.5)],
        direction : 'right',
      };
      setRightVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
      console.log("Vehicle ",randType ,randomVehicle.position);
      timeoutId = setTimeout(addVehicle, 2000);
    }
    let timeoutId = setTimeout(addVehicle, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return rightVehicles;
};

export default useVehicles;