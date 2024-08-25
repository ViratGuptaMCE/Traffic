// import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Car } from "./components/models/car";
import { Car3 } from "./components/models/car3";
import { Car4 } from "./components/models/car4";
import Loader from "./components/Loader";
import { City } from "./components/city";
import { Bus2 } from "./components/models/bus2";
import { Bus3 } from "./components/models/bus3";
import { Bike } from "./components/models/bike";
import { Bike2 } from "./components/models/bike2";
import { RIGHT, LEFT, UP, DOWN } from "./constants";
import useVehicles from "./utils/useVehics";


function filterList() {
  RIGHT.VehicLane1 = RIGHT.VehicLane1.filter((vehic) => (Math.abs(vehic.position.x) <= 500));
  LEFT.VehicLane1 = LEFT.VehicLane1.filter(
    (vehic) => Math.abs(vehic.position.x) <= 500
  );
  UP.VehicLane1 = UP.VehicLane1.filter(
    (vehic) => Math.abs(vehic.position.z) <= 500
  );
  DOWN.VehicLane1 = DOWN.VehicLane1.filter(
    (vehic) => Math.abs(vehic.position.z) <= 500
  );
}

function Randomise() {
  
  const interval = setInterval(() => {
    const randomVehicle = {
      position: [-10, 0, Math.random() * 10 - 5],
      speed: Math.random() * 0.02 + 0.01,
    };
    setVehicles((prevVehicles) => [...prevVehicles, randomVehicle]);
  }, 2000);
  filterList();
  return () => clearInterval(interval);
}

function App() {
  const [vehicles, setVehicles] = useVehicles();
  
   const removeVehicle = (id) => {
     setVehicles((prevVehicles) =>
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
            <Car position={[24, -18, -120]} speed={0.3} />
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
            <Bike2
              position={[5, -15, -120]}
              rotation={[0, Math.PI, 0]}
              speed={-0.5}
            />
            <Bike2 position={[35, -15, 30]} speed={0.5} />
            {vehicles.map((vehicle, index) => {
              if(vehicle.vehicType === 1){
                return (
                  <Bus3
                    key={vehicle.id}
                    removeVehicle={removeVehicle}
                    position={vehicle.position}
                    vehic={vehicle}
                    rotation={[0, -Math.PI / 2, 0]}
                    speed={-0.2}
                  />
                );
              } else if(vehicle.vehicType === 2) {
                return (
                  <Bike
                    key={vehicle.id}
                    removeVehicle={removeVehicle}
                    vehic={vehicle}
                    position={vehicle.position}
                    speed={-0.5}
                  />
                );
              } else {
                return (
                  <Bike
                    key={vehicle.id}
                    removeVehicle={removeVehicle}
                    direction={vehicle.direction}
                    vehic={vehicle}
                    position={vehicle.position}
                    speed={-0.5}
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
