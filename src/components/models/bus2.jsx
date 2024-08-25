import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bus2(props) {
  const { nodes, materials } = useGLTF("/models/bus2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_ToeiBus_0.geometry}
        material={materials.ToeiBus}
        position={[0, 89.694, -50.332]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/models/bus2.glb");
