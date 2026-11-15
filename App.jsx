import { useEffect, useRef } from 'react'
import sceneSrc from './scene.js?raw'

// The scene engine registers click handlers, canvas loop, audio and the
// resume builder. It needs the DOM below to exist, so it starts after mount.
export default function App() {
  const started = useRef(false)

  useEffect(() => {
    if (started.current || window.__sceneStarted) return
    started.current = window.__sceneStarted = true
    const s = document.createElement('script')
    s.textContent = sceneSrc
    document.body.appendChild(s)
  }, [])

  return (
    <>
      <nav id="nav">
        <b><span className="mono">SD</span>Subhajit Das</b>
      </nav>
      <canvas
        id="c"
        role="img"
        aria-label="Animated winter village. Use the menu at the top to open each section."
      />
      <div className="vig" />
      <div id="tip" />
      <div id="lab" aria-hidden="true" />
      <div id="hint">Scroll to move through the day</div>
      <div id="sp" />
      <div id="ov" hidden>
        <section id="pn" role="dialog" aria-modal="true" aria-labelledby="pt">
          <button id="x" aria-label="Close">×</button>
          <div id="pc" />
        </section>
      </div>
    </>
  )
}
