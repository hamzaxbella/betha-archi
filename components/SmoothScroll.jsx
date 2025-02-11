'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import ClientOnly from './ClientOnly'

export function SmoothScroll({ children }) {
  return (
    <ClientOnly>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </ClientOnly>
  )
}
