import { useRecoilState, useRecoilValue } from 'recoil'
import { ErrorBoundary } from '../../lib'
import { axiosResponseAtom, dataDrawerOpenAtom } from '../../recoil'
import { TerminalIcon } from '../icons'
import { IconButtonSxColorMode, ToolTipSx } from '../mui'

export function TerminalToggle() {
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)

  const axiosResponse = useRecoilValue(axiosResponseAtom)

  function handleClick() {
    setDataDrawerOpen(!dataDrawerOpen)
  }
  // const [disable, setDisable] = React.useState(false)

  // React.useEffect(() => {
  //   const result: boolean = fetchQuery === undefined
  //   setDisable(result)
  //   return
  // }, [fetchQuery, setDisable])

  return (
    <ErrorBoundary>
      {axiosResponse === undefined ? (
        <IconButtonSxColorMode disabled={true}>
          <TerminalIcon />
        </IconButtonSxColorMode>
      ) : (
        <ToolTipSx tooltipTitle={dataDrawerOpen ? 'close Terminal' : 'open Terminal'}>
          <IconButtonSxColorMode onClick={handleClick}>
            <TerminalIcon />
          </IconButtonSxColorMode>
        </ToolTipSx>
      )}
    </ErrorBoundary>
  )
}
