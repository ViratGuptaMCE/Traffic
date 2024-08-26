import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Car(props) {
  const ref = useRef();
  let rotation;
  if (props.direction == "bottom") {
    rotation = [0, 0, 0];
  } else if (props.direction == "left") {
    rotation = [0, Math.PI /2, 0];
  } else if (props.direction == "up") {
    rotation = [0, -Math.PI, 0];
  } else {
    rotation = [0, -Math.PI /2, 0];
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
    changePosition();
    // ref.current.position.z += props.speed;
  });
  const { nodes, materials } = useGLTF("/models/car.glb");
  return (
    <group {...props} rotation={rotation} scale={1.5} ref={ref} dispose={null}>
      <group scale={[1, 0.848, 5.952]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group position={[-2.234, -0.625, 3.816]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[2.234, -0.531, -3.075]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[2.234, -0.625, 3.816]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[-2.234, -0.531, -3.075]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials["Material.007"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/car.glb");
