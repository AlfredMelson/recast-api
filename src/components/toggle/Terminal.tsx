import { useRecoilState, useRecoilValue } from 'recoil'
import { currentApiStateAtom, dataDrawerOpenAtom } from '../../recoil'
import { TerminalIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function TerminalToggle() {
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)

  const currentApiState = useRecoilValue(currentApiStateAtom)

  return (
    <>
      {currentApiState === null ? (
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
