import Box from '@mui/material/Box'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentApiQuerySelector, minifyDialogOpenAtom } from '../../recoil-state'
import { MinifyIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export default function MinifyIconSx() {
  // retrieve localStorage value
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  // set dialog with minified json visability
  const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)

  return (
    <Box sx={{ position: 'relative' }}>
      {!currentApiQuery ? (
        <IconButtonSxStyle disabled={true}>
          <MinifyIcon />
        </IconButtonSxStyle>
      ) : (
        <ToolTipSx tooltipTitle={'Minify json'}>
          <IconButtonSxStyle
            onClick={() => {
              setMinifyDialogOpen(true)
            }}>
            <MinifyIcon />
          </IconButtonSxStyle>
        </ToolTipSx>
      )}
    </Box>
  )
}
