'use client'

import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

const Cursor = (): JSX.Element => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorTextRef = useRef<HTMLSpanElement>(null)
  const cursorGlassRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  
  
  const resetCursorState = useCallback(() => {
    const cursor = cursorRef.current
    const cursorGlass = cursorGlassRef.current
    const cursorText = cursorTextRef.current
    
    if (!cursor || !cursorGlass || !cursorText) return

    // Reset to initial state
    gsap.set(cursor, {
      opacity: 1,
      width: 20,
      height: 20,
      backgroundColor: '#000000'
    })
    
    gsap.set(cursorGlass, {
      opacity: 0,
      width: 20,
      height: 20
    })
    
    gsap.set(cursorText, {
      opacity: 0
    })
  }, [])

  const setupCursorListeners = useCallback(() => {
    const cursor = cursorRef.current
    const cursorText = cursorTextRef.current
    const cursorGlass = cursorGlassRef.current
    
    if (!cursor || !cursorText || !cursorGlass) return;

    // Update initial setup with specific styles
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      width: 20,
      height: 20,
      backgroundColor: '#000000',
      borderRadius: '50%',
      top: 0,
      left: 0
    })

    gsap.set(cursorGlass, {
      xPercent: -50,
      yPercent: -50,
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      top: 0,
      left: 0,
      opacity: 0
    })

    const moveQuickTo = gsap.quickTo([cursor, cursorGlass], "x", {duration: 0.6, ease: "power3"})
    const moveQuickToY = gsap.quickTo([cursor, cursorGlass], "y", {duration: 0.6, ease: "power3"})

    const mouseEnterHandler = () => {
      gsap.to(cursor, { opacity: 0, duration: 0 })
      gsap.to(cursorGlass, {
        opacity: 1,
        width: 200,
        height: 200,
        duration: 0.3
      })
      gsap.to(cursorText, { opacity: 1, duration: 0.2 })
    }

    const mouseLeaveHandler = () => {
      gsap.to(cursor, { opacity: 1, duration: 0 })
      gsap.to(cursorGlass, {
        opacity: 0,
        width: 20,
        height: 20,
        duration: 0.3
      })
      gsap.to(cursorText, { opacity: 0, duration: 0.2 })
    }

    const onMouseMove = (e: MouseEvent) => {
      moveQuickTo(e.clientX)
      moveQuickToY(e.clientY)
    }

    window.addEventListener('mousemove', onMouseMove)

    const images = document.querySelectorAll<HTMLElement>('.hover-image')
    images.forEach(image => {
      image.addEventListener('mouseenter', mouseEnterHandler)
      image.addEventListener('mouseleave', mouseLeaveHandler)
    })

    // Add project click handler
    const handleProjectClick = () => {
      resetCursorState()
    }

    window.addEventListener('projectClick', handleProjectClick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      images.forEach(image => {
        image.removeEventListener('mouseenter', mouseEnterHandler)
        image.removeEventListener('mouseleave', mouseLeaveHandler)
      })
      window.removeEventListener('projectClick', handleProjectClick)
      resetCursorState()
    }
  }, [resetCursorState])

  useEffect(() => {
    const cleanup = setupCursorListeners()
    return () => cleanup?.()
  }, [setupCursorListeners, pathname])

  // Add effect to handle route changes
  useEffect(() => {
    resetCursorState()
  }, [pathname, resetCursorState])

  return (
    <>
      <div className="hidden md:block fixed pointer-events-none z-[9999] borde-1 border-black" ref={cursorRef} />
      <div className="hidden md:block fixed pointer-events-none z-[9999] backdrop-blur-md  items-center justify-center" ref={cursorGlassRef}>
        <span className="text-white/90 text-xs font-medium uppercase tracking-wider opacity-0" ref={cursorTextRef}>
          View
        </span>
      </div>
    </>
  )
}

export default Cursor