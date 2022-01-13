import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom, monacoThemeAtom, themeColorAtom } from '../../recoil'
import { toggleDrawer } from '../action'
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
    <Drawer
      transitionDuration={0}
      anchor='top'
      open={dataDrawerOpen}
      onClose={toggleDrawer(false)}
      sx={{ height: '100vh' }}>
      <Container maxWidth='lg' sx={{ height: 100, backgroundColor: 'transparent' }} />
      <Box>
        <Editor />
      </Box>
      <MinifyDialog />
    </Drawer>
  )
}
