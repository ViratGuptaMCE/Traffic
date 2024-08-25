// useVehicles.js
import { useState, useEffect } from "react";
import { RIGHT } from "../constants";

const useVehicles = () => {
  const [rightVehicles, setRightVehicles]= useState([]);
  // console.log('UseVehicles')

  useEffect(() => {
    const addVehicle = () => {
      const randType = Math.floor(Math.random() * 3 + 1);
      const randomVehicle = {
        id: Date.now(),
        vehicType: randType,
        position: RIGHT.position[Math.floor(Math.random() + 0.5)],
        direction: "right",
        visible: true,
      };
      setRightVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
      // console.log("Vehicle ",randType ,randomVehicle.position);
      timeoutId = setTimeout(addVehicle, 2000);
    }
    let timeoutId = setTimeout(addVehicle, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // let newVehicles = rightVehicles.filter((vehicle) => vehicle.visible);
  //     setRightVehicles((prevVehicles) =>
  //       prevVehicles.filter((vehicle) => {
  //         return (vehicle.visible)
  //       })
  //     );
  //     // console.log(rightVehicles)
  //   }, 500);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return [rightVehicles , setRightVehicles];
};

export default useVehicles;