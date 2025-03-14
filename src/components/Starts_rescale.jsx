/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 starts_rescale.glb 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Starts_rescale(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF(`${import.meta.env.BASE_URL}models/starts_rescale.glb`)
  const { actions } = useAnimations(animations, group)

  // Animación de rotación
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001; // Velocidad de rotación lenta
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="c0d234900f694cb2b1f4f457c9f91791fbx" rotation={[Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="StarCluster1" scale={14.803}>
                  <group name="Object_11" position={[-1.993, 0, 0]}>
                    <mesh name="StarCluster1_01_-__0" geometry={nodes['StarCluster1_01_-__0'].geometry} material={materials['01_-']} position={[-24.617, -2.848, -927.721]} scale={[15.493, 3.025, 5.415]} />
                  </group>
                </group>
                <group name="StarCluster2" scale={19.606}>
                  <group name="Object_8" position={[-1.549, 0, 0]}>
                    <mesh name="StarCluster2_02_-__0" geometry={nodes['StarCluster2_02_-__0'].geometry} material={materials['02_-']} position={[-17.316, -10.275, -461.479]} scale={[16.681, 12.069, 5.415]} />
                  </group>
                </group>
                <group name="StarCluster3" scale={100}>
                  <group name="Object_5" position={[-0.703, 0, 0]}>
                    <mesh name="StarCluster3_03_-__0" geometry={nodes['StarCluster3_03_-__0'].geometry} material={materials['03_-']} position={[-2.359, -3.077, -191.35]} scale={[9.955, 16.918, 5.415]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/starts_rescale.glb`)
