import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function City(props) {
  const { nodes, materials } = useGLTF('/models/small_city3D.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-21800, 0, -8650]}>
        <group position={[-1339.309, 4.84, -11.039]} scale={1.026}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface4_Paramount_0.geometry}
            material={materials.Paramount}
            position={[780.782, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface9_Paramount_0.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface10_Paramount_0.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface11_Paramount_0.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface12_Paramount_0.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube4_Paramount_0.geometry}
            material={materials.Paramount}
            position={[735.208, 1144.851, 622.109]}
            scale={[0.067, 0.142, 0.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube5_Paramount_0.geometry}
            material={materials.Paramount}
            position={[735.208, 588.031, 622.109]}
            scale={[0.067, 0.142, 0.2]}
          />
        </group>
        <group position={[1200, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube2_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[0, 170, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube6_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[0, 470, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube99_Paramount_0.geometry}
            material={materials.Paramount}
            position={[0, 470, -1200]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube101_Paramount_0.geometry}
            material={materials.Paramount}
            position={[0, 170, -1200]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2_Paramount_0.geometry}
          material={materials.Paramount}
          position={[0, 170, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-1339.387, -9.695, 0]}
          scale={1.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube6_Paramount_0.geometry}
          material={materials.Paramount}
          position={[0, 470, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface13_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-600, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface14_Paramount_0.geometry}
          material={materials.Paramount}
          position={[310.869, 0, 0]}
          scale={[0.281, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube7_Paramount_0.geometry}
          material={materials.Paramount}
          position={[65.716, 1340.691, -382.237]}
          scale={[0.292, 0.473, 0.292]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface15_Paramount_0.geometry}
          material={materials.Paramount}
          position={[37.451, 3.73, -170]}
          scale={[0.99, 0.747, 0.99]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface16_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-1300, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder1_Paramount_0.geometry}
          material={materials.Paramount}
          position={[431.713, 2047.189, -384.272]}
          scale={[0.08, 0.052, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane69_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-0.805, 1663.443, -202.433]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.086, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube98_Paramount_0.geometry}
          material={materials.Paramount}
          position={[0, 470, -1200]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube100_Paramount_0.geometry}
          material={materials.Paramount}
          position={[0, 170, -1200]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube102_Paramount_0.geometry}
          material={materials.Paramount}
          position={[0, 470, -1200]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface3_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-522.879, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface8_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface7_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane68_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[396.04, 1375.221, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane58_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-392.164, 770.325, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane57_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[2.323, 464.99, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane333_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[807.836, 770.325, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane334_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[1050, 464.99, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane332_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[396.04, 1071.371, -1205.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane71_Paramount1GLOW_0.geometry}
          material={materials.Paramount1GLOW}
          position={[-609.969, 1083.39, 435.924]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1.409, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane62_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-391.537, 1375.221, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane67_Paramount_0.geometry}
          material={materials.Paramount}
          position={[2.323, 1375.221, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane61_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-391.537, 1071.371, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane65_Paramount_0.geometry}
          material={materials.Paramount}
          position={[2.323, 1071.371, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane66_Paramount_0.geometry}
          material={materials.Paramount}
          position={[396.04, 1071.371, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane64_Paramount_0.geometry}
          material={materials.Paramount}
          position={[396.04, 770.325, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane63_Paramount_0.geometry}
          material={materials.Paramount}
          position={[2.323, 770.325, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane60_Paramount_0.geometry}
          material={materials.Paramount}
          position={[396.04, 464.99, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane56_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-391.537, 464.99, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane335_Paramount_0.geometry}
          material={materials.Paramount}
          position={[808.463, 464.99, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane336_Paramount_0.geometry}
          material={materials.Paramount}
          position={[1050, 770.325, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane337_Paramount_0.geometry}
          material={materials.Paramount}
          position={[1050, 1071.371, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane338_Paramount_0.geometry}
          material={materials.Paramount}
          position={[808.463, 1071.371, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane329_Paramount_0.geometry}
          material={materials.Paramount}
          position={[607.873, 1363.202, 435.924]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1.409, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane331_Paramount_0.geometry}
          material={materials.Paramount}
          position={[2.323, 1071.371, -1205.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane330_Paramount_0.geometry}
          material={materials.Paramount}
          position={[-391.537, 1071.371, -1205.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
      </group>
      <group position={[-16100, 0, -8961.313]}>
        <group position={[-1950, 0, 511.313]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface17_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1806.945, 471.688, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface18_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[2329.598, 471.688, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface19_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1806.945, 810.33, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface20_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[2329.598, 810.33, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface79_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-341.055, 80, 66.88]}
              scale={[1, 1, 0.749]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface128_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[4334.544, 331.179, 7.294]}
              scale={[9.64, 0.53, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube104_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, -1200]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube105_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, -1200]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube106_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, -1200]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface806_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1292.036, 810.33, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface807_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1292.036, 471.688, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube34_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 1280.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface131_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[1198.214, 1191.075, 10.631]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface132_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1544.793, 1191.075, 10.631]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface137_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[949.399, 1203.372, 983.321]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface138_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[949.399, 1203.372, 1148.159]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 290.105, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 460.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-518.431, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-441.714, 1191.733, -156.037]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -265.084]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[231.762, 1639.913, -475.047]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube103_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[0, 1280.745, -809.32]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder12_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -69.663]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface804_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-146.355, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface805_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[856.77, 1191.075, 10.631]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface808_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[949.399, 1203.372, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface809_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[949.399, 856.174, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface810_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[856.77, 1191.075, -1885.092]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface811_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[1198.214, 1191.075, -1885.092]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface812_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1544.793, 1191.075, -1885.092]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface813_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-163.608, 1203.372, 1148.159]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface814_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-163.608, 1203.372, 983.321]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface815_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[-163.608, 1203.372, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface816_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-163.608, 856.174, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
          </group>
          <group position={[74.013, 0, -60.345]} scale={[-1.282, 1, 0.766]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube17_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[603.905, 122.079, 542.328]}
              scale={396.94}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface130_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[274.026, 251.474, -834.306]}
              scale={[-0.78, 0.857, 3.596]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface129_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[293.438, 0, 69.634]}
              scale={[-0.78, 1, 1.305]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface34_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[22.272, 28.931, 32.946]}
            scale={[0.302, 0.855, 0.62]}
          />
        </group>
        <group position={[-900, 0, 311.313]}>
          <group position={[-0.484, 0, -236.312]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube23_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[627.212, 1309.436, 196.227]}
              scale={[1, 1, 0.908]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder7_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[608.164, 598.986, 102.368]}
              scale={[0.67, 0.67, 0.842]}
            />
          </group>
          <group position={[1200.484, 0, 142.253]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube23_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[627.212, 1309.436, 196.227]}
              scale={[1, 1, 0.908]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder7_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[608.164, 598.986, 102.368]}
              scale={[0.67, 0.67, 0.842]}
            />
          </group>
          <group position={[1.03, 0, 258.047]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface98_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[362.635, 295.516, 418.223]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.044, 0.098, 0.403]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface97_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[166.895, 14.365, 422.836]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.081, 0.399, 0.738]}
            />
          </group>
          <group position={[1202.716, 0, -193.831]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface98_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[362.635, 295.516, 299.397]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.044, 0.098, 0.403]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface97_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[162.104, 14.365, 293.831]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.081, 0.399, 0.738]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube26_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[0, 170, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface112_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[-1339.387, -672.904, 0]}
            scale={[1.03, 3.166, 1.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube29_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[1200, 170, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube30_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[0, 928.805, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube31_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[0, 628.805, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface113_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface114_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[572.626, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface115_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[164.541, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface116_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[-265.155, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface117_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[1008.382, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface118_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[1392.848, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface119_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[1392.848, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface120_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[1008.382, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface121_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[572.626, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface122_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[164.541, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface123_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[-265.155, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube32_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[-422.422, 586.371, 747.995]}
            scale={[0.893, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube33_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[-422.422, 743.475, 717.826]}
            scale={[0.893, 1.691, 0.349]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface124_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[-288.836, 665.62, 0]}
            scale={0.398}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface125_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[231.501, 665.62, -413.341]}
            scale={0.398}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder9_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[1680.623, 1150.854, -472.466]}
            scale={0.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface256_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[3650, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface257_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[3600, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface258_FillerBuildings1_0.geometry}
            material={materials.FillerBuildings1}
            position={[3600, 0, 0]}
          />
        </group>
      </group>
      <group position={[-19700, 0, -8950]}>
        <group position={[500, 0, -495.34]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface21_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[2329.598, 471.688, -1217.495]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface22_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1737.674, 810.33, -1218.702]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface23_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[2329.598, 810.33, -1217.495]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface24_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[1737.674, 471.688, -1217.495]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface27_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-1527.401, 483.899, 419.529]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface28_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[-1527.401, 815.596, 663.938]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface29_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[-1527.401, 815.596, 419.529]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface30_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1430.248, 815.596, 669.091]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface31_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1430.248, 815.596, 913.499]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface32_FillerBuildings1GLOW_0.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[1430.248, 473.091, 913.499]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface33_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[1430.248, 473.091, 669.091]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.588, 1.079, 1.078]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube131_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-1354.016, 900, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube132_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-1354.016, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube133_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-1354.016, 170, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <group position={[-338.524, 0, 170.869]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface142_FillerBuildings1_0_1.geometry}
                material={materials.FillerBuildings1}
                position={[-150, 841.733, -70.697]}
                scale={[0.198, 0.352, 0.26]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface141_FillerBuildings1_0_1.geometry}
                material={materials.FillerBuildings1}
                position={[-226.159, 110.745, -150.502]}
                scale={[0.663, 1, 0.505]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[-133.974, 1292.934, -231.438]}
              scale={0.493}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[192.854, 1292.934, -231.438]}
              scale={0.493}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder13_FillerBuildings1_0.geometry}
              material={materials.FillerBuildings1}
              position={[-1189.94, 1292.934, -231.438]}
              scale={0.493}
            />
          </group>
          <group position={[-628.937, 0, -236.533]} scale={[-1.282, 1, 0.766]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube17_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[603.905, 122.079, 542.328]}
              scale={396.94}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface130_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[271.738, 251.474, -834.306]}
              scale={[-0.78, 0.857, 3.596]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface129_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[293.438, 0, 69.634]}
              scale={[-0.78, 1, 1.305]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube20_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube20_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube21_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface80_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface81_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface82_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface83_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface84_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface85_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface86_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface87_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface88_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface89_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface90_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface91_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface92_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface93_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface94_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface95_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface96_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface99_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface101_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube23_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder7_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface102_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube24_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube25_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface103_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface104_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface105_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface106_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface107_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface108_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface109_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube23_FillerBuildings1_0_3.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder7_FillerBuildings1_0_3.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface98_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface97_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface98_FillerBuildings1_0_3.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface97_FillerBuildings1_0_3.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface110_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface111_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface821_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface822_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder8_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube22_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface823_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube130_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface824_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface825_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface826_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface827_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface828_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface829_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
        />
      </group>
      <group position={[-8900, 0, -12550]}>
        <group position={[500, 0, 511.313]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface128_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[4334.544, 331.179, 7.294]}
              scale={[9.64, 0.53, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface34_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[33.586, 28.931, 48.849]}
              scale={[0.456, 0.855, 0.919]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[0, 290.105, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[0, 460.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[-518.431, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[-441.714, 1191.733, -156.037]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -265.084]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[231.762, 1639.913, -475.047]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder12_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -69.663]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface804_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[-146.355, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
          </group>
        </group>
        <group position={[-500, 0, 450]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[-262.146, 110.745, 45.106]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[-185.987, 841.733, 124.91]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[-202.046, 1293.193, -231.438]}
              scale={0.497}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[124.782, 1293.193, -231.438]}
              scale={0.497}
            />
          </group>
          <group position={[376.532, 0, -60.345]} scale={[-1.282, 1, 0.766]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube17_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[603.905, 122.079, 542.328]}
              scale={396.94}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface130_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[271.738, 251.474, -834.306]}
              scale={[-0.78, 0.857, 3.596]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface129_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[293.438, 0, 69.634]}
              scale={[-0.78, 1, 1.305]}
            />
          </group>
        </group>
        <group position={[-500, 0, -450]} rotation={[-Math.PI, 0, -Math.PI]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[128.143, 110.745, 45.106]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[204.302, 841.733, 124.91]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[-133.974, 1293.193, -231.438]}
              scale={0.497}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[192.854, 1293.193, -231.438]}
              scale={0.497}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsGlow_FillerBuildings1GLOW_0.geometry}
          material={materials.FillerBuildings1GLOW}
          position={[8900, 0, 12550]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsWindows_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
          position={[8900, 0, 12550]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsT8_group8_pCube11_FillerBuildings1_0.geometry}
          material={materials.FillerBuildings1}
          position={[8900, 0, 12550]}
        />
      </group>
      <group position={[-12163.745, 120.334, -8245.036]} rotation={[0, 1.429, 0]} scale={139.53}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_INT_BTM_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_TRANS_GLASS_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_16_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_20_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WFR_Tire_0.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WRR_Tire_0.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_11_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_10_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_8_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_LIGHTS_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_HOOD_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_5_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_3_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_2_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_1_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE__elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WRL_Tire_0.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WFL_Tire_0.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BFL_Tire_0.geometry}
          material={materials.Tire}
          position={[0, -0.06, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BFR_Tire_0.geometry}
          material={materials.Tire}
          position={[0, -0.06, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BRR_Tire_0.geometry}
          material={materials.Tire}
          position={[0, -0.06, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BRL_Tire_0.geometry}
          material={materials.Tire}
          position={[0, -0.06, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_ADD_LENS_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_INT_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_21_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__GEOM_STEERINGWHEEL_elise_0.geometry}
          material={materials.elise}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__ALPHA_OPAQUE_REAR_elise_0.geometry}
          material={materials.elise}
        />
      </group>
      <group position={[14400, 0, -3599.999]}>
        <group position={[-30500, 20, -8950]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube1_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[400, 150, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube18_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1300, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube19_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1950, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube20_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[400, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube26_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-2450, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube27_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-3100, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube28_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-3100, 150, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube31_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1498.955, 668.314, 191.28]}
            scale={[0.846, 0.543, 0.846]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube32_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-2645.7, 668.314, 191.28]}
            scale={[0.846, 0.543, 0.846]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube52_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-4020.799, 2823.8, 430.435]}
            scale={[0.881, 0.623, 0.881]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube53_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-3670.744, 2823.8, -444.378]}
            scale={[2.881, 0.623, 0.515]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube54_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-3670.744, 2823.8, -205.884]}
            scale={[2.881, 0.623, 0.515]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube55_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-2185.541, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube56_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-2185.541, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube57_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[413.493, 2823.8, 430.435]}
            scale={[0.881, 0.623, 0.881]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube58_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-2564.953, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube59_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-2564.953, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube60_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1421.358, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube61_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1421.358, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube62_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1041.946, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube63_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-1041.946, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube64_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-525.839, 2945.761, -37.157]}
            scale={[0.756, 2.249, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube65_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-525.839, 2945.761, -371.809]}
            scale={[0.756, 2.249, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube66_LMProjects_0_1.geometry}
            material={materials.LMProjects}
            position={[-525.839, 2918.938, -76.66]}
            scale={[0.756, 1.891, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_1.geometry}
            material={materials.RoadsGround}
            position={[5700, 0, 8700.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__BD_ConcreteBlock2_RoadsGround_0_1.geometry}
            material={materials.RoadsGround}
            position={[7500, 0, 8700.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__BD_ConcreteBlock3_RoadsGround_0_1.geometry}
            material={materials.RoadsGround}
            position={[3900, 0, 8700.001]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LMProjects2_pasted__group65_pasted__pCube39_LMProjects1GLOW_0_1.geometry}
          material={materials.LMProjects1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LMProjects2_pasted__group65_pasted__pCube40_LMProjects_0_1.geometry}
          material={materials.LMProjects}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder1_LMProjects_0_1.geometry}
          material={materials.LMProjects}
          position={[-32373.631, 2989.807, -9336.864]}
          rotation={[0, -0.718, 0]}
          scale={[0.171, 0.257, 0.171]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__group75_LMProjects_0_1.geometry}
          material={materials.LMProjects}
        />
      </group>
      <group position={[-12200, 0, -10450]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[-1339.309, 4.84, -11.039]} scale={1.026}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface4_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[780.782, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface9_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface10_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface11_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface12_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[789.516, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube4_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[735.208, 1144.851, 622.109]}
            scale={[0.067, 0.142, 0.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube5_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[735.208, 588.031, 622.109]}
            scale={[0.067, 0.142, 0.2]}
          />
        </group>
        <group position={[1200, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube2_Paramount_0_3.geometry}
            material={materials.Paramount}
            position={[0, 170, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube6_Paramount_0_3.geometry}
            material={materials.Paramount}
            position={[0, 470, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube99_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[0, 470, -1200]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube101_Paramount_0_1.geometry}
            material={materials.Paramount}
            position={[0, 170, -1200]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2_Paramount_0_2.geometry}
          material={materials.Paramount}
          position={[0, 170, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-1339.387, -9.695, 0]}
          scale={1.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube6_Paramount_0_2.geometry}
          material={materials.Paramount}
          position={[0, 470, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface13_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-600, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface14_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[310.869, 0, 0]}
          scale={[0.281, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube7_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[65.716, 1340.691, -382.237]}
          scale={[0.292, 0.473, 0.292]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface15_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[37.451, 3.73, -170]}
          scale={[0.99, 0.747, 0.99]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface16_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-1300, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder1_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[431.713, 2047.189, -384.272]}
          scale={[0.08, 0.052, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane69_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-0.805, 1663.443, -202.433]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.086, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube98_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[0, 470, -1200]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube100_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[0, 170, -1200]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube102_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[0, 470, -1200]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface3_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-522.879, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface8_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface7_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-529.461, 4.84, -11.039]}
          scale={1.026}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane68_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[396.04, 1375.221, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane58_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-392.164, 770.325, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane57_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[2.323, 464.99, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane333_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[807.836, 770.325, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane334_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[1050, 464.99, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane332_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[396.04, 1071.371, -1205.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane71_Paramount1GLOW_0_1.geometry}
          material={materials.Paramount1GLOW}
          position={[-609.969, 1083.39, 435.924]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1.409, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane62_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-391.537, 1375.221, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane67_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[2.323, 1375.221, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane61_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-391.537, 1071.371, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane65_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[2.323, 1071.371, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane66_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[396.04, 1071.371, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane64_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[396.04, 770.325, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane63_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[2.323, 770.325, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane60_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[396.04, 464.99, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane56_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-391.537, 464.99, 605.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane335_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[808.463, 464.99, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane336_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[1050, 770.325, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane337_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[1050, 1071.371, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane338_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[808.463, 1071.371, 607.472]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane329_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[607.873, 1363.202, 435.924]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1.409, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane331_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[2.323, 1071.371, -1205.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane330_Paramount_0_1.geometry}
          material={materials.Paramount}
          position={[-391.537, 1071.371, -1205.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.275, 0.905, 0.905]}
        />
      </group>
      <group position={[-34950, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_4.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[-18800, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_5.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_1.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[2913.357, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_6.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_2.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[5864.183, 0, -6401.275]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_7.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_3.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[-4794.792, 0, -6401.275]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_8.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_4.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[-17835.592, 0, -6401.275]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_9.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_5.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[-25983.957, 0, -6401.275]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_10.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_6.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[-31808.141, 0, -6401.275]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_11.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface836_WhiteGlow_0_7.geometry}
          material={materials.WhiteGlow}
          position={[40.101, 2071.557, 0.596]}
          rotation={[Math.PI, 0, 0]}
          scale={0.868}
        />
      </group>
      <group position={[-14400, 0, 0]}>
        <group position={[-15050, 0, -6400]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_4.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_4.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_4.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_4.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_4.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_8.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_8.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_3.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_25.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_26.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_9.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_9.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_27.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_4.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_28.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_29.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_5.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_5.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_5.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_5.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_5.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_10.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_10.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_30.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_31.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_32.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_4.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_11.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_11.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_33.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_34.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_35.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_5.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_6.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_6.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_6.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_6.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_6.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_36.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_25.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_37.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_26.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_38.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_27.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_39.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_5.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_40.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_28.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_41.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_29.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_7.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_7.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_7.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_7.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_7.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_42.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_30.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_43.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_31.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_44.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_6.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_45.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_32.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_46.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_33.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_47.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_7.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface839_WhiteGlow1_0_1.geometry}
          material={materials.WhiteGlow1}
          position={[-22656.896, 0, 7394.786]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_WhiteGlow1_0_1.geometry}
          material={materials.WhiteGlow1}
          position={[-28598.895, 0, -14300.698]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface837_WhiteGlow1_0_1.geometry}
          material={materials.WhiteGlow1}
          position={[-21450.221, 0, 7149.48]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_WhiteGlow1_0_1.geometry}
          material={materials.WhiteGlow1}
        />
      </group>
      <group position={[14400, 0, 0]}>
        <group position={[-15050, 0, -6400]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_8.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_8.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_8.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_8.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_8.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_48.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_6.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_49.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_34.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_50.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_35.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_51.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_7.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_52.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_36.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_53.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_37.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_9.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_9.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_9.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_9.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_9.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_54.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_38.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_55.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_39.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_56.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_8.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_57.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_40.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_58.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_41.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_59.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_9.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_10.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_10.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_10.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_10.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_10.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_60.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_42.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_61.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_43.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_62.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_44.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_63.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_8.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_64.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_45.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_65.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_46.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_11.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_11.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_11.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_11.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_11.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_66.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_47.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_67.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_48.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_68.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_10.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_69.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_49.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_70.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_50.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_71.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_11.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface839_WhiteGlow1_0_2.geometry}
          material={materials.WhiteGlow1}
          position={[-22656.896, 0, 7394.786]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_WhiteGlow1_0_2.geometry}
          material={materials.WhiteGlow1}
          position={[-28598.895, 0, -14300.698]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface837_WhiteGlow1_0_2.geometry}
          material={materials.WhiteGlow1}
          position={[-21450.221, 0, 7149.48]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_WhiteGlow1_0_2.geometry}
          material={materials.WhiteGlow1}
        />
      </group>
      <group position={[-14250, 0, 7150]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15050, 0, -6400]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_12.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_12.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_72.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_9.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_73.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_51.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_74.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_52.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_25.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_25.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_75.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_10.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_76.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_53.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_77.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_54.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_13.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_13.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_26.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_26.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_78.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_55.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_79.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_56.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_80.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_12.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_27.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_27.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_81.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_57.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_82.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_58.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_83.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_13.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_14.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_14.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_28.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_28.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_84.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_59.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_85.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_60.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_86.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_61.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_29.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_29.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_87.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_11.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_88.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_62.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_89.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_63.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_15.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_15.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_30.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_30.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_90.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_64.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_91.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_65.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_92.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_14.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_31.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_31.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_93.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_66.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_94.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_67.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_95.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_15.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface839_WhiteGlow1_0_3.geometry}
          material={materials.WhiteGlow1}
          position={[-22656.896, 0, 7394.786]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_WhiteGlow1_0_3.geometry}
          material={materials.WhiteGlow1}
          position={[-28598.895, 0, -14300.698]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface837_WhiteGlow1_0_3.geometry}
          material={materials.WhiteGlow1}
          position={[-21450.221, 0, 7149.48]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_WhiteGlow1_0_3.geometry}
          material={materials.WhiteGlow1}
        />
      </group>
      <group position={[-30450, 0, 7150]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15050, 0, -6400]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_16.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_16.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_32.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_32.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_96.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_12.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_97.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_68.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_98.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_69.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_33.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_33.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_99.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_13.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_100.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_70.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_101.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_71.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_17.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_17.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_34.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_34.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_102.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_72.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_103.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_73.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_104.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_74.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_25.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_35.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_35.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_105.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_14.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_106.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_75.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_107.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_76.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_18.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_18.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_36.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_36.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_108.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_77.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_109.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_78.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_110.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_16.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_26.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_37.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_37.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_111.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_79.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_112.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_80.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_113.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_17.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_WhiteGlow1_0_4.geometry}
          material={materials.WhiteGlow1}
          position={[-28598.895, 0, -14300.698]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface837_WhiteGlow1_0_4.geometry}
          material={materials.WhiteGlow1}
          position={[-21450.221, 0, 7149.48]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_WhiteGlow1_0_4.geometry}
          material={materials.WhiteGlow1}
        />
      </group>
      <group position={[-7350, 0, 0]}>
        <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_19.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_19.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_38.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_38.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_114.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_81.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_115.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_82.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_116.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_18.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_27.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_39.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_39.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_117.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_83.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_118.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_84.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_119.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_19.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_20.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_20.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_40.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_40.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_120.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_85.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_121.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_86.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_122.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_87.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_28.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_41.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_41.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_123.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_15.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_124.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_88.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_125.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_89.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_21.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_21.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_42.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_42.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_126.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_90.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_127.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_91.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_128.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_20.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_29.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_43.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_43.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_129.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_92.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_130.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_93.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_131.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_21.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface839_WhiteGlow1_0_4.geometry}
          material={materials.WhiteGlow1}
          position={[-22656.896, 0, 7394.786]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface837_WhiteGlow1_0_5.geometry}
          material={materials.WhiteGlow1}
          position={[-21450.221, 0, 7149.48]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_WhiteGlow1_0_5.geometry}
          material={materials.WhiteGlow1}
        />
      </group>
      <group position={[-23400, 0, 0]}>
        <group position={[-15050, 0, -6400]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_22.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_22.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_44.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_44.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_132.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_16.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_133.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_94.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_134.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_95.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_30.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_45.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_45.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_135.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_17.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_136.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_96.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_137.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_97.geometry}
            material={materials.CityProps}
          />
        </group>
        <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_23.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_23.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_46.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_46.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_138.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_98.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_139.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_99.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_140.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_22.geometry}
            material={materials.GreenGlow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_31.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_47.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_47.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_141.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_100.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_142.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_101.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_143.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_GreenGlow_0_23.geometry}
            material={materials.GreenGlow}
          />
        </group>
        <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface260_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface261_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface791_CityProps1GLOW_0_24.geometry}
            material={materials.CityProps1GLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface259_CityProps_0_24.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_48.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_48.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_144.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_102.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_145.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_103.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_146.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_104.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface750_CityProps_0_32.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface752_CityProps_0_49.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface264_CityProps_0_49.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_147.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_RedGLOW_0_18.geometry}
            material={materials.RedGLOW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_148.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_105.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface262_CityProps_0_149.geometry}
            material={materials.CityProps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface739_CityProps_0_106.geometry}
            material={materials.CityProps}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface839_WhiteGlow1_0_5.geometry}
          material={materials.WhiteGlow1}
          position={[-22656.896, 0, 7394.786]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_WhiteGlow1_0_5.geometry}
          material={materials.WhiteGlow1}
          position={[-28598.895, 0, -14300.698]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_WhiteGlow1_0_6.geometry}
          material={materials.WhiteGlow1}
        />
      </group>
      <group position={[-12750, 0, -9200]}>
        <group position={[122.855, 1.095, 206.992]} scale={0.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube23_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[627.212, 1309.436, 196.227]}
            scale={[1, 1, 0.908]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCylinder7_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[608.164, 598.986, 102.368]}
            scale={[0.67, 0.67, 0.842]}
          />
        </group>
        <group
          position={[-122.855, 1.095, 399.912]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube23_Laundrymat_0_1.geometry}
            material={materials.Laundrymat}
            position={[627.212, 1309.436, 196.227]}
            scale={[1, 1, 0.908]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCylinder7_Laundrymat_0_1.geometry}
            material={materials.Laundrymat}
            position={[608.164, 598.986, 102.368]}
            scale={[0.67, 0.67, 0.842]}
          />
        </group>
        <group position={[-328.341, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube69_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[1.678, 546.662, -144.023]}
            scale={[497.099, 47.617, 497.099]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube72_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[1.607, 604.643, -143.992]}
            rotation={[0, -0.838, 0]}
            scale={[209.745, 240.223, 209.745]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube71_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[1.643, 654.632, -144.023]}
            scale={[323.226, 30.961, 323.226]}
          />
        </group>
        <group position={[-1.124, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube69_Laundrymat_0_1.geometry}
            material={materials.Laundrymat}
            position={[1.678, 546.662, -144.023]}
            scale={[497.099, 47.617, 497.099]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube72_Laundrymat_0_1.geometry}
            material={materials.Laundrymat}
            position={[1.607, 604.643, -143.992]}
            rotation={[0, -0.838, 0]}
            scale={[209.745, 240.223, 209.745]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube71_Laundrymat_0_1.geometry}
            material={materials.Laundrymat}
            position={[1.643, 654.632, -144.023]}
            scale={[323.226, 30.961, 323.226]}
          />
        </group>
        <group position={[330.8, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube69_Laundrymat_0_2.geometry}
            material={materials.Laundrymat}
            position={[1.678, 546.662, -144.023]}
            scale={[497.099, 47.617, 497.099]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube72_Laundrymat_0_2.geometry}
            material={materials.Laundrymat}
            position={[1.607, 604.643, -143.992]}
            rotation={[0, -0.838, 0]}
            scale={[209.745, 240.223, 209.745]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube71_Laundrymat_0_2.geometry}
            material={materials.Laundrymat}
            position={[1.643, 654.632, -144.023]}
            scale={[323.226, 30.961, 323.226]}
          />
        </group>
        <group position={[39.942, 0, 8.466]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCylinder8_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[-200, 663.287, 435.053]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.187, 0.837, 1.187]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCylinder10_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[-163.697, 875.252, 457.201]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.304, 0.396, 0.304]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCylinder11_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[-85.935, 827.851, 459.811]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.214, 0.279, 0.214]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCylinder9_Laundrymat_0.geometry}
            material={materials.Laundrymat}
            position={[144.304, 682.29, 435.958]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.937, 0.493, 0.937]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pPlane94_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[0, 29.253, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface254_Laundrymat_0.geometry}
          material={materials.Laundrymat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube67_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-393.803, 66.204, 510.854]}
          scale={[1.306, 0.067, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube79_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-296.298, 66.204, 510.854]}
          scale={[1.306, 0.067, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube80_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-198.491, 66.204, 510.854]}
          scale={[1.306, 0.067, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube81_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-99.679, 66.204, 510.854]}
          scale={[1.306, 0.067, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface255_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[0, -100.627, 39.164]}
          scale={[1.443, 1, 1.392]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube82_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-148.384, 42.676, 512.559]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_Block86_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[7750, 20, 8950.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_Block87_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-541.349, 25.098, 5826.283]}
          scale={[0.012, 0.524, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_Block88_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[-236.056, 25.098, 5826.283]}
          scale={[0.012, 0.524, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_Block89_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[69.238, 25.098, 5826.283]}
          scale={[0.012, 0.524, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_Block90_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[374.531, 25.098, 5826.283]}
          scale={[0.012, 0.524, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_Block91_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[679.824, 25.098, 5826.283]}
          scale={[0.012, 0.524, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LM_Laundrette_pasted__pCube65_Laundrymat_0.geometry}
          material={materials.Laundrymat}
          position={[12750, 0, 9200]}
        />
      </group>
      <group position={[-1700, 0, -8950]}>
        <group position={[0, 50.02, 158.197]} scale={[1, 1, 0.588]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface11_FishFactory_0.geometry}
            material={materials.FishFactory}
            position={[0, 0, 406.345]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface12_FishFactory_0.geometry}
            material={materials.FishFactory}
            position={[0, 0, 406.345]}
          />
        </group>
        <group position={[1800, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface6_FishFactory_0_1.geometry}
            material={materials.FishFactory}
            position={[275.947, 0, 0]}
            scale={[1.153, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface13_FishFactory_0_1.geometry}
            material={materials.FishFactory}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface14_FishFactory_0_1.geometry}
            material={materials.FishFactory}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface1_RoadsGround_0.geometry}
          material={materials.RoadsGround}
          position={[0, 20, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface2_RoadsGround_0.geometry}
          material={materials.RoadsGround}
          position={[-1800, 20, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface4_RoadsGround_0.geometry}
          material={materials.RoadsGround}
          position={[-3600, 20, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube1_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-3550, 425, -150]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube2_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[0, 650, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube3_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1800, 650, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube4_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4197.288, 1040.731, -136.894]}
          scale={[0.609, 0.643, 0.689]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube5_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4401.618, 593.903, -36.831]}
          scale={[0.173, 2.569, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube7_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-3490.602, 949.329, 170.824]}
          scale={[1.171, 0.234, 0.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface5_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface7_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface8_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1018.372, 149.074, 0]}
          scale={[0.434, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube9_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4045.203, 1180.864, 356.179]}
          scale={[0.093, 1.27, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube12_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4045.203, 1511.44, 356.179]}
          scale={[0.093, 0.21, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube13_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4401.618, 593.903, -216.861]}
          scale={[0.173, 2.569, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube14_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4197.288, 1097.17, -12.232]}
          scale={[0.23, 0.126, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube15_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-4197.288, 1097.17, -410.334]}
          scale={[0.23, 0.126, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube16_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-2796.207, 101.571, 666.795]}
          scale={[0.365, 0.365, 0.467]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube17_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-3490.602, 949.329, -366.893]}
          scale={[1.171, 0.234, 0.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube18_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-3571.481, 1180.864, 356.179]}
          scale={[0.093, 1.27, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube19_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-3077.287, 1180.864, 356.179]}
          scale={[0.093, 1.27, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface6_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[275.947, 0, 0]}
          scale={[1.153, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface13_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface14_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface17_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube20_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1626.581, 101.9, 578.284]}
          scale={[0.397, 0.367, 0.363]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube21_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1417.612, 60.77, 496.436]}
          scale={[0.397, 0.182, 0.363]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface18_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-2281.264, 0, 0]}
          scale={[0.363, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface21_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface22_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface23_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface24_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface25_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface26_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[0, -162.563, -48.373]}
          scale={[1, 0.96, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface28_FishFactory_0.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube22_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-2469.043, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube23_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-2119.082, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube24_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1779.258, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube25_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1446.645, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube26_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-1113.314, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube27_FishFactory1GLOW_0.geometry}
          material={materials.FishFactory1GLOW}
          position={[-675.839, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube28_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-325.878, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube29_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[13.946, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube30_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[346.559, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube31_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[679.89, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube32_FishFactory_0.geometry}
          material={materials.FishFactory}
          position={[-2612.566, 483.596, 666.795]}
          scale={[0.365, 0.365, 0.467]}
        />
      </group>
      <group position={[-1700, 0, -10750]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[0, 50.02, 158.197]} scale={[1, 1, 0.588]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface11_FishFactory_0_1.geometry}
            material={materials.FishFactory}
            position={[0, 0, 406.345]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface12_FishFactory_0_1.geometry}
            material={materials.FishFactory}
            position={[0, 0, 406.345]}
          />
        </group>
        <group position={[1800, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface6_FishFactory_0_3.geometry}
            material={materials.FishFactory}
            position={[275.947, 0, 0]}
            scale={[1.153, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface13_FishFactory_0_3.geometry}
            material={materials.FishFactory}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface14_FishFactory_0_3.geometry}
            material={materials.FishFactory}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface1_RoadsGround_0_1.geometry}
          material={materials.RoadsGround}
          position={[0, 20, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface2_RoadsGround_0_1.geometry}
          material={materials.RoadsGround}
          position={[-1800, 20, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface4_RoadsGround_0_1.geometry}
          material={materials.RoadsGround}
          position={[-3600, 20, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube1_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-3550, 425, -150]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube2_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[0, 650, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube3_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1800, 650, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube4_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4197.288, 1040.731, -136.894]}
          scale={[0.609, 0.643, 0.689]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube5_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4401.618, 593.903, -36.831]}
          scale={[0.173, 2.569, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube7_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-3490.602, 949.329, 170.824]}
          scale={[1.171, 0.234, 0.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface5_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface7_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface8_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1018.372, 149.074, 0]}
          scale={[0.434, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube9_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4045.203, 1180.864, 356.179]}
          scale={[0.093, 1.27, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube12_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4045.203, 1511.44, 356.179]}
          scale={[0.093, 0.21, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube13_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4401.618, 593.903, -216.861]}
          scale={[0.173, 2.569, 0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube14_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4197.288, 1097.17, -12.232]}
          scale={[0.23, 0.126, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube15_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-4197.288, 1097.17, -410.334]}
          scale={[0.23, 0.126, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube16_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-2796.207, 101.571, 666.795]}
          scale={[0.365, 0.365, 0.467]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube17_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-3490.602, 949.329, -366.893]}
          scale={[1.171, 0.234, 0.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube18_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-3571.481, 1180.864, 356.179]}
          scale={[0.093, 1.27, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube19_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-3077.287, 1180.864, 356.179]}
          scale={[0.093, 1.27, 0.052]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface6_FishFactory_0_2.geometry}
          material={materials.FishFactory}
          position={[275.947, 0, 0]}
          scale={[1.153, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface13_FishFactory_0_2.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface14_FishFactory_0_2.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface17_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube20_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1626.581, 101.9, 578.284]}
          scale={[0.397, 0.367, 0.363]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube21_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1417.612, 60.77, 496.436]}
          scale={[0.397, 0.182, 0.363]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface18_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-2281.264, 0, 0]}
          scale={[0.363, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface21_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface22_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface23_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface24_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface25_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface26_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[0, -162.563, -48.373]}
          scale={[1, 0.96, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface28_FishFactory_0_1.geometry}
          material={materials.FishFactory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube22_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-2469.043, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube23_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-2119.082, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube24_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1779.258, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube25_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1446.645, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube26_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-1113.314, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube27_FishFactory1GLOW_0_1.geometry}
          material={materials.FishFactory1GLOW}
          position={[-675.839, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube28_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-325.878, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube29_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[13.946, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube30_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[346.559, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube31_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[679.89, 1106.124, 737.89]}
          scale={[0.264, 0.649, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube32_FishFactory_0_1.geometry}
          material={materials.FishFactory}
          position={[-2612.566, 483.596, 666.795]}
          scale={[0.365, 0.365, 0.467]}
        />
      </group>
      <group position={[-25100, 0, -8950]}>
        <group position={[0, 1400, -100]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface804_Pawnshop_0.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface805_Pawnshop_0.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface806_Pawnshop_0.geometry}
            material={materials.Pawnshop}
          />
        </group>
        <group position={[-2.651, 895.873, 802.302]} scale={[0.398, 0.931, 2.982]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube88_Pawnshop_0.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube88_Pawnshop1GLOW_0.geometry}
            material={materials.Pawnshop1GLOW}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube80_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[0, 450, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube81_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[25, 650, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube84_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[0, 509.631, -100]}
          scale={[1.009, 0.234, 1.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__loftedSurface3_Pawnshop_0.geometry}
          material={materials.Pawnshop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__loftedSurface3_Pawnshop1GLOW_0.geometry}
          material={materials.Pawnshop1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube85_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[-750, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube89_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[437.178, 1420.26, -373.824]}
          scale={[0.881, 0.082, 3.359]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube90_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[25, 1050, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_2.geometry}
          material={materials.RoadsGround}
          position={[7500, 20, 8700.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube91_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[-1.146, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube92_Pawnshop_0.geometry}
          material={materials.Pawnshop}
          position={[750, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface807_Pawnshop_0.geometry}
          material={materials.Pawnshop}
        />
      </group>
      <group position={[-21450, 0, 14350]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-30500, 20, -8950]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube1_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[400, 150, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube18_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1300, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube19_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1950, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube20_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[400, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube26_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-2450, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube27_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-3100, 2550, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube28_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-3100, 150, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube31_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1498.955, 668.314, 191.28]}
            scale={[0.846, 0.543, 0.846]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube32_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-2645.7, 668.314, 191.28]}
            scale={[0.846, 0.543, 0.846]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube52_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-4020.799, 2823.8, 430.435]}
            scale={[0.881, 0.623, 0.881]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube53_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-3670.744, 2823.8, -444.378]}
            scale={[2.881, 0.623, 0.515]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube54_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-3670.744, 2823.8, -205.884]}
            scale={[2.881, 0.623, 0.515]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube55_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-2185.541, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube56_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-2185.541, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube57_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[413.493, 2823.8, 430.435]}
            scale={[0.881, 0.623, 0.881]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube58_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-2564.953, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube59_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-2564.953, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube60_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1421.358, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube61_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1421.358, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube62_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1041.946, 2465.949, -265.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube63_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-1041.946, 2465.949, 315.552]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.772, 0.623, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube64_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-525.839, 2945.761, -37.157]}
            scale={[0.756, 2.249, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube65_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-525.839, 2945.761, -371.809]}
            scale={[0.756, 2.249, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube66_LMProjects_0_2.geometry}
            material={materials.LMProjects}
            position={[-525.839, 2918.938, -76.66]}
            scale={[0.756, 1.891, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_3.geometry}
            material={materials.RoadsGround}
            position={[5700, 0, 8700.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__BD_ConcreteBlock2_RoadsGround_0_2.geometry}
            material={materials.RoadsGround}
            position={[7500, 0, 8700.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__BD_ConcreteBlock3_RoadsGround_0_2.geometry}
            material={materials.RoadsGround}
            position={[3900, 0, 8700.001]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LMProjects2_pasted__group65_pasted__pCube39_LMProjects1GLOW_0_2.geometry}
          material={materials.LMProjects1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LMProjects2_pasted__group65_pasted__pCube40_LMProjects_0_2.geometry}
          material={materials.LMProjects}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder1_LMProjects_0_2.geometry}
          material={materials.LMProjects}
          position={[-32373.631, 2989.807, -9336.864]}
          rotation={[0, -0.718, 0]}
          scale={[0.171, 0.257, 0.171]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__group75_LMProjects_0_2.geometry}
          material={materials.LMProjects}
        />
      </group>
      <group position={[-12500, 0, -12550]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[0, 1400, -100]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface804_Pawnshop_0_1.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface805_Pawnshop_0_1.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface806_Pawnshop_0_1.geometry}
            material={materials.Pawnshop}
          />
        </group>
        <group position={[-2.651, 895.873, 802.302]} scale={[0.398, 0.931, 2.982]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube88_Pawnshop_0_1.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube88_Pawnshop1GLOW_0_1.geometry}
            material={materials.Pawnshop1GLOW}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube80_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[0, 450, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube81_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[25, 650, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube84_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[0, 509.631, -100]}
          scale={[1.009, 0.234, 1.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__loftedSurface3_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__loftedSurface3_Pawnshop1GLOW_0_1.geometry}
          material={materials.Pawnshop1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube85_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[-750, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube89_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[437.178, 1420.26, -373.824]}
          scale={[0.881, 0.082, 3.359]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube90_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[25, 1050, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_4.geometry}
          material={materials.RoadsGround}
          position={[7500, 20, 8700.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube91_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[-1.146, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube92_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
          position={[750, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface807_Pawnshop_0_1.geometry}
          material={materials.Pawnshop}
        />
      </group>
      <group position={[-5242.122, 0, -10773.794]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[500, 0, 511.313]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface128_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[4334.544, 331.179, 7.294]}
              scale={[9.64, 0.53, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface34_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[33.586, 28.931, 48.849]}
              scale={[0.456, 0.855, 0.919]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[0, 290.105, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[0, 460.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[-518.431, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[-441.714, 1191.733, -156.037]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -265.084]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[231.762, 1639.913, -475.047]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder12_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -69.663]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface804_FillerBuildings1_0_2.geometry}
              material={materials.FillerBuildings1}
              position={[-146.355, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
          </group>
        </group>
        <group position={[-500, 0, 450]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[-262.146, 110.745, 45.106]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[-185.987, 841.733, 124.91]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[-202.046, 1293.193, -231.438]}
              scale={0.497}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[124.782, 1293.193, -231.438]}
              scale={0.497}
            />
          </group>
          <group position={[376.532, 0, -60.345]} scale={[-1.282, 1, 0.766]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube17_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[603.905, 122.079, 542.328]}
              scale={396.94}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface130_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[271.738, 251.474, -834.306]}
              scale={[-0.78, 0.857, 3.596]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface129_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[293.438, 0, 69.634]}
              scale={[-0.78, 1, 1.305]}
            />
          </group>
        </group>
        <group position={[-500, 0, -450]} rotation={[-Math.PI, 0, -Math.PI]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[128.143, 110.745, 45.106]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[204.302, 841.733, 124.91]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[-133.974, 1293.193, -231.438]}
              scale={0.497}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[192.854, 1293.193, -231.438]}
              scale={0.497}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsGlow_FillerBuildings1GLOW_0_1.geometry}
          material={materials.FillerBuildings1GLOW}
          position={[8900, 0, 12550]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsWindows_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
          position={[8900, 0, 12550]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsT8_group8_pCube11_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
          position={[8900, 0, 12550]}
        />
      </group>
      <group position={[7191.548, 0, -7148.586]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube45_FillerBuildings1GLOW_0_1.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube52_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group29_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_Apartments1_group59_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group41_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group60_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_Apartments2_FillerBuildings1_0_1.geometry}
          material={materials.FillerBuildings1}
        />
      </group>
      <group position={[-19669.068, 0, -10830.444]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[500, 0, 511.313]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface128_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[4334.544, 331.179, 7.294]}
              scale={[9.64, 0.53, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface34_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[33.586, 28.931, 48.849]}
              scale={[0.456, 0.855, 0.919]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[0, 290.105, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[0, 460.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[-518.431, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[-441.714, 1191.733, -156.037]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -265.084]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[231.762, 1639.913, -475.047]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder12_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -69.663]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface804_FillerBuildings1_0_3.geometry}
              material={materials.FillerBuildings1}
              position={[-146.355, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
          </group>
        </group>
        <group position={[-500, 0, 450]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_6.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_9.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_9.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_9.geometry}
              material={materials.FillerBuildings1}
              position={[-262.146, 110.745, 45.106]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_9.geometry}
              material={materials.FillerBuildings1}
              position={[-185.987, 841.733, 124.91]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_9.geometry}
              material={materials.FillerBuildings1}
              position={[-202.046, 1293.193, -231.438]}
              scale={0.497}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_9.geometry}
              material={materials.FillerBuildings1}
              position={[124.782, 1293.193, -231.438]}
              scale={0.497}
            />
          </group>
          <group position={[376.532, 0, -60.345]} scale={[-1.282, 1, 0.766]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube17_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[603.905, 122.079, 542.328]}
              scale={396.94}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface130_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[271.738, 251.474, -834.306]}
              scale={[-0.78, 0.857, 3.596]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface129_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[293.438, 0, 69.634]}
              scale={[-0.78, 1, 1.305]}
            />
          </group>
        </group>
        <group position={[-500, 0, -450]} rotation={[-Math.PI, 0, -Math.PI]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_7.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_10.geometry}
              material={materials.FillerBuildings1}
              position={[0, -59.895, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_10.geometry}
              material={materials.FillerBuildings1}
              position={[0, 110.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_10.geometry}
              material={materials.FillerBuildings1}
              position={[128.143, 110.745, 45.106]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_10.geometry}
              material={materials.FillerBuildings1}
              position={[204.302, 841.733, 124.91]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_10.geometry}
              material={materials.FillerBuildings1}
              position={[-133.974, 1293.193, -231.438]}
              scale={0.497}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_10.geometry}
              material={materials.FillerBuildings1}
              position={[192.854, 1293.193, -231.438]}
              scale={0.497}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsGlow_FillerBuildings1GLOW_0_2.geometry}
          material={materials.FillerBuildings1GLOW}
          position={[8900, 0, 12550]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsWindows_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
          position={[8900, 0, 12550]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_SalsT8_group8_pCube11_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
          position={[8900, 0, 12550]}
        />
      </group>
      <group position={[-17836.984, 0, 10750.029]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube45_FillerBuildings1GLOW_0_2.geometry}
          material={materials.FillerBuildings1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube52_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group29_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_Apartments1_group59_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group41_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group60_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filler_Apartments2_FillerBuildings1_0_2.geometry}
          material={materials.FillerBuildings1}
        />
      </group>
      <group position={[-7100, 0, -19761.313]}>
        <group position={[-1950, 0, 511.313]}>
          <group scale={[0.663, 1, 0.674]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_FillerBuildings1_0_8.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface17_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[1806.945, 471.688, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface18_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[2329.598, 471.688, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface19_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[1806.945, 810.33, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface20_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[2329.598, 810.33, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface79_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[-341.055, 80, 66.88]}
              scale={[1, 1, 0.749]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface128_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[4334.544, 331.179, 7.294]}
              scale={[9.64, 0.53, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube104_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 900, -1200]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube105_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 550, -1200]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube106_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 170, -1200]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface806_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[1292.036, 810.33, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface807_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[1292.036, 471.688, 15.762]}
              scale={[4.074, 1.237, 1.08]}
            />
          </group>
          <group position={[0, -30.744, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube34_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 1280.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface131_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[1198.214, 1191.075, 10.631]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface132_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[1544.793, 1191.075, 10.631]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface137_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[949.399, 1203.372, 983.321]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface138_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[949.399, 1203.372, 1148.159]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface139_FillerBuildings1_0_11.geometry}
              material={materials.FillerBuildings1}
              position={[0, 290.105, 0]}
              scale={[0.663, 1.167, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface140_FillerBuildings1_0_11.geometry}
              material={materials.FillerBuildings1}
              position={[0, 460.745, 0]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface141_FillerBuildings1_0_11.geometry}
              material={materials.FillerBuildings1}
              position={[-518.431, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface142_FillerBuildings1_0_11.geometry}
              material={materials.FillerBuildings1}
              position={[-441.714, 1191.733, -156.037]}
              scale={[0.198, 0.352, 0.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_FillerBuildings1_0_11.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -265.084]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder11_FillerBuildings1_0_11.geometry}
              material={materials.FillerBuildings1}
              position={[231.762, 1639.913, -475.047]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube103_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[0, 1280.745, -809.32]}
              scale={[0.663, 1, 0.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder12_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[229.406, 1639.913, -69.663]}
              scale={0.475}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface804_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[-146.355, 460.745, -269.793]}
              scale={[0.663, 1, 0.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface805_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[856.77, 1191.075, 10.631]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface808_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[949.399, 1203.372, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface809_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[949.399, 856.174, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface810_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[856.77, 1191.075, -1885.092]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface811_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[1198.214, 1191.075, -1885.092]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface812_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[1544.793, 1191.075, -1885.092]}
              scale={[2.701, 1.237, 0.728]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface813_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[-163.608, 1203.372, 1148.159]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface814_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[-163.608, 1203.372, 983.321]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface815_FillerBuildings1GLOW_0_1.geometry}
              material={materials.FillerBuildings1GLOW}
              position={[-163.608, 1203.372, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface816_FillerBuildings1_0_1.geometry}
              material={materials.FillerBuildings1}
              position={[-163.608, 856.174, -255.056]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.324, 1.079, 0.715]}
            />
          </group>
          <group position={[74.013, 0, -60.345]} scale={[-1.282, 1, 0.766]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube17_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[603.905, 122.079, 542.328]}
              scale={396.94}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface130_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[274.026, 251.474, -834.306]}
              scale={[-0.78, 0.857, 3.596]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface129_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[293.438, 0, 69.634]}
              scale={[-0.78, 1, 1.305]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface34_FillerBuildings1_0_4.geometry}
            material={materials.FillerBuildings1}
            position={[22.272, 28.931, 32.946]}
            scale={[0.302, 0.855, 0.62]}
          />
        </group>
        <group position={[-900, 0, 311.313]}>
          <group position={[-0.484, 0, -236.312]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube23_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[627.212, 1309.436, 196.227]}
              scale={[1, 1, 0.908]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder7_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[608.164, 598.986, 102.368]}
              scale={[0.67, 0.67, 0.842]}
            />
          </group>
          <group position={[1200.484, 0, 142.253]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube23_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[627.212, 1309.436, 196.227]}
              scale={[1, 1, 0.908]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder7_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[608.164, 598.986, 102.368]}
              scale={[0.67, 0.67, 0.842]}
            />
          </group>
          <group position={[1.03, 0, 258.047]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface98_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[362.635, 295.516, 418.223]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.044, 0.098, 0.403]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface97_FillerBuildings1_0_4.geometry}
              material={materials.FillerBuildings1}
              position={[166.895, 14.365, 422.836]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.081, 0.399, 0.738]}
            />
          </group>
          <group position={[1202.716, 0, -193.831]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface98_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[362.635, 295.516, 299.397]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.044, 0.098, 0.403]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface97_FillerBuildings1_0_5.geometry}
              material={materials.FillerBuildings1}
              position={[162.104, 14.365, 293.831]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.081, 0.399, 0.738]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube26_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[0, 170, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface112_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[-1339.387, -672.904, 0]}
            scale={[1.03, 3.166, 1.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube29_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[1200, 170, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube30_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[0, 928.805, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube31_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[0, 628.805, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface113_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface114_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[572.626, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface115_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[164.541, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface116_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[-265.155, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface117_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[1008.382, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface118_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[1392.848, 474.258, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface119_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[1392.848, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface120_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[1008.382, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface121_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[572.626, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface122_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[164.541, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface123_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[-265.155, 194.966, -29.486]}
            scale={[0.055, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube32_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[-422.422, 586.371, 747.995]}
            scale={[0.893, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube33_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[-422.422, 743.475, 717.826]}
            scale={[0.893, 1.691, 0.349]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface124_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[-288.836, 665.62, 0]}
            scale={0.398}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface125_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[231.501, 665.62, -413.341]}
            scale={0.398}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder9_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[1680.623, 1150.854, -472.466]}
            scale={0.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface256_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[3650, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface257_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[3600, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface258_FillerBuildings1_0_1.geometry}
            material={materials.FillerBuildings1}
            position={[3600, 0, 0]}
          />
        </group>
      </group>
      <group position={[-7100, 0, -16149.971]}>
        <group position={[0, 1400, -100]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface804_Pawnshop_0_2.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface805_Pawnshop_0_2.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface806_Pawnshop_0_2.geometry}
            material={materials.Pawnshop}
          />
        </group>
        <group position={[-2.651, 895.873, 802.302]} scale={[0.398, 0.931, 2.982]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube88_Pawnshop_0_2.geometry}
            material={materials.Pawnshop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pCube88_Pawnshop1GLOW_0_2.geometry}
            material={materials.Pawnshop1GLOW}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube80_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[0, 450, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube81_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[25, 650, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube84_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[0, 509.631, -100]}
          scale={[1.009, 0.234, 1.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__loftedSurface3_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__loftedSurface3_Pawnshop1GLOW_0_2.geometry}
          material={materials.Pawnshop1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube85_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[-750, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube89_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[437.178, 1420.26, -373.824]}
          scale={[0.881, 0.082, 3.359]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube90_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[25, 1050, -100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_5.geometry}
          material={materials.RoadsGround}
          position={[7500, 20, 8700.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube91_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[-1.146, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube92_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
          position={[750, 999.674, 626.604]}
          scale={[0.881, 1.176, 0.532]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__polySurface807_Pawnshop_0_2.geometry}
          material={materials.Pawnshop}
        />
      </group>
      <group position={[-15050, 0, -6400]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface260_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface261_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps1GLOW_0.geometry}
          material={materials.CityProps1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface259_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_RedGLOW_0.geometry}
          material={materials.RedGLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_RedGLOW_0_1.geometry}
          material={materials.RedGLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_4.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_5.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
      </group>
      <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface260_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface261_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps1GLOW_0_1.geometry}
          material={materials.CityProps1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface259_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_6.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_4.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_7.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_5.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_8.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_GreenGlow_0.geometry}
          material={materials.GreenGlow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_1.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_9.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_6.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_10.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_7.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_11.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_GreenGlow_0_1.geometry}
          material={materials.GreenGlow}
        />
      </group>
      <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface260_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface261_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps1GLOW_0_2.geometry}
          material={materials.CityProps1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface259_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_4.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_4.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_12.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_8.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_13.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_9.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_14.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_10.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_2.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_5.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_5.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_15.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_RedGLOW_0_2.geometry}
          material={materials.RedGLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_16.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_11.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_17.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_12.geometry}
          material={materials.CityProps}
        />
      </group>
      <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface260_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface261_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface791_CityProps1GLOW_0_3.geometry}
          material={materials.CityProps1GLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface259_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_6.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_6.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_18.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_13.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_19.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_14.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_20.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_GreenGlow_0_2.geometry}
          material={materials.GreenGlow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface750_CityProps_0_3.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface752_CityProps_0_7.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_CityProps_0_7.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_21.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_15.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_22.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_CityProps_0_16.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_CityProps_0_23.geometry}
          material={materials.CityProps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface739_GreenGlow_0_3.geometry}
          material={materials.GreenGlow}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface839_WhiteGlow1_0.geometry}
        material={materials.WhiteGlow1}
        position={[-22656.896, 0, 7394.786]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface838_WhiteGlow1_0.geometry}
        material={materials.WhiteGlow1}
        position={[-28598.895, 0, -14300.698]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface837_WhiteGlow1_0.geometry}
        material={materials.WhiteGlow1}
        position={[-21450.221, 0, 7149.48]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface750_WhiteGlow1_0.geometry}
        material={materials.WhiteGlow1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LM_Basketball9_Basketball_0.geometry}
        material={materials.Basketball}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LM_Basketball10_Basketball_0.geometry}
        material={materials.Basketball}
        position={[27000, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LM_Basketball11_Basketball_0.geometry}
        material={materials.Basketball}
        position={[-7150.001, 0, -46650]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LM_Clinic2_Clinic_0.geometry}
        material={materials.Clinic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube45_FillerBuildings1GLOW_0.geometry}
        material={materials.FillerBuildings1GLOW}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube52_FillerBuildings1_0.geometry}
        material={materials.FillerBuildings1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group29_FillerBuildings1_0.geometry}
        material={materials.FillerBuildings1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Filler_Apartments1_group59_FillerBuildings1_0.geometry}
        material={materials.FillerBuildings1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group41_FillerBuildings1_0.geometry}
        material={materials.FillerBuildings1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group60_FillerBuildings1_0.geometry}
        material={materials.FillerBuildings1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Filler_Apartments2_FillerBuildings1_0.geometry}
        material={materials.FillerBuildings1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BD_ConcreteBlock1_RoadsGround_0.geometry}
        material={materials.RoadsGround}
      />
      <group position={[-30500, 20, -8950]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube1_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[400, 150, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube18_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1300, 2550, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube19_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1950, 2550, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube20_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[400, 2550, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube26_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-2450, 2550, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube27_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-3100, 2550, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube28_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-3100, 150, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube31_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1498.955, 668.314, 191.28]}
          scale={[0.846, 0.543, 0.846]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube32_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-2645.7, 668.314, 191.28]}
          scale={[0.846, 0.543, 0.846]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube52_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-4020.799, 2823.8, 430.435]}
          scale={[0.881, 0.623, 0.881]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube53_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-3670.744, 2823.8, -444.378]}
          scale={[2.881, 0.623, 0.515]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube54_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-3670.744, 2823.8, -205.884]}
          scale={[2.881, 0.623, 0.515]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube55_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-2185.541, 2465.949, 315.552]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube56_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-2185.541, 2465.949, -265.65]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube57_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[413.493, 2823.8, 430.435]}
          scale={[0.881, 0.623, 0.881]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube58_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-2564.953, 2465.949, -265.65]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube59_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-2564.953, 2465.949, 315.552]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube60_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1421.358, 2465.949, -265.65]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube61_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1421.358, 2465.949, 315.552]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube62_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1041.946, 2465.949, -265.65]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube63_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-1041.946, 2465.949, 315.552]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.772, 0.623, 0.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube64_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-525.839, 2945.761, -37.157]}
          scale={[0.756, 2.249, 0.113]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube65_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-525.839, 2945.761, -371.809]}
          scale={[0.756, 2.249, 0.113]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube66_LMProjects_0.geometry}
          material={materials.LMProjects}
          position={[-525.839, 2918.938, -76.66]}
          scale={[0.756, 1.891, 0.113]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0.geometry}
          material={materials.RoadsGround}
          position={[5700, 0, 8700.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_ConcreteBlock2_RoadsGround_0.geometry}
          material={materials.RoadsGround}
          position={[7500, 0, 8700.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__BD_ConcreteBlock3_RoadsGround_0.geometry}
          material={materials.RoadsGround}
          position={[3900, 0, 8700.001]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LMProjects2_pasted__group65_pasted__pCube39_LMProjects1GLOW_0.geometry}
        material={materials.LMProjects1GLOW}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LMProjects2_pasted__group65_pasted__pCube40_LMProjects_0.geometry}
        material={materials.LMProjects}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__pCylinder1_LMProjects_0.geometry}
        material={materials.LMProjects}
        position={[-32373.631, 2989.807, -9336.864]}
        rotation={[0, -0.718, 0]}
        scale={[0.171, 0.257, 0.171]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__group75_LMProjects_0.geometry}
        material={materials.LMProjects}
      />
    </group>
  )
}

useGLTF.preload('/models/small_city3D.glb')