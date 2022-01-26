import Box from '@mui/material/Box'
import { useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil-state'
import { CloseIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export default function ExitIconSx() {
  // visability of drawer containing terminal
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <Box sx={{ position: 'relative' }}>
      <ToolTipSx tooltipTitle={'Close'}>
        <IconButtonSxStyle
          onClick={() => {
            setDataDrawerOpen(false)
          }}>
          <CloseIcon />
        </IconButtonSxStyle>
      </ToolTipSx>
    </Box>
  )
}
