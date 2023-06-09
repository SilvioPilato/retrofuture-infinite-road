import './App.css'
import { Canvas } from '@react-three/fiber';
import Terrain from './components/Terrain';
import { Sphere, Stars } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function App() {

  return (
    <Canvas camera={{fov: 90, near:0.1, rotation: [Math.PI / 2, 0 ,0], position: [0,0,1]}}>
      <Stars radius={600} count={1000}/>
      <color attach="background" args={['#19093f']} />
      <hemisphereLight position={[10, 0, 10]} />
      <Terrain rows={100} cols={20} cellSize={0.5} chunks={4}/>
      <Sphere position={[0,90, 5]} scale={[35, 35, 35]}>
        <meshBasicMaterial attach="material" color="#ff7f00"/>
      </Sphere>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={300} intensity={1.8}/>
      </EffectComposer>
    </Canvas>
  )
}

export default App
