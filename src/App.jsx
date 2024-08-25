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



function App() {
  return (
    <div className="App h-[100vh]">
      <header className="App-header h-[100vh]">
        <Canvas
          className={`w-full h-screen bg-transparent
          }`}
        >
          <Suspense fallback={<Loader />}>
            <City scale={0.04} position={[300, -20, 250]} />
            <Car scale={1.5} position={[24, -18, -120]} />
            <Car3
              scale={0.04}
              position={[35, -19, -120]}
              rotation={[0, Math.PI, 0]}
            />
            <Car4 scale={6} position={[-5, -19, -220]} />
            <Bus2
              scale={0.03}
              position={[-60, -18, -60]}
              rotation={[0, Math.PI, 0]}
            />
            <Bus3 scale={3} position={[35, -18, -220]} />
            <Bike scale={7} position={[60, -18, -20]} />
            <Bike
              scale={7}
              position={[-20, -18, -50]}
              rotation={[0, Math.PI, 0]}
            />
            <Bike scale={7} position={[-60, -18, -20]} />

            <ambientLight intensity={0} />
            <directionalLight />
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
