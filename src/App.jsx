import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Loader from "./components/Loader";
import { City } from "./components/city";
import Cars from "./components/models/Cars";
import Buses from "./components/models/Buses";
import Bikes from "./components/models/bikes";
import useRVehicles from "./utils/useRVehics";
import useLVehicles from "./utils/useLVehics";
import useUVehicles from "./utils/useUVehics";
import useDVehicles from "./utils/useDVehics";



function App() {
  const [Rvehicles, setRVehicles] = useRVehicles();
  const [Lvehicles, setLVehicles] = useLVehicles();
  const [Uvehicles, setUVehicles] = useUVehicles();
  const [Dvehicles, setDVehicles] = useDVehicles();
  // console.log(vehicles);
  
   const removeRVehicle = (id) => {
     setRVehicles((prevVehicles) =>
       prevVehicles.filter((vehicle) => vehicle.id !== id)
     );
   };
   const removeLVehicle = (id) => {
     setLVehicles((prevVehicles) =>
       prevVehicles.filter((vehicle) => vehicle.id !== id)
     );
   };
   const removeUVehicle = (id) => {
     setUVehicles((prevVehicles) =>
       prevVehicles.filter((vehicle) => vehicle.id !== id)
     );
   };
   const removeDVehicle = (id) => {
     setDVehicles((prevVehicles) =>
       prevVehicles.filter((vehicle) => vehicle.id !== id)
     );
   };
  
  return (
    <div className="App h-[100vh]">
      <header className="App-header h-[100vh]">
        <Canvas
          className={`w-full h-screen bg-transparent
          }`}
        >
          <Suspense fallback={<Loader />}>
            <City scale={0.04} position={[300, -20, 250]} />
            {/* <Car position={[24, -18, -120]} speed={0.3} />
            <Car3
              position={[35, -19, -120]}
              rotation={[0, Math.PI, 0]}
              speed={0.3}
            />
            <Car3
              position={[24, -19, -20]}
              rotation={[0, Math.PI, 0]}
              speed={0.3}
            />
            <Car3
              position={[-4, -19, 40]}
              speed={-0.3}
              // rotation={[0, Math.PI, 0]}
            />

            <Car4 position={[-5, -19, -220]} speed={-0.3} />
            <Bus2
              position={[-60, -18, -58]}
              rotation={[0, Math.PI, 0]}
              speed={0.2}
            />

            <Bus3  position={[35, -18, -220]} speed={0} />
            <Bus3
              position={[85, -18, -30]}
              rotation={[0, -Math.PI / 2, 0]}
              speed={-0.2}
            />
            {/* <Bike position={[60, -18, -18]} speed={-0.5} />
            <Bike
              position={[-20, -18, -55]}
              speed={0.5}
              rotation={[0, Math.PI, 0]}
            />
            <Bike position={[-60, -18, -20]} speed={-0.5} /> */}
            {/* <Bike2
              position={[5, -15, -120]}
              rotation={[0, Math.PI, 0]}
              speed={-0.5}
            />
            <Bike2 position={[35, -15, 30]} speed={0.5} />  */}
            {Rvehicles.map((vehicle) => {
              if (vehicle.vehicType === 1) {
                return (
                  <Bikes
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeRVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else if (vehicle.vehicType === 2) {
                return (
                  <Cars
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeRVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else {
                return (
                  <Buses
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeRVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              }
            })}
            {Lvehicles.map((vehicle) => {
              if (vehicle.vehicType === 1) {
                return (
                  <Bikes
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeLVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else if (vehicle.vehicType === 2) {
                return (
                  <Cars
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeLVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else {
                return (
                  <Buses
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeLVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              }
            })}
            {Uvehicles.map((vehicle) => {
              if (vehicle.vehicType === 1) {
                return (
                  <Bikes
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeUVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else if (vehicle.vehicType === 2) {
                return (
                  <Cars
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeUVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else {
                return (
                  <Buses
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeUVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              }
            })}
            {Dvehicles.map((vehicle) => {
              if (vehicle.vehicType === 1) {
                return (
                  <Bikes
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeDVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else if (vehicle.vehicType === 2) {
                return (
                  <Cars
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeDVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              } else {
                return (
                  <Buses
                    key={vehicle.id}
                    uid={vehicle.id}
                    removeVehicle={removeDVehicle}
                    direction={vehicle.direction}
                    position={vehicle.position}
                  />
                );
              }
            })}

            <OrbitControls />
            <Environment
              files="/hdris/sky.hdr"
              background
              backgroundBlurriness={0}
              backgroundRotation={[0, Math.PI / 2, 0]}
            />
          </Suspense>
        </Canvas>
      </header>
    </div>
  );
}

export default App;
