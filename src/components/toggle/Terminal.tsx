import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import Box from '@mui/material/Box'
import { useRecoilState, useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom, userSubmittedUrlAtom } from '../../recoil'
import { IconButtonSxColorMode, ToolTipSx } from '../mui'

export function TerminalToggle() {
  //retrieve localStorage theme value
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)

  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)

  const disable = userSubmittedUrl === undefined ? true : false

  return (
    <Box sx={{ zIndex: theme => theme.zIndex.drawer + 2 }}>
      <ToolTipSx tooltipTitle='Open Terminal' disabled={disable}>
        <IconButtonSxColorMode
          disabled={disable}
          onClick={() => setDataDrawerOpen(dataDrawerOpen === true ? false : true)}>
          <TerminalOutlinedIcon fontSize='medium' />
        </IconButtonSxColorMode>
      </ToolTipSx>
    </Box>
  )
}
