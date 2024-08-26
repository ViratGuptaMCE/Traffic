import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Car3(props) {
  const ref = useRef();
  let rotation;
  if (props.direction == "bottom") {
    rotation = [0, 0, 0];
  } else if (props.direction == "left") {
    rotation = [0, -Math.PI /2, 0];
  } else if (props.direction == "up") {
    rotation = [0, Math.PI , 0];
  } else {
    rotation = [0, Math.PI / 2, 0];
  }

  function changePosition() {
    if (props.direction == "bottom") {
      ref.current.position.z += props.speed;
      if (Math.abs(ref.current.position.z) > 500) {
        props.removeVehicle(props.uid);
      }
    } else if (props.direction == "left") {
      ref.current.position.x += props.speed;
      if (Math.abs(ref.current.position.x) > 500) {
        props.removeVehicle(props.uid);
      }
    } else if (props.direction == "up") {
      if (Math.abs(ref.current.position.z) > 500) {
        props.removeVehicle(props.uid);
      }
      ref.current.position.z -= props.speed;
    } else {
      if (Math.abs(ref.current.position.x) > 500) {
        props.removeVehicle(props.uid);
      }
      ref.current.position.x -= props.speed;
    }
  }
  
  useFrame(() => {
    changePosition();
    // ref.current.position.z += props.speed;
  });
  const { nodes, materials } = useGLTF("/models/car3.glb");
  return (
    <group {...props} rotation={rotation} scale={0.04} ref={ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cb_car_export_cb_car_0.geometry}
            material={materials.cb_car}
            rotation={[-Math.PI, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/car3.glb");
