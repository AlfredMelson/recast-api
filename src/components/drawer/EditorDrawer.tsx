import Dialog from '@mui/material/Dialog'
import { AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil-state'
import { FadeAnimation } from '../framer-motion'
import { Editor } from '../monaco-editor'

// import { MinifyDialog } from '.'

// export const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
//   const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)
//   if (
//     event &&
//     event.type === 'keydown' &&
//     ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
//   ) {
//     return
//   }
//   setDataDrawerOpen(open)
// }

export default function EditorDrawer() {
  // set visability of user json drawer
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)

  const handleClose = () => {
    setDataDrawerOpen(false)
  }

  return (
    <AnimatePresence>
      <Dialog
        scroll='paper'
        fullWidth={true}
        maxWidth='lg'
        open={dataDrawerOpen}
        onClose={handleClose}>
        <FadeAnimation duration={0.4}>
          <Editor />
        </FadeAnimation>
        {/* <FadeAnimation duration={0.4}>
          <MinifyDialog />
        </FadeAnimation> */}
      </Dialog>
    </AnimatePresence>
  )
}
