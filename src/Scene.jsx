import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

const F_PTS = [[0,0],[.4,0],[.4,.52],[.85,.52],[.85,.84],[.4,.84],[.4,1.15],[1.05,1.15],[1.05,1.5],[0,1.5]]
const T_PTS = [[.45,0],[.85,0],[.85,1.12],[1.3,1.12],[1.3,1.5],[0,1.5],[0,1.12],[.45,1.12]]

function letterGeo(pts, cx) {
  const s = new THREE.Shape()
  pts.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)))
  s.closePath()
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.55, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.04, bevelSegments: 4, curveSegments: 4 })
  g.translate(-cx, -0.75, -0.275)
  return g
}

function Letters({ reflect, reduced }) {
  const gF = useMemo(() => letterGeo(F_PTS, 0.52), [])
  const gT = useMemo(() => letterGeo(T_PTS, 0.65), [])
  const fRef = useRef(), tRef = useRef()
  useFrame(({ clock }) => {
    const t = reduced ? 99 : clock.elapsedTime
    const e = 1 - Math.pow(1 - Math.min(Math.max((t - 0.2) / 1.8, 0), 1), 4)
    const fl = reduced ? 0 : 1
    fRef.current.position.set(THREE.MathUtils.lerp(-4.4, -0.7, e), Math.sin(t * 0.7) * 0.03 * fl, 0.25)
    tRef.current.position.set(THREE.MathUtils.lerp(4.2, 0.55, e), Math.sin(t * 0.7 + 2) * 0.035 * fl, -0.35)
  })
  const ghosts = [0.26, 0.18, 0.12, 0.08, 0.05]
  return (
    <>
      <group ref={fRef} rotation={[0.06, 0.42, -0.03]}>
        <mesh geometry={gF} castShadow>
          {reflect
            ? <meshBasicMaterial color="#86142f" transparent opacity={0.24} side={THREE.DoubleSide} />
            : <meshPhysicalMaterial color="#86142f" metalness={0.35} roughness={0.28} clearcoat={1} clearcoatRoughness={0.15} envMapIntensity={1.3} />}
        </mesh>
        {!reflect && ghosts.map((o, i) => (
          <mesh key={i} geometry={gF} position={[-(i + 1) * 0.2, -(i + 1) * 0.015, -0.05 * (i + 1)]}>
            <meshBasicMaterial color="#86142f" transparent opacity={o} depthWrite={false} />
          </mesh>
        ))}
      </group>
      <group ref={tRef} rotation={[0.06, -0.38, 0.03]} scale={0.95}>
        <mesh geometry={gT}>
          {reflect
            ? <meshBasicMaterial color="#9cc8e6" transparent opacity={0.3} side={THREE.DoubleSide} />
            : <meshPhysicalMaterial color="#b4d8f0" metalness={0.15} roughness={0.1} clearcoat={1} clearcoatRoughness={0.08} emissive="#5fa6d6" emissiveIntensity={0.22} envMapIntensity={1.6} />}
        </mesh>
      </group>
    </>
  )
}

function Spark({ reduced }) {
  const ref = useRef()
  const tex = useMemo(() => {
    const c = document.createElement('canvas'); c.width = c.height = 256
    const x = c.getContext('2d')
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128)
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.12, 'rgba(225,244,255,.95)')
    g.addColorStop(0.35, 'rgba(150,205,240,.35)'); g.addColorStop(1, 'rgba(150,205,240,0)')
    x.fillStyle = g; x.fillRect(0, 0, 256, 256)
    x.strokeStyle = 'rgba(255,255,255,.85)'; x.lineWidth = 1.2
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 + 0.3, r = 70 + (i % 3) * 25
      x.beginPath(); x.moveTo(128, 128); x.lineTo(128 + Math.cos(a) * r, 128 + Math.sin(a) * r); x.stroke() }
    return new THREE.CanvasTexture(c)
  }, [])
  useFrame(({ clock }) => {
    const t = reduced ? 3 : clock.elapsedTime
    const flash = Math.exp(-Math.max(t - 1.7, 0) * 1.6) * 0.6
    const s = 1.5 + Math.sin(t * 1.6) * 0.06 + flash
    ref.current.scale.set(s, s, 1)
    ref.current.material.rotation = t * 0.05
    ref.current.material.opacity = t < 1.2 ? 0 : 1
  })
  return (
    <sprite ref={ref} renderOrder={20}>
      <spriteMaterial map={tex} transparent depthTest={false} blending={THREE.AdditiveBlending} />
    </sprite>
  )
}

function Shards({ reduced }) {
  const N = 80, ref = useRef(), dummy = useMemo(() => new THREE.Object3D(), [])
  const data = useMemo(() => Array.from({ length: N }, () => ({
    dir: new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, Math.random() - 0.35).normalize(),
    speed: 0.05 + Math.random() * 0.12, off: Math.random(), size: 0.012 + Math.random() * 0.055, spin: Math.random() * 2, ice: Math.random() > 0.5
  })), [])
  useEffect(() => {
    const c = new THREE.Color()
    data.forEach((d, i) => ref.current.setColorAt(i, c.set(d.ice ? '#cfe8f8' : '#8a1633')))
    ref.current.instanceColor.needsUpdate = true
  }, [data])
  useFrame(({ clock }) => {
    const t = reduced ? 4 : clock.elapsedTime
    data.forEach((d, i) => {
      const p = (t * d.speed + d.off) % 1, r = 0.08 + p * 1.5
      dummy.position.copy(d.dir).multiplyScalar(r)
      dummy.scale.setScalar(d.size * (1 - p * 0.6) * (t < 1.7 ? 0 : 1))
      dummy.rotation.set(t * d.spin, t * d.spin * 0.7, 0); dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    })
    ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, N]}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial flatShading metalness={0.3} roughness={0.3} />
    </instancedMesh>
  )
}

function Orbit({ a, b, rot, color, speed, orbs, k }) {
  const refs = useRef([])
  const line = useMemo(() => {
    const pts = new THREE.EllipseCurve(0, 0, a, b).getPoints(220).map(p => new THREE.Vector3(p.x, p.y, 0))
    return new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.75 }))
  }, [a, b, color])
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * k
    orbs.forEach((o, i) => { const th = o.phase + t * speed; refs.current[i].position.set(Math.cos(th) * a, Math.sin(th) * b, 0) })
  })
  return (
    <group rotation={rot}>
      <primitive object={line} />
      {orbs.map((o, i) => (
        <mesh key={i} ref={el => (refs.current[i] = el)}>
          <sphereGeometry args={[o.r, 32, 32]} />
          {o.ice
            ? <meshPhysicalMaterial color="#c9e3f5" roughness={0.05} metalness={0.1} clearcoat={1} emissive="#8fc2e6" emissiveIntensity={0.25} envMapIntensity={1.6} />
            : <meshPhysicalMaterial color="#7d1230" roughness={0.2} clearcoat={1} envMapIntensity={1.2} />}
        </mesh>
      ))}
    </group>
  )
}

function Composition({ reduced, pointer }) {
  const comp = useRef()
  const { viewport } = useThree()
  const w = viewport.width, h = viewport.height
  const wide = viewport.aspect > 1.15
  const s = wide ? (h * 0.4) / 1.5 : (w * 0.8) / 2.5
  const pos = wide ? [w * 0.057 + 0.06 * s + 1.8, h * 0.02, 0] : [w * 0.03 + 1.2, -h * 0.17, 0]
  const k = reduced ? 0 : wide ? 1 : 0.45
  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime, g = comp.current, p = pointer.current
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, Math.sin(t * 0.2) * 0.07 * k + p.x * 0.06 * k, 2.5, dt)
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -p.y * 0.04 * k, 2.5, dt)
    g.position.y = Math.sin(t * 0.55) * 0.05 * k
  })
  return (
    <group position={pos} scale={s}>
      <group ref={comp}>
        <Letters reduced={reduced} />
        <group position={[0, -2, 0]} scale={[1, -1, 1]}><Letters reflect reduced={reduced} /></group>
        <group position={[-0.05, -0.1, 0.55]}><Spark reduced={reduced} /><Shards reduced={reduced} /></group>

      </group>
    </group>
  )
}

export default function Scene({ reduced }) {
  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const m = e => { pointer.current = { x: (e.clientX / innerWidth) * 2 - 1, y: (e.clientY / innerHeight) * 2 - 1 } }
    addEventListener('pointermove', m, { passive: true })
    return () => removeEventListener('pointermove', m)
  }, [])
  return (
    <Canvas dpr={[1, 1.75]} frameloop={reduced ? 'demand' : 'always'} camera={{ position: [0, 0.9, 9.5], fov: 32 }}
      gl={{ antialias: true, alpha: true }} onCreated={({ camera }) => camera.lookAt(0, 0, 0)}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[-4, 5, 6]} intensity={2.4} color="#fff6f6" />
      <directionalLight position={[6, 2, -2]} intensity={2.6} color="#cfe8ff" />
      <pointLight position={[0.5, 0, 2.5]} intensity={10} color="#bfe0fa" />
      <Environment resolution={256} environmentIntensity={0.7}>
        <Lightformer form="rect" intensity={3.5} color="#e3f2ff" position={[-5, 3, -3]} scale={[9, 3, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#ffffff" position={[5, 4, 5]} scale={[7, 2, 1]} />
        <Lightformer form="rect" intensity={1.5} color="#cfe6f7" position={[0, -3, 4]} scale={[10, 1.5, 1]} />
      </Environment>
      <Composition reduced={reduced} pointer={pointer} />
    </Canvas>
  )
}
