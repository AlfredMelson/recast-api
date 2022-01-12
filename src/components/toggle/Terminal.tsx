import { useSetRecoilState } from 'recoil'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import { dataDrawerOpenAtom } from '../../recoil'
import { IconButtonSxColorMode } from '../mui/IconButton.style'
import { ToolTipSx } from '../mui'

export function TerminalToggle() {
  //retrieve localStorage theme value
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <ToolTipSx tooltipTitle='Terminal'>
      <IconButtonSxColorMode onClick={() => setDataDrawerOpen(true)}>
        <TerminalOutlinedIcon fontSize='medium' />
      </IconButtonSxColorMode>
    </ToolTipSx>
  )
}
