import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Bike2(props) {
  const ref = useRef();
  useFrame(() => {
    ref.current.position.z += props.speed;
  });
  const { nodes, materials } = useGLTF("/models/bike3.glb");
  return (
    <group {...props} ref={ref} dispose={null}>
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