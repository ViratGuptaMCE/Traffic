import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Bike2(props) {
  const ref = useRef();
  let rotation;
  if (props.direction == "bottom") {
    rotation = [0, 0, 0];
  } else if (props.direction == "left") {
    rotation = [0, Math.PI /2, 0];
  } else if (props.direction == "up") {
    rotation = [0, -Math.PI, 0];
  } else {
    rotation = [0, -Math.PI/2, 0];
  }

  function changePosition() {
    if (!props.signal) return;
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
    ref.current.position.y = -16;
    changePosition();
  });
  const { nodes, materials } = useGLTF("/models/bike3.glb");
  return (
    <group scale={5} {...props} rotation={rotation} ref={ref} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Core_Core_0.geometry}
          material={materials.Core}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extras_Extras_0.geometry}
          material={materials.Extras}
          position={[0.206, 3.064, -57.031]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/bike3.glb");