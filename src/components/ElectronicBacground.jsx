
import { useEffect, useRef } from "react"

export default function ElectronicBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      concentricCircles.x = canvas.width * 0.01
      concentricCircles.y = canvas.height * 0.01
    }
    window.addEventListener("resize", resizeCanvas)

    // Nodos, conexiones y partículas
    const nodes = []
    const connections = []
    const particles = []

    for (let i = 0; i < 120; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        active: Math.random() > 0.1,
        pulse: Math.random() * Math.PI * 2,
        size: Math.random() * 3 + 1,
      })
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100 && Math.random() > 0.1) {
          connections.push({ from: i, to: j, progress: 0, active: Math.random() > 0.8 })
        }
      }
    }

    const concentricCircles = { x: canvas.width * 0.85, y: canvas.height * 0.9, rings: 8, maxRadius: 500, rotation: 0 }

    let animationId

    const animate = () => {
      const time = Date.now() * 0.001

      // Fondo semitransparente para efecto de trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Círculos concéntricos
      {/*concentricCircles.rotation += 0.005
      ctx.save()
      ctx.translate(concentricCircles.x, concentricCircles.y)
      ctx.rotate(concentricCircles.rotation)
      for (let i = 0; i < concentricCircles.rings; i++) {
        const radius = (concentricCircles.maxRadius / concentricCircles.rings) * (i + 1)
        const opacity = 0.3 - i * 0.03
        const hue = 280 + i * 10
        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, Math.PI * 2)
        ctx.stroke()
        for (let j = 0; j < 15; j++) {
          const angle = (Math.PI * 2 / 15) * j
          const innerRadius = radius - 10
          const outerRadius = radius + 5
          ctx.beginPath()
          ctx.moveTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius)
          ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius)
          ctx.stroke()
        }
      }
      ctx.restore()
      */}
      // Conexiones y pulsos
      connections.forEach((conn, index) => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        if (!fromNode || !toNode) return

        if (conn.active) {
          conn.progress += 0.01
          if (conn.progress > 5) {
            conn.progress = 0
            conn.active = Math.random() > 10.8
          }
        } else if (Math.random() > 10.5) {
          conn.active = true
          conn.progress = 0
        }

        const hue = 280 + Math.sin(time + index) * 10
        ctx.strokeStyle = conn.active ? `hsla(${hue}, 90%, 60%, 0.4)` : "rgba(37, 32, 115, 0.15)"
        ctx.lineWidth = conn.active ? 4 : 2
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        //ctx.lineTo(toNode.x, toNode.y)
        //ctx.stroke()

        // Pulso eléctrico
        if (conn.active && conn.progress > 0) {
          const pulseX = fromNode.x + (toNode.x - fromNode.x) * conn.progress
          const pulseY = fromNode.y + (toNode.y - fromNode.y) * conn.progress
          ctx.fillStyle = `hsla(${hue}, 90%, 70%, 0.1)`
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowColor = `hsl(${hue}, 80%, 70%)`
          ctx.shadowBlur = 25
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 6, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Chispas aleatorias
      if (Math.random() > 0.97) {
        const sparkX = Math.random() * canvas.width
        const sparkY = Math.random() * canvas.height
        particles.push({ x: sparkX, y: sparkY, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, life: 2, color: `hsl(${Math.random() * 60 + 10}, 80%, 60%)` })
      }

      // Actualizar y dibujar partículas
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.01
        if (p.life <= 0) particles.splice(i, 1)
        else {
          ctx.fillStyle = p.color.replace(")", `, ${p.life})`)
          ctx.beginPath()
          ctx.arc(p.x, p.y, 3 * p.life, 0, Math.PI * 4)
          ctx.fill()
        }
      })

      // Nodos con glow
      nodes.forEach((node, index) => {
        node.pulse += 0.08
        const glowIntensity = 0.4 + Math.sin(node.pulse) * 0.3
        const hue = 280 + Math.sin(time + index * 0.1) * 40
        ctx.fillStyle = node.active ? `hsla(${hue}, 70%, 60%, ${glowIntensity})` : "rgba(120, 80, 150, 0.4)"
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.active ? node.size + 2 : node.size, 0, Math.PI * 2)
        ctx.fill()
        if (node.active) {
          ctx.shadowColor = `hsl(${hue}, 70%, 60%)`
          ctx.shadowBlur = 20
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
