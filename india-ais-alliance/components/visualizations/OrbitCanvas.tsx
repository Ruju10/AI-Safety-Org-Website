'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const RESET_DELAY_MS = 10000

const DOT_COLORS = [
  '#F2AFAF', '#A3B8F5', '#8ED4B0', '#F5CEAA',
  '#C4A8EA', '#F2B8B8', '#A0DDE6', '#B8E88A',
  '#EAA8C4', '#A8DCF0', '#EAD08A', '#B8B4F5',
]

const TEAL = '#0D7A6B'
const NUM_DOTS = 12
const PHASE_DURATIONS = [3000, 1200, 2500, Infinity]
const PHASE_LABELS = [
  'Fragmented efforts…',
  'A coordination point emerges',
  'Connecting the ecosystem',
  'Synchronized movement',
]

type Dot = {
  x: number; y: number
  vx: number; vy: number
  r: number; color: string
  orbitRadius: number; orbitAngle: number; orbitSpeed: number
  transitionProgress: number
  chaosX: number; chaosY: number
}

type ConnLine = { dotIndex: number; progress: number; opacity: number; delay: number }

type AnimState = {
  DPR: number; W: number; H: number; CX: number; CY: number
  dots: Dot[]
  centerDot: { r: number; opacity: number }
  connectionLines: ConnLine[]
  phase: number; phaseTime: number; globalTime: number; lastTime: number
  animId: number
}

export default function OrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<AnimState | null>(null)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [phase, setPhase] = useState(0)

  const createDots = useCallback((CX: number, CY: number, DPR: number): Dot[] =>
    Array.from({ length: NUM_DOTS }, (_, i) => {
      const angle = (Math.PI * 2 * i) / NUM_DOTS + (Math.random() - 0.5) * 0.6
      const dist = 120 * DPR + Math.random() * 220 * DPR
      return {
        x: CX + Math.cos(angle) * dist,
        y: CY + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 2.2 * DPR,
        vy: (Math.random() - 0.5) * 2.2 * DPR,
        r: (7 + Math.random() * 7) * DPR,
        color: DOT_COLORS[i % DOT_COLORS.length],
        orbitRadius: (180 + (i % 3) * 110) * DPR,
        orbitAngle: (Math.PI * 2 * i) / NUM_DOTS,
        orbitSpeed: 0.0004 + (i % 3) * 0.00015,
        transitionProgress: 0,
        chaosX: 0, chaosY: 0,
      }
    }), [])

  const startAnimation = useCallback(() => {
    if (resetTimerRef.current) { clearTimeout(resetTimerRef.current); resetTimerRef.current = null }
    const canvas = canvasRef.current
    if (!canvas) return null
    const ctx = canvas.getContext('2d')!

    const DPR = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    const W = rect.width * DPR
    const H = rect.height * DPR
    canvas.width = W
    canvas.height = H
    const CX = W / 2, CY = H / 2

    const s: AnimState = {
      DPR, W, H, CX, CY,
      dots: createDots(CX, CY, DPR),
      centerDot: { r: 0, opacity: 0 },
      connectionLines: [],
      phase: 0, phaseTime: 0, globalTime: 0, lastTime: 0,
      animId: 0,
    }
    animRef.current = s
    setPhase(0)

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }
    function easeOutExpo(t: number) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    }

    function update(timestamp: number) {
      if (!s.lastTime) s.lastTime = timestamp
      const dt = Math.min(timestamp - s.lastTime, 40)
      s.lastTime = timestamp
      s.globalTime += dt
      s.phaseTime += dt

      if (s.phase < 3 && s.phaseTime > PHASE_DURATIONS[s.phase]) {
        s.phase++
        s.phaseTime = 0
        setPhase(s.phase)
        if (s.phase === 1) s.dots.forEach(d => { d.chaosX = d.x; d.chaosY = d.y })
        if (s.phase === 2) {
          s.connectionLines = s.dots.map((_, i) => ({
            dotIndex: i, progress: 0, opacity: 0, delay: i * 120,
          }))
        }
        if (s.phase === 3) {
          s.dots.forEach(d => {
            d.orbitAngle = Math.atan2(d.y - s.CY, d.x - s.CX)
            d.transitionProgress = 0
          })
          resetTimerRef.current = setTimeout(() => startAnimation(), RESET_DELAY_MS)
        }
      }

      if (s.phase === 0) {
        s.dots.forEach(d => {
          d.x += d.vx; d.y += d.vy
          const m = 40 * s.DPR
          if (d.x < m || d.x > s.W - m) d.vx *= -1
          if (d.y < m || d.y > s.H - m) d.vy *= -1
          d.vx += (Math.random() - 0.5) * 0.15 * s.DPR
          d.vy += (Math.random() - 0.5) * 0.15 * s.DPR
          d.vx *= 0.995; d.vy *= 0.995
        })
      }

      if (s.phase === 1) {
        const t = Math.min(s.phaseTime / 1000, 1)
        s.centerDot.r = easeOutExpo(t) * 20 * s.DPR
        s.centerDot.opacity = easeOutExpo(t)
        s.dots.forEach(d => {
          d.x += d.vx * (1 - t * 0.8)
          d.y += d.vy * (1 - t * 0.8)
        })
      }

      if (s.phase === 2) {
        s.centerDot.r = 20 * s.DPR
        s.centerDot.opacity = 1
        s.connectionLines.forEach(cl => {
          const elapsed = s.phaseTime - cl.delay
          if (elapsed > 0) {
            cl.progress = Math.min(elapsed / 800, 1)
            cl.opacity = Math.min(elapsed / 400, 1)
          }
        })
        s.dots.forEach((d, i) => {
          const cl = s.connectionLines[i]
          if (cl && cl.progress > 0.8) {
            const ox = s.CX + Math.cos(d.orbitAngle) * d.orbitRadius
            const oy = s.CY + Math.sin(d.orbitAngle) * d.orbitRadius
            const pull = (cl.progress - 0.8) * 5 * 0.01
            d.x += (ox - d.x) * pull
            d.y += (oy - d.y) * pull
          }
        })
      }

      if (s.phase === 3) {
        s.centerDot.r = 20 * s.DPR
        s.centerDot.opacity = 1
        s.connectionLines.forEach(cl => { cl.opacity = Math.max(0, cl.opacity - dt * 0.001) })
        s.dots.forEach(d => {
          d.transitionProgress = Math.min(d.transitionProgress + dt * 0.0006, 1)
          const tp = easeInOutCubic(d.transitionProgress)
          d.orbitAngle += d.orbitSpeed * dt
          const tx = s.CX + Math.cos(d.orbitAngle) * d.orbitRadius
          const ty = s.CY + Math.sin(d.orbitAngle) * d.orbitRadius
          d.x += (tx - d.x) * (0.02 + tp * 0.08)
          d.y += (ty - d.y) * (0.02 + tp * 0.08)
        })
      }
    }

    function drawDashedCircle(cx: number, cy: number, r: number, opacity: number) {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.setLineDash([4 * s.DPR, 6 * s.DPR])
      ctx.strokeStyle = 'rgba(180,180,175,0.45)'
      ctx.lineWidth = 1.2 * s.DPR
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()
      ctx.setLineDash([]); ctx.restore()
    }

    function drawConnectionLine(fx: number, fy: number, tx: number, ty: number, progress: number, opacity: number) {
      if (progress <= 0 || opacity <= 0) return
      const dx = tx - fx, dy = ty - fy
      const ex = fx + dx * progress, ey = fy + dy * progress
      ctx.save()
      ctx.globalAlpha = opacity * 0.6
      ctx.setLineDash([3 * s.DPR, 5 * s.DPR])
      ctx.strokeStyle = TEAL; ctx.lineWidth = 1.5 * s.DPR
      ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(ex, ey); ctx.stroke()
      ctx.setLineDash([])
      if (progress > 0.3) {
        const ang = Math.atan2(dy, dx)
        const as2 = 6 * s.DPR
        ctx.globalAlpha = opacity * 0.8; ctx.fillStyle = TEAL
        ctx.beginPath()
        ctx.moveTo(ex, ey)
        ctx.lineTo(ex - Math.cos(ang - 0.4) * as2, ey - Math.sin(ang - 0.4) * as2)
        ctx.lineTo(ex - Math.cos(ang + 0.4) * as2, ey - Math.sin(ang + 0.4) * as2)
        ctx.closePath(); ctx.fill()
      }
      ctx.restore()
    }

    function draw() {
      ctx.clearRect(0, 0, s.W, s.H)

      if (s.phase >= 2) {
        const ro = s.phase === 2 ? Math.min(s.phaseTime / 2000, 0.6) : 0.6
        const radii = Array.from(new Set(s.dots.map(d => d.orbitRadius)))
        radii.forEach(r => drawDashedCircle(s.CX, s.CY, r, ro))
      }

      if (s.phase >= 2) {
        s.connectionLines.forEach(cl => {
          const d = s.dots[cl.dotIndex]
          drawConnectionLine(s.CX, s.CY, d.x, d.y, cl.progress, cl.opacity)
        })
      }

      if (s.phase >= 1 && s.centerDot.opacity > 0) {
        ctx.save()
        const grad = ctx.createRadialGradient(s.CX, s.CY, 0, s.CX, s.CY, s.centerDot.r * 3)
        grad.addColorStop(0, `rgba(13,122,107,${0.2 * s.centerDot.opacity})`)
        grad.addColorStop(1, 'rgba(13,122,107,0)')
        ctx.fillStyle = grad
        ctx.beginPath(); ctx.arc(s.CX, s.CY, s.centerDot.r * 3, 0, Math.PI * 2); ctx.fill()
        ctx.globalAlpha = s.centerDot.opacity * 0.3
        ctx.strokeStyle = TEAL; ctx.lineWidth = 2 * s.DPR
        ctx.beginPath(); ctx.arc(s.CX, s.CY, s.centerDot.r * 1.8, 0, Math.PI * 2); ctx.stroke()
        ctx.globalAlpha = s.centerDot.opacity
        ctx.fillStyle = TEAL
        ctx.beginPath(); ctx.arc(s.CX, s.CY, s.centerDot.r, 0, Math.PI * 2); ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1.5 * s.DPR
        ctx.beginPath(); ctx.arc(s.CX, s.CY, s.centerDot.r * 0.55, 0, Math.PI * 2); ctx.stroke()
        ctx.restore()
      }

      s.dots.forEach(d => {
        ctx.save()
        const glow = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 2.5)
        glow.addColorStop(0, d.color + '30')
        glow.addColorStop(1, d.color + '00')
        ctx.fillStyle = glow
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r * 2.5, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = d.color
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = 'rgba(255,255,255,0.35)'
        ctx.beginPath(); ctx.arc(d.x - d.r * 0.25, d.y - d.r * 0.25, d.r * 0.4, 0, Math.PI * 2); ctx.fill()
        ctx.restore()
      })

      if (s.phase === 3) {
        s.dots.forEach(d => {
          if (d.transitionProgress > 0.5) {
            ctx.save()
            for (let t = 1; t <= 5; t++) {
              const pa = d.orbitAngle - d.orbitSpeed * 16 * t * 3
              const ptx = s.CX + Math.cos(pa) * d.orbitRadius
              const pty = s.CY + Math.sin(pa) * d.orbitRadius
              ctx.globalAlpha = (1 - t / 5) * 0.15 * d.transitionProgress
              ctx.fillStyle = d.color
              ctx.beginPath(); ctx.arc(ptx, pty, d.r * (1 - (t / 5) * 0.4), 0, Math.PI * 2); ctx.fill()
            }
            ctx.restore()
          }
        })
      }
    }

    function loop(timestamp: number) {
      update(timestamp)
      draw()
      s.animId = requestAnimationFrame(loop)
    }

    s.animId = requestAnimationFrame(loop)
    return s
  }, [createDots])

  useEffect(() => {
    startAnimation()

    const handleResize = () => {
      const canvas = canvasRef.current
      const s = animRef.current
      if (!canvas || !s) return
      const DPR = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      s.W = rect.width * DPR
      s.H = rect.height * DPR
      canvas.width = s.W
      canvas.height = s.H
      s.CX = s.W / 2
      s.CY = s.H / 2
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current.animId)
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [startAnimation])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Phase indicator */}
      <div style={{
        position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 10, alignItems: 'center',
        whiteSpace: 'nowrap',
      }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            height: 8,
            width: i === phase ? 28 : 8,
            borderRadius: i === phase ? 4 : '50%',
            background: i === phase ? TEAL : '#E0E0DC',
            transition: 'all 0.5s',
            flexShrink: 0,
          }} />
        ))}
        <span style={{
          fontSize: 12, color: '#999', marginLeft: 12, fontWeight: 500,
          letterSpacing: '0.04em', transition: 'opacity 0.4s',
          fontFamily: 'var(--font-outfit)',
        }}>
          {PHASE_LABELS[phase]}
        </span>
      </div>

    </div>
  )
}
