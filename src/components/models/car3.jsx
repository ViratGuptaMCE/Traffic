import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Car3(props) {
  const ref = useRef();
  useFrame(() => {
    ref.current.position.z += props.speed;
  });
  const { nodes, materials } = useGLTF("/models/car3.glb");
  return (
    <group {...props} ref={ref} dispose={null}>
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
