import Drawer from '@mui/material/Drawer'
import { AnimatePresence } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil-state'
import { toggleDrawer } from '../action'
import { FadeAnimation } from '../framer-motion'
import { Editor } from '../monaco-editor'
import { MinifyDialog } from '.'

export default function EditorDrawer() {
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
