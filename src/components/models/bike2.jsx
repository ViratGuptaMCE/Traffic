import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bike2(props) {
  const { nodes, materials } = useGLTF("/models/bike3.glb");
  return (
    <group {...props} dispose={null}>
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