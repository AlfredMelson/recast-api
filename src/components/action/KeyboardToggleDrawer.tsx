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
