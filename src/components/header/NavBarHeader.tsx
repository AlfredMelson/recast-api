import Container, { ContainerProps } from '@mui/material/Container'
import { alpha, styled } from '@mui/material/styles'
import { HeaderContents, MobileHeaderContents } from '.'

// react lazy load
// const HeaderMobileLazy = React.lazy(() => import('../components/header/HeaderMobile'))

const ContainerStyle = styled(
  (props: ContainerProps) => <Container maxWidth='lg' disableGutters {...props} />,
  {
    name: 'Container',
    slot: 'style'
  }
)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.appBar,
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10)
}))

export default function NavBarHeader() {
  return (
    <ContainerStyle>
      <HeaderContents />
      <MobileHeaderContents />
    </ContainerStyle>
  )
}
