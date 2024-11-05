import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, ScrollControls, useScroll, Html, MeshTransmissionMaterial, useVideoTexture, Instances, Instance } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { KTX2Loader } from 'three-stdlib'

export default function Model(props, { handleWhiteButtonOneClick }) {

  const ktx2Loader = new KTX2Loader()
  ktx2Loader.setTranscoderPath('https://unpkg.com/three@0.168.0/examples/jsm/libs/basis/')
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const scroll = useScroll()
  const group = useRef()
  // const { nodes, materials, animations } = useGLTF('./output9.glb')
  const { gl } = useThree()
  const { nodes, materials, animations } = useGLTF('output9.glb', true, true, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl))
  })
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
        {/* <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['match optimized']}
          rotation={[Math.PI / 2, 0, 0]}
        /> */}
                <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[13.5, 0, 10.5]}
        />
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[20, 0, 25.7]}
        />
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-10, 0, 26]}
        />
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-28.7, 0, -12.5]}
        />
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-35.5, 0, -28]}
        />
        <mesh
          name="FBX_AS01_BambusaVulgaris_2"
          castShadow
          receiveShadow
          geometry={nodes.FBX_AS01_BambusaVulgaris_2.geometry}
          material={materials['bambus optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-5.5, 0, -28]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['match optimized']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['match optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0.95, 0, 0.5]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['match optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0.05, 0, 0.6]}
        />
        <mesh
          name="Volume_Mesher_1"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_1.geometry}
          material={materials['match optimized']}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-0.75, 0, 0]}
        />
        <mesh
          name="Cloner_4001"
          castShadow
          receiveShadow
          geometry={nodes.Cloner_4001.geometry}
          material={materials.PaletteMaterial001}
          position={[-44.055, 2.776, -39.84]}
          rotation={[1.574, -0.174, 2.407]}
          scale={0.01}
        />
        <mesh
          name="Extrude"
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={materials.PaletteMaterial002}
          position={[-29.12, 3.579, -38.054]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Buch_1"
          castShadow
          receiveShadow
          geometry={nodes.Buch_1.geometry}
          material={materials.buch2}
          position={[0.673, 0.979, -5.218]}
          rotation={[0, -0.454, 0]}
          scale={0.01}
        />
        <mesh
          name="Buch"
          castShadow
          receiveShadow
          geometry={nodes.Buch.geometry}
          material={materials.buch1}
          position={[0.978, 0.979, -5.065]}
          rotation={[0, -0.494, 0]}
          scale={0.01}
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
            material={materials.PaletteMaterial002}
          />
          <mesh
            name="Mesh047_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh047_1.geometry}
            material={materials.PaletteMaterial003}
          />
        </group>
        <mesh
          name="Plane_4"
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.PaletteMaterial004}
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
          name="floor_split"
          castShadow
          receiveShadow
          geometry={nodes.floor_split.geometry}
          material={materials['black tiles']}
          position={[-26.163, -0.429, -33.902]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="monolit_1"
          castShadow
          receiveShadow
          geometry={nodes.monolit_1.geometry}
          material={materials['led mirror']}
          position={[-43.834, 1.896, -39.799]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="monolit"
          castShadow
          receiveShadow
          geometry={nodes.monolit.geometry}
          material={materials.PaletteMaterial005}
          position={[16.112, 1.499, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <meshBasicMaterial map={myVideoTexture} />
        </mesh>
        <mesh
          name="Aset_nature_rock_S_wenobfys_LOD1"
          castShadow
          receiveShadow
          geometry={nodes.Aset_nature_rock_S_wenobfys_LOD1.geometry}
          material={materials['rock.001']}
          position={[-1.825, -0.043, -0.076]}
          rotation={[1.567, -0.179, 0.712]}
          scale={0.01}
        />
        <mesh
          name="Cube_0"
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials.PaletteMaterial002}
          position={[-19.14, 3.498, -29.801]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <meshPhongMaterial color="#f3f1ed" opacity={0.25} transparent />
        </mesh>
        <group
          name="CAM"
          position={[-9.109, 1.27, -11.895]}
          rotation={[1.57, 0.001, 2.593]}
          scale={0.01}
        >
          <PerspectiveCamera far={ 10000 } rotation={ [ Math.PI * -0.5, 0, 0 ] } fov={isMobile ? 85 : 40} makeDefault/>
        </group>
        <mesh
          name="Magazine_20_07_cm_x_27_45_cm"
          castShadow
          receiveShadow
          geometry={nodes.Magazine_20_07_cm_x_27_45_cm.geometry}
          material={materials.magazine}
          position={[2.026, 0.984, -4.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Boole_1001"
          castShadow
          receiveShadow
          geometry={nodes.Boole_1001.geometry}
          material={materials.floor}
          position={[7.741, -0.239, -2.917]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="floor_outside"
          castShadow
          receiveShadow
          geometry={nodes.floor_outside.geometry}
          material={materials['concrete outside']}
          position={[-9.211, -0.319, -18.41]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Volume_Mesher_remesh_remesh"
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher_remesh_remesh.geometry}
          material={materials.shoe3}
          position={[-1.765, 1.294, -0.184]}
          rotation={[-3.015, 0.019, 0.558]}
          scale={0.01}
        />
        <mesh
          name="Cube_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials['mirror artwork']}
          position={[-5.54, 1.8, 11.971]}
          rotation={[1.666, -0.102, -0.821]}
          scale={0.01}
        />
        <mesh
          name="neuendorf_stool"
          castShadow
          receiveShadow
          geometry={nodes.neuendorf_stool.geometry}
          material={materials.travertine}
          position={[-11.13, 0.653, -15.983]}
          rotation={[Math.PI / 2, 0, 2.624]}
          scale={0.01}
        />
        <mesh
          name="Cube_11"
          castShadow
          receiveShadow
          geometry={nodes.Cube_11.geometry}
          material={materials['slab below plate']}
          position={[3.546, 0.161, -9.504]}
          rotation={[-0.005, -0.093, 1.254]}
          scale={0.01}
        />
        <mesh
          name="Disc"
          castShadow
          receiveShadow
          geometry={nodes.Disc.geometry}
          material={materials.plate}
          position={[1.483, 1.116, -4.747]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="glass"
          castShadow
          receiveShadow
          geometry={nodes.glass.geometry}
          material={materials['food hull']}
          position={[1.483, 1.051, -4.746]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <meshPhongMaterial color="#f3f1ed" opacity={0.25} transparent />
        </mesh>
        <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
          position={[-12.837, 0.864, -25.957]}
          rotation={[Math.PI / 2, 0, -0.531]}
          scale={0.01}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.PaletteMaterial004}
          position={[-15.369, 1.773, -56.034]}
          rotation={[Math.PI / 2, 0, 0.536]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./output9.glb')
