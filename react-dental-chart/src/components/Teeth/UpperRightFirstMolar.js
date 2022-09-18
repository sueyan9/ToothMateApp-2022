import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGLTF } from '@react-three/drei'

const CameraController = () => {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.minDistance = 3
    controls.maxDistance = 6
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return null
}

const RightUpperFirstMolar = ({ ...props }) => {
  const group = useRef()

  const { nodes, materials } = useGLTF('/assets/Right_Upper_First_Molar.glb')
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.04, -1.23, 0]} rotation={[Math.PI / 2, 0, 0.04]} scale={0.54}>
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_1.geometry} material={materials['1']} material-color={'lightgreen'}/>
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_3.geometry} material={materials['2']} material-color={'lightgreen'}/>
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_4.geometry} material={materials['3']} material-color={'lightgreen'}/>
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_5.geometry} material={materials['4']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_6.geometry} material={materials['5']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_7.geometry} material={materials['6']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_8.geometry} material={materials['7']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_9.geometry} material={materials['8']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_10.geometry} material={materials['9']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_11.geometry} material={materials['10']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_12.geometry} material={materials['11']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_13.geometry} material={materials['12']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_14.geometry} material={materials['13']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_15.geometry} material={materials['14']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_16.geometry} material={materials['15']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_17.geometry} material={materials['16']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_18.geometry} material={materials['17']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_19.geometry} material={materials['18']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_20.geometry} material={materials['19']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_21.geometry} material={materials['20']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_22.geometry} material={materials['21']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_23.geometry} material={materials['22']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_24.geometry} material={materials['23']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_25.geometry} material={materials['24']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_26.geometry} material={materials['25']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_27.geometry} material={materials['26']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_28.geometry} material={materials['27']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_29.geometry} material={materials['28']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_30.geometry} material={materials['29']} />
        <mesh geometry={nodes.Human_Teeth_Upper_First_Molar_Geo001_2.geometry} material={materials['30']} />
      </group>
    </group>
  )
}

export const UpperRightFirstMolar = () => {
  const back = () => {
    return window.history.back()
  }
  return (
    <>
     <button style={{ marginTop: 10 }} onClick={back}>
        Back to Dental Chart
      </button>
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.7} />
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[10, 15, 10]} />
        <Suspense fallback={null}>
          <RightUpperFirstMolar />
        </Suspense>
      </Canvas>
      <div>Clicked on upper right first molar</div> 
    </>
  )
}
