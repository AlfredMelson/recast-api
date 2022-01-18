import Drawer from '@mui/material/Drawer'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom, monacoThemeAtom, themeColorAtom } from '../../recoil'
import { toggleDrawer } from '../action'
import { FadeAnimation } from '../framer-motion'
import { Editor, EditorTheme } from '../monaco-editor'
import { MinifyDialog } from '.'

export function EditorDrawer() {
  const themeColor = useRecoilValue(themeColorAtom)
  // set editor theme value
  const setMonacoTheme = useSetRecoilState(monacoThemeAtom)

  React.useEffect(() => {
    const theme = themeColor === 'dark' ? 'cobalt' : 'katzenmilch'
    EditorTheme(theme).then(() => setMonacoTheme(theme))
  }, [themeColor, setMonacoTheme])
  // set visability of user json drawer
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  return (
    <AnimatePresence>
      <Drawer
        transitionDuration={0}
        anchor='top'
        open={dataDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ height: '100vh' }}>
        <FadeAnimation duration={0.4}>
          <Editor />
        </FadeAnimation>
        <FadeAnimation duration={0.4}>
          <MinifyDialog />
        </FadeAnimation>
      </Drawer>
    </AnimatePresence>
  )
}
