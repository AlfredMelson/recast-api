import { useRecoilState, useRecoilValue } from 'recoil'
import { currentApiStateAtom, dataDrawerOpenAtom } from '../../recoil-state'
import { TerminalIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export default function TerminalToggle() {
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)

  const currentApiState = useRecoilValue(currentApiStateAtom)

  return (
    <>
      {dataDrawerOpen || currentApiState === null ? (
        <IconButtonSxStyle disabled={true}>
          <TerminalIcon />
        </IconButtonSxStyle>
      ) : (
        <ToolTipSx tooltipTitle={dataDrawerOpen ? 'Close terminal' : 'Open terminal'}>
          <IconButtonSxStyle
            onClick={() => {
              setDataDrawerOpen(true)
            }}>
            <TerminalIcon />
          </IconButtonSxStyle>
        </ToolTipSx>
      )}
    </>
  )
}
