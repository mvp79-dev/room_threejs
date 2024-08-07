import { Environment, ScrollControls, Html, Scroll, SoftShadows } from '@react-three/drei'
import Model from './Model'
import { Suspense, useState } from 'react'
import { EffectComposer, N8AO } from '@react-three/postprocessing'

export default function Experience() {

  return (
    <>
      <SoftShadows intensity={ 1 } />
      <Suspense fallback  >
        <ScrollControls damping={1} maxSpeed={0.5} pages={10}>
            <Model position={ [ 0, -2, 0 ] } />
        </ScrollControls>
      </Suspense>
      <directionalLight 
        color={ "#FCEBE4" } shadow-bias={-0.001} castShadow position={[-5, 25, 25]} 
        intensity={1} shadow-mapSize-width={4096} shadow-mapSize-height={4096} 
      >
        <orthographicCamera attach="shadow-camera" args={[-50, 50, -50, 50, 0.1, 100]} />
      </directionalLight>
      <EffectComposer disableNormalPass >
        <N8AO aoRadius={20} distanceFalloff={0.2} intensity={1.7} screenSpaceRadius quality="high" halfRes  />
      </EffectComposer>
      <Environment files="./env4.hdr" background backgroundBlurriness={ 0 } backgroundIntensity={1} environmentIntensity={0} />
      {/* <ambientLight intensity={ 0.5 } /> */}

      </>
  )
}