import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'

export const EditorContainer = styled(
  (props: ContainerProps) => <Container maxWidth='lg' {...props} />,
  {
    name: 'Editor',
    slot: 'container'
  }
)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginTop: 76,
  overflow: 'hidden'
}))
