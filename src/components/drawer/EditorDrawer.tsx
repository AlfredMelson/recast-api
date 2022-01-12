import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Box, Container } from '@mui/material'
import { themeColorAtom, dataDrawerOpenAtom, monacoThemeAtom } from '../../recoil'
import { Editor, EditorTheme } from '../monaco-editor'
import { toggleDrawer } from '../action'
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
