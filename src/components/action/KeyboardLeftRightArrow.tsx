import * as React from 'react'
import { getNextIndex } from './KeyboardFunctions'

export const handleLeftRightArrow = (
  navRef: any,
  event: React.KeyboardEvent,
  target: EventTarget | HTMLElement | null = event.target
) => {
  if (navRef.current) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      let i = 0
      while (i < navRef.current.children.length) {
        const child = navRef.current.children.item(i)
        if (child && (target === child || child.contains(target as Node))) {
          const prevSibling = navRef.current.children.item(
            getNextIndex(event.key, i, navRef.current.children.length)
          )
          const htmlElement = prevSibling ? (prevSibling.firstChild as HTMLElement) : null
          if (htmlElement) {
            htmlElement.focus()
          }
        }
        i += 1
      }
    }
  }
}
