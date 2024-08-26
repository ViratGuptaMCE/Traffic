import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from 'react-three-fiber';

export function Car4(props) {
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
  // useFrame(() => {
  //   changePosition();
  //   // ref.current.position.z += props.speed;
  // });
  const { nodes, materials} = useGLTF('/models/car4.glb')
  return (
    <group {...props} scale={6} rotation={rotation} ref={ref} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-47.67, 22.674, -76.438]}
          rotation={[0, -1.571, 0]}
          scale={[11.207, 11.207, 16.411]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK004_Disc_0.geometry}
            material={materials.Disc}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK004_Brembo_0.geometry}
            material={materials.Brembo}
          />
        </group>
        <group
          position={[-49.248, 22.654, -76.438]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[17.671, 17.671, 25.877]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_RIMS_0.geometry}
            material={materials.RIMS}
          />
        </group>
        <group
          position={[47.271, 22.674, -76.438]}
          rotation={[0, 1.571, 0]}
          scale={[11.207, 11.207, 16.411]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK002_Disc_0.geometry}
            material={materials.Disc}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK002_Brembo_0.geometry}
            material={materials.Brembo}
          />
        </group>
        <group
          position={[48.848, 22.654, -76.438]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[17.671, 17.671, 25.877]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_RIMS_0.geometry}
            material={materials.RIMS}
          />
        </group>
        <group
          position={[-52.561, 22.674, 118.262]}
          rotation={[0, -1.571, 0]}
          scale={[11.207, 11.207, 16.411]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK001_Disc_0.geometry}
            material={materials.Disc}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK001_Brembo_0.geometry}
            material={materials.Brembo}
          />
        </group>
        <group
          position={[-54.138, 22.654, 118.262]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[17.671, 17.671, 25.877]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_RIMS_0.geometry}
            material={materials.RIMS}
          />
        </group>
        <group
          position={[52.469, 22.674, 118.262]}
          rotation={[0, 1.571, 0]}
          scale={[11.207, 11.207, 16.411]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK003_Disc_0.geometry}
            material={materials.Disc}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBK003_Brembo_0.geometry}
            material={materials.Brembo}
          />
        </group>
        <group
          position={[54.047, 22.654, 118.262]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[17.671, 17.671, 25.877]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_RIMS_0.geometry}
            material={materials.RIMS}
          />
        </group>
        <group
          position={[0, 42.088, -168.426]}
          rotation={[0.012, 0, 0]}
          scale={374.812}
        >
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_41.geometry}
            material={materials.body}
            skeleton={nodes.Object_41.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_42.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Object_42.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_43.geometry}
            material={materials.lamp}
            skeleton={nodes.Object_43.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_44.geometry}
            material={materials.lamp_2}
            skeleton={nodes.Object_44.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_45.geometry}
            material={materials.glass}
            skeleton={nodes.Object_45.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_46.geometry}
            material={materials.BAWAH}
            skeleton={nodes.Object_46.skeleton}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tire004_Tire_0.geometry}
          material={materials.Tire}
          position={[-49.265, 22.722, -76.478]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[19.927, 19.927, 29.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tire002_Tire_0.geometry}
          material={materials.Tire}
          position={[48.866, 22.722, -76.399]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[19.927, 19.927, 29.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tire001_Tire_0.geometry}
          material={materials.Tire}
          position={[-49.45, 22.722, 118.222]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[19.927, 19.927, 29.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tire003_Tire_0.geometry}
          material={materials.Tire}
          position={[49.358, 22.722, 118.302]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[19.927, 19.927, 29.181]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/car4.glb')