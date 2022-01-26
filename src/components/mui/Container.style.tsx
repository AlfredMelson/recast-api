import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'

export const EditorContainer = styled(
  (props: ContainerProps) => <Container maxWidth='lg' disableGutters {...props} />,
  {
    name: 'Editor',
    slot: 'container'
  }
)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginTop: theme.spacing(10)
}))
