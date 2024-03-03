import React from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model() {
  return (
    <Canvas style={{width:"700px", height:"700px"}}>
      <OrbitControls />
      <Scene />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" blur={0.7} background />
    </Canvas>
  )
}

const Scene = () => {
  const gltf = useLoader(GLTFLoader, 'lowTable.gltf')
  return (
    <>
      <primitive object={gltf.scene} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </>
  )
}