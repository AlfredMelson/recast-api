import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil-state'
import { CopyIconSx, DeleteIconSx, DownloadIconSx, ExitIconSx, MinifyIconSx } from '../drawer'

const DrawerIconGridItem = styled(Box, { name: 'DrawerIconGrid', slot: 'item' })(() => ({
  placeSelf: 'center'
}))

export default function DrawerIconGrid() {
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  return (
    <>
      {dataDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit='removed'>
          <Box
            sx={{
              width: 220,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 44px)',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
            <DrawerIconGridItem>
              <CopyIconSx />
            </DrawerIconGridItem>
            <DrawerIconGridItem>
              <DownloadIconSx />
            </DrawerIconGridItem>
            <DrawerIconGridItem>
              <DeleteIconSx />
            </DrawerIconGridItem>
            <DrawerIconGridItem>
              <MinifyIconSx />
            </DrawerIconGridItem>
            <DrawerIconGridItem>
              <ExitIconSx />
            </DrawerIconGridItem>
          </Box>
        </motion.div>
      )}
    </>
  )
}
