import { Link as MuiLink } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'
import { Navigation } from '../mui'

export function NavBarLinks() {
  // set visability of user json drawer
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <Navigation aria-label='Main'>
      <MuiLink sx={{ cursor: 'pointer' }} onClick={() => setDataDrawerOpen(true)}>
        Json Data
      </MuiLink>
    </Navigation>
  )
}
