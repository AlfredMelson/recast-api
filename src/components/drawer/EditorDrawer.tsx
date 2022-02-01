import Dialog from '@mui/material/Dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilState, useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom, minifyDialogOpenAtom } from '../../recoil-state'
import { Editor } from '../monaco-editor'
import { MinifyDialog } from '.'

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

  const minifyDialogOpen = useRecoilValue(minifyDialogOpenAtom)

  return (
    <Dialog
      scroll='paper'
      fullWidth={true}
      maxWidth='lg'
      open={dataDrawerOpen}
      onClose={handleClose}>
      <AnimatePresence initial={false}>
        {dataDrawerOpen && (
          <>
            <motion.section
              key='content'
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.5 }}>
              <motion.div
                key='content'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.4 }}>
                <Editor />
              </motion.div>
            </motion.section>
            {minifyDialogOpen && (
              <motion.section
                key='content'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.5 }}>
                <motion.div
                  key='content'
                  initial='collapsed'
                  animate='open'
                  exit='collapsed'
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.4 }}>
                  <MinifyDialog />
                </motion.div>
              </motion.section>
            )}
          </>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
