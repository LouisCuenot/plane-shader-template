import React from 'react'
import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'

import planeMaterialFrag from './shaders/planeMaterial.frag?raw'
import planeMaterialVert from './shaders/planeMaterial.vert?raw'
import { useRef } from 'react'

const PlaneMaterial = shaderMaterial(
  {
    uTime:0
  },
  planeMaterialVert,
  planeMaterialFrag
)

extend({PlaneMaterial})

const Scene = () => {

  const planeMaterialRef = useRef()

  useFrame((state, delta)=>{
    if(planeMaterialRef.current){
      planeMaterialRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <>
  
        <mesh>
            <planeGeometry args={[3,3,32,32]}/>
            <planeMaterial ref={planeMaterialRef} uTime={0}/>
        </mesh>
    </>
  )
}

export default Scene