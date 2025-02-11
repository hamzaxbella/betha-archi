'use client'

import ClientOnly from './ClientOnly'

export default function YourComponent() {
  return (
    <ClientOnly>
      {/* Your component content that uses browser APIs */}
    </ClientOnly>
  )
}
