import * as React from 'react'
import { useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil-state'

export const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)
  if (
    event &&
    event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
  ) {
    return
  }
  setDataDrawerOpen(open)
}

export function getNextIndex(eventKey: KeyboardEvent['key'], currentIndex: number, length: number) {
  if (eventKey === 'ArrowLeft') {
    return currentIndex === 0 ? length - 1 : currentIndex - 1
  }
  if (eventKey === 'ArrowRight') {
    return currentIndex === length - 1 ? 0 : currentIndex + 1
  }
  return currentIndex
}

export function handleLeftRightArrow(
  navRef: any,
  event: React.KeyboardEvent,
  target: EventTarget | HTMLElement | null = event.target
) {
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
