import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom, userSubmittedUrlAtom } from '../../recoil'
import { TerminalIcon } from '../icons'
import { IconButtonSxColorMode, ToolTipSx } from '../mui'

export function TerminalToggle() {
  //retrieve localStorage theme value
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)

  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)

  function handleClick() {
    setDataDrawerOpen(!dataDrawerOpen)
  }
  const [disable, setDisable] = React.useState(false)

  React.useEffect(() => {
    const result: boolean = userSubmittedUrl === undefined
    setDisable(result)
    return
  }, [userSubmittedUrl, setDisable])

  return (
    <>
      {disable ? (
        <IconButtonSxColorMode disabled={disable} onClick={handleClick}>
          <TerminalIcon />
        </IconButtonSxColorMode>
      ) : (
        <ToolTipSx
          tooltipTitle={dataDrawerOpen ? 'close Terminal' : 'open Terminal'}
          disabled={disable}>
          <IconButtonSxColorMode disabled={disable} onClick={handleClick}>
            <TerminalIcon />
          </IconButtonSxColorMode>
        </ToolTipSx>
      )}
    </>
  )
}
