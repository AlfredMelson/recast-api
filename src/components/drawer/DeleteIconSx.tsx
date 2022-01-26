import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import { currentApiQuerySelector } from '../../recoil-state'
import { DeleteIcon, DeleteOutlineIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export default function DeleteIconSx() {
  // retrieve localStorage value
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  return (
    <Box sx={{ position: 'relative' }}>
      {!currentApiQuery ? (
        <IconButtonSxStyle disabled={true}>
          <DeleteOutlineIcon />
        </IconButtonSxStyle>
      ) : (
        <ToolTipSx tooltipTitle={'Delete json'}>
          <IconButtonSxStyle
          // onClick={() => {resetCurrentApiQuery()}}
          >
            {!currentApiQuery ? <DeleteIcon /> : <DeleteOutlineIcon />}
          </IconButtonSxStyle>
        </ToolTipSx>
      )}
    </Box>
  )
}
