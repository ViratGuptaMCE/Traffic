import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from 'react-three-fiber';

export function Bike(props) {
  const ref = useRef();
  let rotation ;
  if (props.direction == 'bottom') {
    rotation= [0,-Math.PI/2,0]
  } else if (props.direction == "left") {
    rotation= [0,Math.PI , 0]
  } else if (props.direction == "up") {
    rotation = [0, Math.PI/2, 0];
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
      // console.log(ref.current.position.x);
      // console.log('If ',props.key);
      if (Math.abs(ref.current.position.x) > 500) {
        props.removeVehicle(props.uid);
      }
      ref.current.position.x -= props.speed;
    }
  }

  useFrame(() => {
    changePosition();
    ref.current.position.y = -20;
  });

  const { nodes, materials } = useGLTF("/models/bike2.glb");
  return (
    <group scale={7} {...props} ref={ref} rotation={rotation} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021_brown_skin_0.geometry}
              material={materials.brown_skin}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder046_black_paint_0.geometry}
              material={materials.black_paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder046_chrome_0.geometry}
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_bak_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_greu_plastic_0.geometry}
              material={materials.greu_plastic}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder108_diskl_0.geometry}
              material={materials.diskl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder108_black_paint_0.geometry}
              material={materials.black_paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder108_chrome_0.geometry}
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_black_paint_0.geometry}
              material={materials.black_paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_fara_0.geometry}
              material={materials.fara}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere003_chrome_0.geometry}
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder073_black_paint_0.geometry}
              material={materials.black_paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder073_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder079_chrome_0.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_metall_0.geometry}
              material={materials.metall}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034_chrome_0.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder058_chrome_0.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder059_black_plastic_0.geometry}
              material={materials.black_plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder060_black_plastic_0.geometry}
              material={materials.black_plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder078_chrome_0.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube035_metall_0.geometry}
              material={materials.metall}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder115_chrome_0.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder115_metall_0.geometry}
              material={materials.metall}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material004_0.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_Material004_0.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.benzobak_2LP_bak_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gorlo_bak_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.krihka_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.benzobak_2LP002_bak001_0.geometry}
            material={materials["bak.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.benzobak_2LP001_hild_0.geometry}
            material={materials.hild}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.benzobak_2LP003_hild_0.geometry}
            material={materials.hild}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.benzobak_2LP005_Material005_0.geometry}
            material={materials["Material.005"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder044_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_red_paint_0.geometry}
            material={materials.red_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_Material003_0.geometry}
            material={materials["Material.003"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder097_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder107_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_greu_plastic_0.geometry}
            material={materials.greu_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_greu_plastic_0.geometry}
            material={materials.greu_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_hild001_0.geometry}
            material={materials["hild.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder034_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_greu_plastic_0.geometry}
            material={materials.greu_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder037_greu_plastic_0.geometry}
            material={materials.greu_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder106_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder109_gold_paint_0.geometry}
            material={materials.gold_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_red_paint_0.geometry}
            material={materials.red_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder110_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder116_greu_plastic_0.geometry}
            material={materials.greu_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve004_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder041_brown_skin_0.geometry}
            material={materials.brown_skin}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040_brown_skin_0.geometry}
            material={materials.brown_skin}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder042_brown_skin_0.geometry}
            material={materials.brown_skin}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_red_paint_0.geometry}
            material={materials.red_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_red_paint_0.geometry}
            material={materials.red_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder064_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder065_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder066_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder067_bak_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder068_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder071_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder072_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve005_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve006_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve007_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve008_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder080_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder081_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_yelow_plastic_0.geometry}
            material={materials.yelow_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve009_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve010_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder085_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder088_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve011_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve012_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder101_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder103_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder105_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve013_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve014_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve015_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder043_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder094_gold_paint_0.geometry}
            material={materials.gold_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder095_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder096_gold_paint_0.geometry}
            material={materials.gold_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder114_black_paint_0.geometry}
            material={materials.black_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder098_greu_plastic_0.geometry}
            material={materials.greu_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder057_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve016__0.geometry}
            material={materials["BezierCurve.016__0"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044_metall_0.geometry}
            material={materials.metall}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_gold_paint_0.geometry}
            material={materials.gold_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_gold_paint_0.geometry}
            material={materials.gold_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_black_plastic_0.geometry}
            material={materials.black_plastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder089_new_black_0.geometry}
            material={materials.new_black}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder102_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder093_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder090_new_black_0.geometry}
            material={materials.new_black}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder092_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder113_red_paint_0.geometry}
            material={materials.red_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder112_red_paint_0.geometry}
            material={materials.red_paint}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder100_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_chrome_0.geometry}
            material={materials.chrome}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/bike2.glb')