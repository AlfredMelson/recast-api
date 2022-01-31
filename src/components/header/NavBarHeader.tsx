import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { HeaderContents, MobileHeaderContents } from '.'

const ContainerStyle = styled(
  (props: ContainerProps) => <Container maxWidth='lg' disableGutters {...props} />,
  {
    name: 'NavBar',
    slot: 'container'
  }
)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: theme.transitions.create('top'),
  marginTop: theme.spacing(20),
  marginBottom: theme.spacing(20),
  zIndex: theme.zIndex.appBar
}))

export default function NavBarHeader() {
  return (
    <ContainerStyle>
      <HeaderContents />
      <MobileHeaderContents />
    </ContainerStyle>
  )
}
