'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Data ─────────────────────────────────────────────────────────────────────
const INDIA_PINS = [
  { id: 'delhi',     lat: 28.6,  lng: 77.2,  label: 'New Delhi'  },
  { id: 'mumbai',    lat: 19.1,  lng: 72.8,  label: 'Mumbai'     },
  { id: 'bangalore', lat: 12.9,  lng: 77.6,  label: 'Bangalore'  },
  { id: 'chennai',   lat: 13.1,  lng: 80.3,  label: 'Chennai'    },
  { id: 'hyderabad', lat: 17.4,  lng: 78.5,  label: 'Hyderabad'  },
  { id: 'kolkata',   lat: 22.6,  lng: 88.4,  label: 'Kolkata'    },
]

const GLOBAL_PINS = [
  { id: 'sf',        lat: 37.8,  lng: -122.4, label: 'San Francisco' },
  { id: 'nyc',       lat: 40.7,  lng: -74.0,  label: 'New York'      },
  { id: 'london',    lat: 51.5,  lng: -0.1,   label: 'London'        },
  { id: 'geneva',    lat: 46.2,  lng: 6.1,    label: 'Geneva'        },
  { id: 'tokyo',     lat: 35.7,  lng: 139.7,  label: 'Tokyo'         },
  { id: 'singapore', lat: 1.3,   lng: 103.8,  label: 'Singapore'     },
]

const INDIA_ARCS = [
  { from: 'delhi', to: 'mumbai'    },
  { from: 'delhi', to: 'kolkata'   },
  { from: 'delhi', to: 'hyderabad' },
  { from: 'mumbai',    to: 'hyderabad' },
  { from: 'hyderabad', to: 'bangalore' },
  { from: 'hyderabad', to: 'chennai'   },
  { from: 'bangalore', to: 'chennai'   },
]

const GLOBAL_ARCS = [
  { from: 'delhi',     to: 'sf'        },
  { from: 'delhi',     to: 'london'    },
  { from: 'delhi',     to: 'nyc'       },
  { from: 'kolkata',   to: 'tokyo'     },
  { from: 'bangalore', to: 'singapore' },
  { from: 'mumbai',    to: 'geneva'    },
]

const PIN_MAP = Object.fromEntries(
  [...INDIA_PINS, ...GLOBAL_PINS].map(p => [p.id, p])
)
const INDIA_IDS = new Set(INDIA_PINS.map(p => p.id))

// Static country label always visible on the globe
const COUNTRY_LABEL = [{ id: 'country-india', lat: 22, lng: 80, label: 'India' }]

const INDIA_CAM = { lat: 20, lng: 78, altitude: 2.0 }

const CAPTIONS = [
  "India's AI Safety ecosystem",
  'India connects to the global AI Safety movement',
  'Building bridges with global institutions',
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function IndiaGlobeAnimation() {
  const globeRef     = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims]     = useState({ w: 700, h: 700 })
  // Load the Globe component client-side without Next.js dynamic() wrapper
  // so that ref forwarding works correctly
  const [GlobeComp, setGlobeComp] = useState<any>(null)

  const [pins,    setPins]    = useState<typeof INDIA_PINS>([])
  const [arcs,    setArcs]    = useState<any[]>([])
  const [caption, setCaption] = useState(CAPTIONS[0])
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  // Load Globe library manually so the ref is the actual globe instance
  useEffect(() => {
    import('react-globe.gl').then(mod => setGlobeComp(() => mod.default))
  }, [])

  // Measure container
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      if (width > 0 && height > 0) setDims({ w: Math.round(width), h: Math.round(height) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Lock camera on India for the entire lifetime of the component.
  // Disable OrbitControls so nothing can drift the camera back to Africa.
  useEffect(() => {
    const iv = setInterval(() => {
      try {
        const g = globeRef.current
        if (!g) return

        // Disable OrbitControls so Three.js can't auto-reset camera
        const ctrl = g.controls?.()
        if (ctrl && ctrl.enabled) {
          ctrl.enabled = false
        }

        // Set camera position directly
        g.pointOfView?.(INDIA_CAM, 0)
      } catch {}
    }, 50)
    return () => clearInterval(iv)
  }, [])

  // Animation sequence
  useEffect(() => {
    const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
    const after = (ms: number, fn: () => void) => { timers.current.push(setTimeout(fn, ms)) }

    function run() {
      clear()
      setPins([])
      setArcs([])
      setCaption(CAPTIONS[0])

      // India pins
      INDIA_PINS.forEach((p, i) =>
        after(800 + i * 160, () => setPins(prev => [...prev, p]))
      )

      // India arcs
      after(1900, () => {})
      INDIA_ARCS.forEach(({ from: f, to: t }, i) => {
        const a = PIN_MAP[f], b = PIN_MAP[t]
        after(2000 + i * 100, () =>
          setArcs(prev => [...prev, {
            startLat: a.lat, startLng: a.lng,
            endLat:   b.lat, endLng:   b.lng,
            color: ['rgba(13,122,107,1)', 'rgba(13,122,107,1)'],
          }])
        )
      })

      // Global pins + arcs (camera stays on India)
      after(3200, () => setCaption(CAPTIONS[1]))
      GLOBAL_PINS.forEach((p, i) =>
        after(3600 + i * 160, () => setPins(prev => [...prev, p]))
      )
      after(4700, () => setCaption(CAPTIONS[2]))
      GLOBAL_ARCS.forEach(({ from: f, to: t }, i) => {
        const a = PIN_MAP[f], b = PIN_MAP[t]
        after(4800 + i * 180, () =>
          setArcs(prev => [...prev, {
            startLat: a.lat, startLng: a.lng,
            endLat:   b.lat, endLng:   b.lng,
            color: ['rgba(13,122,107,0.9)', 'rgba(29,78,216,0.9)'],
          }])
        )
      })

      after(8000, run)
    }

    const init = setTimeout(run, 800)
    timers.current.push(init)
    return clear
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', aspectRatio: '1 / 1', background: 'transparent', position: 'relative' }}
    >
      {GlobeComp && (
        <GlobeComp
            ref={globeRef}
            width={dims.w}
            height={dims.h}
            backgroundColor="#00000000"

            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            atmosphereColor="#93c5e8"
            atmosphereAltitude={0.15}

            pointsData={pins}
            pointLat="lat"
            pointLng="lng"
            pointColor={(d: any) => INDIA_IDS.has(d.id) ? '#0D7A6B' : '#1d4ed8'}
            pointAltitude={0.06}
            pointRadius={0.8}

            labelsData={[...COUNTRY_LABEL, ...pins.filter((p: any) => INDIA_IDS.has(p.id))]}
            labelLat="lat"
            labelLng="lng"
            labelText="label"
            labelSize={(d: any) => d.id === 'country-india' ? 2.2 : 0.6}
            labelDotRadius={(d: any) => d.id === 'country-india' ? 0 : 0.3}
            labelColor={(d: any) => d.id === 'country-india' ? '#ffffff' : '#0D7A6B'}
            labelAltitude={0.02}

            arcsData={arcs}
            arcStartLat="startLat"
            arcStartLng="startLng"
            arcEndLat="endLat"
            arcEndLng="endLng"
            arcColor="color"
            arcAltitude={0.3}
            arcStroke={0.6}
            arcDashLength={0.5}
            arcDashGap={0.3}
            arcDashAnimateTime={2500}

            enablePointerInteraction={false}
            animateIn={false}
          />
      )}

      {/* Caption — centred at bottom */}
      <AnimatePresence mode="wait">
        <motion.p
          key={caption}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute', bottom: 24, left: 0, right: 0,
            textAlign: 'center',
            margin: 0, fontSize: 15,
            color: 'var(--ink-mid)',
            fontFamily: 'var(--font-outfit, sans-serif)',
            fontWeight: 500,
          }}
        >
          {caption}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
