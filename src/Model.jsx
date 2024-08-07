import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, ScrollControls, useScroll, Html, MeshTransmissionMaterial, useVideoTexture, Instances, Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

export default function Model(props, { handleWhiteButtonOneClick }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const scroll = useScroll()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./ABC9.glb')
  const { actions, ref } = useAnimations(animations, group)
  const [anim3Playing, setAnim3Playing] = useState(false);

  useEffect(() => void (actions.cam2.reset().play().paused = true), [])
  useFrame(() => (actions.cam2.time = actions.cam2.getClip().duration * scroll.offset))

  useEffect(() => {
    // Loop through all animations and start them except Anim_0
    for (const key in actions) {
      if (key !== 'cam2') {
        actions[key].reset().play();
      }
    }
  }, []); // Run this effect only once after component mount
  const handleAnim3Click = () => {
    if (!anim3Playing) {
      // If Anim_3 is not playing, start it
      actions.shoe.reset().play();
      setAnim3Playing(true);
    } else {
      // If Anim_3 is playing, stop it
      actions.shoe.stop();
      setAnim3Playing(false);
    }
  };

  const myVideoTexture = useVideoTexture("10.mp4")



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Boole" position={[-1561.075, 718.351, -75.306]} />
        <group
          name="uvs_done"
          position={[-1.894, 2.155, -0.003]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <group name="artworks" position={[-220.481, 348.246, 113.352]}>
            <group
              name="mirror_artwork"
              position={[-168.015, 874.106, -40.165]}
              rotation={[0, 0, 0.135]}>
              <mesh
                name="Cube_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube_4.geometry}
                material={materials.mirror}
                position={[20.314, -27.899, -37.723]}
                rotation={[0.08, -0.114, -0.955]}
              />
            </group>
            <mesh
              name="monolit"
              castShadow
              receiveShadow
              geometry={nodes.monolit.geometry}
              position={[2021.128, -347.906, -47.809]}
              rotation={[ 0, Math.PI / 1, 0 ]}
            >
              <meshBasicMaterial map={myVideoTexture} />
            </mesh>
            <mesh
              name="neuendorf_stool"
              castShadow
              receiveShadow
              geometry={nodes.neuendorf_stool.geometry}
              material={materials.travertine}
              position={[-703.125, -1946.184, 36.79]}
              rotation={[0, 0, 2.624]}
            />
            <group name="streichholzköpfe" position={[-884.952, 1048.841, 53.164]}>
              <group name="Null_2" position={[168.837, 172.448, -13.351]}>
                <mesh
                  name="Cube_9_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_9_3.geometry}
                  material={materials.alu}
                  position={[0, 0, 33.289]}
                  rotation={[0, 0, -Math.PI / 3]}
                />
              </group>
              <group name="Null_3" position={[263.192, 231.636, -13.351]}>
                <mesh
                  name="Cube_9_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_9_4.geometry}
                  material={materials.alu}
                  position={[0, 0, 33.289]}
                  rotation={[0, 0, -Math.PI / 3]}
                />
              </group>
              <group name="Null_4" position={[92.458, 172.448, -13.351]}>
                <mesh
                  name="Cube_9_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_9_2.geometry}
                  material={materials.alu}
                  position={[0, 0, 33.289]}
                  rotation={[0, 0, -Math.PI / 3]}
                />
              </group>
              <group name="Null_5" position={[172.134, 238.465, -13.351]}>
                <mesh
                  name="Cube_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_9.geometry}
                  material={materials.alu}
                  position={[0, 0, 33.289]}
                  rotation={[0, 0, -Math.PI / 3]}
                />
              </group>
            </group>
          </group>
          <group
            name="basic_architecture"
            position={[-2.488, 0.34, -20.521]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group name="ceiling" position={[0, -127.764, 0]} />
            <group name="floor2" position={[191.913, 235.995, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                name="Boole_3"
                castShadow
                receiveShadow
                geometry={nodes.Boole_3.geometry}
                material={materials.white}
                position={[-92.225, -0.511, -2.283]}
              />
            </group>
            <group name="lower_walls">
              <mesh
                name="Sweep_2"
                castShadow
                receiveShadow
                geometry={nodes.Sweep_2.geometry}
                material={materials.grey}
                position={[0, 305.37, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <mesh
              name="Plane_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane_3.geometry}
              material={nodes.Plane_3.material}
              position={[-1369.161, 254.322, -718.351]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              name="stair2"
              castShadow
              receiveShadow
              geometry={nodes.stair2.geometry}
              material={materials.grey}
              position={[-921.076, 214.067, 1591.675]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
            />
            <mesh
              name="stair2_1"
              castShadow
              receiveShadow
              geometry={nodes.stair2_1.geometry}
              material={materials.grey}
              position={[-920.47, 214.067, -1591.33]}
              rotation={[-Math.PI / 2, 0, -2.618]}
            />
            <mesh
              name="stair_1"
              castShadow
              receiveShadow
              geometry={nodes.stair_1.geometry}
              material={materials.grey}
              position={[-921.076, 228.936, 1591.675]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
            />
            <mesh
              name="stair_1_1"
              castShadow
              receiveShadow
              geometry={nodes.stair_1_1.geometry}
              material={materials.grey}
              position={[-920.47, 228.936, -1591.33]}
              rotation={[-Math.PI / 2, 0, -2.618]}
            />
          </group>
          <group name="bench" position={[221.534, -1254.721, 196.315]} rotation={[0, 0, 0.253]}>
            <mesh
              name="Cube_11"
              castShadow
              receiveShadow
              geometry={nodes.Cube_11.geometry}
              material={materials['concrete rough']}
              position={[388.407, 214.459, 3.058]}
              rotation={[-1.576, 0.16, 1.255]}
            />
            <mesh
              name="Cube_11_Instance"
              castShadow
              receiveShadow
              geometry={nodes.Cube_11_Instance.geometry}
              material={materials['concrete rough']}
              position={[148.511, 209.346, 3.058]}
              rotation={[-1.576, -0.131, 1.254]}
            />
          </group>
          <group name="floor1" position={[189.425, 0.34, 215.474]}>
            <group name="Null" position={[-184.449, -1.021, -4.713]} scale={1.022}>
              <group name="bambus_Instance" position={[-371.802, -1841.9, -21.246]} />
              <mesh
                name="FBX_AS01_BambusaVulgaris_2_Instance"
                castShadow
                receiveShadow
                geometry={nodes.FBX_AS01_BambusaVulgaris_2_Instance.geometry}
                material={materials.Material}
                position={[933.64, -807.461, 26.582]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.869}
              />
              <mesh
                name="FBX_AS01_BambusaVulgaris_2_Instance_1"
                castShadow
                receiveShadow
                geometry={nodes.FBX_AS01_BambusaVulgaris_2_Instance_1.geometry}
                material={materials.Material}
                position={[-1347.023, 704.107, 26.582]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.869}
              />
              <mesh
                name="FBX_AS01_BambusaVulgaris_2_Instance_1_2"
                castShadow
                receiveShadow
                geometry={nodes.FBX_AS01_BambusaVulgaris_2_Instance_1_2.geometry}
                material={materials.Material}
                position={[1585.959, 678.939, 26.582]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.869}
              />
            </group>
          </group>
          <group name="glass_2" position={[-2.488, 0.34, -18.887]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cloner" position={[0, 98.243, 0]} rotation={[0, Math.PI / 6, 0]}>
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials.glass}
                position={[0, 0, -2200]}
              />
              <mesh
                name="Cube_1_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube_1_2.geometry}
                material={materials.glass}
                position={[1905.256, 0, 1100]}
                rotation={[Math.PI, -Math.PI / 3, Math.PI]}
              />
            </group>
            <mesh
              name="glass_save_1"
              castShadow
              receiveShadow
              geometry={nodes.glass_save_1.geometry}
              position={[0, -186.721, 0]}
              scale={0.981}
            >
             {/* <meshPhysicalMaterial roughness={0} transmission={1}/> */}
             <meshPhongMaterial color="#f3f1ed" opacity={0.25} transparent />
            </mesh>
          </group>
          <group name="inner_circle" position={[4.976, -0.681, 39.407]}>
            <mesh
              name="top_of_bench"
              castShadow
              receiveShadow
              geometry={nodes.top_of_bench.geometry}
              material={materials.grey}
              position={[0, 0, 37.801]}
            />
          </group>
          <group name="mirror_stand" position={[-348.422, 1212.097, -63.118]}>
            <mesh
              name="Cloner_4"
              castShadow
              receiveShadow
              geometry={nodes.Cloner_4.geometry}
              material={materials.alu}
              position={[-1.988, -1.864, 19.028]}
            />
          </group>
          <mesh
            name="rock_remesh"
            castShadow
            receiveShadow
            geometry={nodes.rock_remesh.geometry}
            material={materials.rock}
            position={[6.167, -2.44, 213.442]}
            rotation={[-0.022, -0.172, 0.684]}
          />
          <group name="stools" position={[-835.07, -492.569, 176.539]}>
            <group name="Null_1_2" position={[3.963, -110.474, -15.429]}>
              <mesh
                name="Boole_2"
                castShadow
                receiveShadow
                geometry={nodes.Boole_2.geometry}
                material={materials.alu}
                position={[-3.286, 2.393, -27.029]}
              />
            </group>
            <group
              name="Null_2_2"
              position={[-3.964, 110.474, 15.429]}
              rotation={[-1.564, 0.108, -0.931]}>
              <mesh
                name="Plane"
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials.alu}
                position={[-17.583, 13.101, -0.142]}
                rotation={[1.56, 0.93, 0.117]}
              />
            </group>
          </group>
          <group name="teller" position={[336.249, -475.197, 109.654]}>
            <mesh
              name="Disc"
              castShadow
              receiveShadow
              geometry={nodes.Disc.geometry}
              material={nodes.Disc.material}
              position={[1.482, 0.881, -5.775]}
            />
            <group name="empore" position={[-4.495, -2.879, 6.744]} rotation={[0, 0, 0.57]}>
              <group name="Null_1" position={[7.922, 4.435, -2.81]} rotation={[0, 0, 1.753]}>
                <mesh
                  name="Cube_1_fracturepart3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_1_fracturepart3.geometry}
                  material={materials['slab below plate']}
                  position={[1.042, 0.419, 0]}
                  rotation={[0, 0, -2.322]}
                />
              </group>
              <group name="Null_3_2" position={[-2.255, -0.214, 0]}>
                <mesh
                  name="Cube_1_fracturepart1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_1_fracturepart1.geometry}
                  material={materials['slab below plate']}
                  position={[3.872, -1.828, 0]}
                  rotation={[0, 0, -0.57]}
                />
              </group>
            </group>
            <mesh
              name="glass"
              castShadow
              receiveShadow
              geometry={nodes.glass.geometry}
              material={materials['food hull']}
              position={[1.498, 0.96, 0.686]}
            />
          </group>
        </group>
        {/* <Instances geometry={nodes.Volume_Mesher_1.geometry} material={materials['Material.001']}>
          <boxGeometry />
          <Instance position={[-11.227, 0.719, 16.352]} rotation={[Math.PI / 2, 0, -2.618]} scale={1} />
          <Instance position={[-12.024, 0.868, 15.692]} rotation={[Math.PI / 2, 0, -2.618]} scale={1} />
          <Instance position={[-10.317, 0.768, 16.284]} rotation={[Math.PI / 2, 0, -2.618]} scale={1} />
        </Instances> */}
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0.95, 0, 0.5]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0.05, 0, 0.6]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-0.75, 0, 0]}
        />
        {/* <mesh
          name="Volume_Mesher_1_Instance_2"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1_Instance_2.geometry}
          material={materials['Material.001']}
          position={[-11.227, 0.719, 16.352]}
          rotation={[Math.PI / 2, 0, -2.618]}
          scale={0.011}
        />
        <mesh
          name="Volume_Mesher_1_Instance_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1_Instance_1.geometry}
          material={materials['Material.001']}
          position={[-12.024, 0.868, 15.692]}
          rotation={[Math.PI / 2, 0, -2.618]}
          scale={0.011}
        />
        <mesh
          name="Volume_Mesher_1_Instance"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1_Instance.geometry}
          material={materials['Material.001']}
          position={[-10.317, 0.768, 16.284]}
          rotation={[Math.PI / 2, 0, -2.618]}
          scale={0.011}
        /> */}
        <mesh
          name="upper_walls_4"
          castShadow
          receiveShadow
          geometry={nodes.upper_walls_4.geometry}
          material={materials.grey}
          position={[-1.919, 2.628, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cube_0001"
          castShadow
          receiveShadow
          geometry={nodes.Cube_0001.geometry}
          position={[-13.88, 1.361, -58.787]}
          rotation={[0, -Math.PI / 6, Math.PI]}
          scale={0.01}
        >
          {/* <meshPhysicalMaterial thickness={5} roughness={0} clearcoat={0.25} clearcoatRoughness={0} transmission={1} ior={1} /> */}
          <meshPhongMaterial color="#f3f1ed" opacity={0.25} transparent />
        </mesh>
        <mesh
          name="Cube_1001"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1001.geometry}
          position={[-46.88, 1.361, -39.734]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.01}
        >
          {/* <meshPhysicalMaterial thickness={5} roughness={0} clearcoat={0.25} clearcoatRoughness={0} transmission={1} ior={1} /> */}
          <meshPhongMaterial color="#f3f1ed" opacity={0.25} transparent />
        </mesh>
        <mesh
          name="glass_save_1001"
          castShadow
          receiveShadow
          geometry={nodes.glass_save_1001.geometry}
          position={[-24.88, 4.211, -39.734]}
          rotation={[0, 0, -Math.PI]}
          scale={0.01}
        >
          {/* <MeshTransmissionMaterial thickness={10} roughness={0} transmission={1} ior={1.2} backside={true} clearcoat={1} clearcoatRoughness={0} /> */}
          <meshPhongMaterial color="#f3f1ed" opacity={0.25} transparent />
        </mesh>
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cloner_4001"
          castShadow
          receiveShadow
          geometry={nodes.Cloner_4001.geometry}
          material={materials.alu}
          position={[-44.055, 2.776, -39.84]}
          rotation={[1.574, -0.174, 2.407]}
          scale={0.01}
        />
        <mesh
          name="Extrude"
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={materials.grey}
          position={[-29.12, 3.579, -38.054]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="floor_oustide"
          castShadow
          receiveShadow
          geometry={nodes.floor_oustide.geometry}
          material={materials['concrete outside']}
          position={[-26.163, -0.399, -33.902]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="floor_oustide_1"
          castShadow
          receiveShadow
          geometry={nodes.floor_oustide_1.geometry}
          material={materials.white}
          position={[-26.163, -0.399, -33.902]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="floor_outside"
          castShadow
          receiveShadow
          geometry={nodes.floor_outside.geometry}
          material={materials['concrete outside']}
          position={[7.741, -0.239, -2.917]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Connect"
          castShadow
          receiveShadow
          geometry={nodes.Connect.geometry}
          material={materials['grey.001']}
          position={[7.741, -0.239, -2.917]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Buch_1"
          castShadow
          receiveShadow
          geometry={nodes.Buch_1.geometry}
          material={materials.act6}
          position={[0.673, 0.979, -5.218]}
          rotation={[0, -0.454, 0]}
          scale={0.01}
        />
        <mesh
          name="Buch"
          castShadow
          receiveShadow
          geometry={nodes.Buch.geometry}
          material={materials.act6_0}
          position={[0.978, 0.979, -5.065]}
          rotation={[0, -0.494, 0]}
          scale={0.01}
        />
        <mesh
          name="Magazine_20_07_cm_x_27_45_cm"
          castShadow
          receiveShadow
          geometry={nodes.Magazine_20_07_cm_x_27_45_cm.geometry}
          material={materials['Material.003']}
          position={[2.026, 0.984, -4.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="kitchen_1_1"
          castShadow
          receiveShadow
          geometry={nodes.kitchen_1_1.geometry}
          material={materials['Material.004']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="kitchen_1_0"
          castShadow
          receiveShadow
          geometry={nodes.kitchen_1_0.geometry}
          material={materials['Material.005']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="Plane_1"
          position={[-15.076, 0.909, -57.122]}
          rotation={[Math.PI / 2, 0, 0.536]}
          scale={0.01}>
          <mesh
            name="Mesh047"
            castShadow
            receiveShadow
            geometry={nodes.Mesh047.geometry}
            material={materials.matte}
          />
          <mesh
            name="Mesh047_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh047_1.geometry}
            material={materials['kitchen.001']}
          />
          <mesh
            name="Mesh047_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh047_2.geometry}
            material={materials.matte}
          />
          <mesh
            name="Mesh047_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh047_3.geometry}
            material={materials.alu}
          />
        </group>
        <group
          name="Plane001"
          position={[-15.61, 0.913, -56.223]}
          rotation={[Math.PI / 2, 0, 0.536]}
          scale={0.01}>
          <mesh
            name="Mesh048"
            castShadow
            receiveShadow
            geometry={nodes.Mesh048.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Mesh048_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh048_1.geometry}
            material={materials['kitchen.001']}
          />
          <mesh
            name="Mesh048_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh048_2.geometry}
            material={materials.matte}
          />
        </group>
        <group
          name="monolit001"
          position={[-43.834, 1.896, -39.799]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Mesh046"
            castShadow
            receiveShadow
            geometry={nodes.Mesh046.geometry}
            material={materials.alu}
          />
          <mesh
            name="Mesh046_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh046_1.geometry}
            material={materials['emission.001']}
          />
        </group>
        <mesh
          name="Plane_4"
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.mirror2}
          position={[-41.697, 3.878, -39.799]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['sand.001']}
          position={[-1.844, -0.071, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Volume_Mesher_remesh_remesh"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_remesh_remesh.geometry}
          material={materials['500gsm_cotton_grey_FRONT_43288_1.002']}
          position={[-1.765, 1.294, -0.184]}
          rotation={[1.697, -0.56, 0]}
          scale={0.01}
        />
        <mesh
          name="floor_split"
          castShadow
          receiveShadow
          geometry={nodes.floor_split.geometry}
          material={materials['Seychelles_Beige_Marble_wgildfbv.001']}
          position={[-26.163, -0.429, -33.902]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="titles"
          castShadow
          receiveShadow
          geometry={nodes.titles.geometry}
          material={materials.matte}
          position={[-10.897, 0.001, -15.415]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Boole_3001"
          castShadow
          receiveShadow
          geometry={nodes.Boole_3001.geometry}
          material={materials.grey}
          position={[-30.059, 0.117, -48.062]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="camera3"
          castShadow
          receiveShadow
          geometry={nodes.camera3.geometry}
          material={nodes.camera3.material}
          position={[-9.109, 1.27, -11.895]}
          rotation={[1.57, 0.001, 2.593]}
          scale={0.01}
        >
          <PerspectiveCamera far={ 10000 } rotation={ [ Math.PI * -0.5, 0, 0 ] } fov={isMobile ? 85 : 40} makeDefault/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./ABC9.glb')
