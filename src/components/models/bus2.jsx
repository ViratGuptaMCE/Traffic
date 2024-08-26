import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Bus2(props) {
  const { nodes, materials } = useGLTF("/models/bus2.glb");
  const ref = useRef();
  let rotation;
  if (props.direction == "bottom") {
    rotation = [0, -Math.PI / 2, 0];
  } else if (props.direction == "left") {
    rotation = [0, Math.PI, 0];
  } else if (props.direction == "up") {
    rotation = [0, Math.PI / 2, 0];
  } else {
    rotation = [0, 0, 0];
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
    ref.current.position.y = -17.5;
  });
  return (
    <group {...props} rotation={rotation} scale={0.03} ref={ref} dispose={null}>
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
