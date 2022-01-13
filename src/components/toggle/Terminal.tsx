import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import { useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'
import { ToolTipSx } from '../mui'
import { IconButtonSxColorMode } from '../mui/IconButton.style'

export function TerminalToggle() {
  //retrieve localStorage theme value
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <ToolTipSx tooltipTitle='Open Terminal'>
      <IconButtonSxColorMode onClick={() => setDataDrawerOpen(true)}>
        <TerminalOutlinedIcon fontSize='medium' />
      </IconButtonSxColorMode>
    </ToolTipSx>
  )
}
