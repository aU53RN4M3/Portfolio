import React from 'react'
import { createRoot } from 'react-dom/client'
import musicUrl from './music.mp3'
import windUrl from './wind.mp3'
import './styles.css'
import App from './App.jsx'

// Audio file URLs for the scene engine (read when audio is first created)
window.__AUDIO = { music: musicUrl, wind: windUrl }

// Warm the cache right away so playback can start the instant a gesture arrives
;[musicUrl, windUrl].forEach((u) => fetch(u).catch(() => {}))

createRoot(document.getElementById('root')).render(<App />)
