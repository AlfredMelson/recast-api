import Add from '@mui/icons-material/Add'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useRecoilValue } from 'recoil'
import { selectedElementAtom } from '../../recoil'
import { BrandSwatch } from '../../style'

export function AsideEditInfo({ ...props }: BoxProps) {
  const selectedElement = useRecoilValue(selectedElementAtom)

  const selectedElementCard = () => {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant='h6' component='div' gutterBottom>
              Selected element
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              id: {selectedElement}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              dataType:
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              dataValue:
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary'>
              dataKey:
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    )
  }

  return (
    <Box
      {...props}
      sx={{
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        px: 20,
        pt: 10,
        pb: 20,
        transform: selectedElement === null ? 'translateX(100%)' : 'translateX(0)',
        transition: theme =>
          theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut
          }),
        transitionDelay: '0.5s',
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[800] : BrandSwatch.Light.Blue[300],
        minWidth: 200,
        borderRadius: '0 0 3px 0',
        boxShadow: 1,
        ...props.sx
      }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0
        }}>
        <IconButton
          // aria-label={hidden ? 'show' : 'hide'}
          // onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            transition: theme =>
              theme.transitions.create(['transform'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut
              }),
            left: 10,
            top: 0,
            mb: 20,
            bgcolor: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Blue[700]
                : BrandSwatch.Light.Blue[200],
            '&:hover, &.Mui-focused': {
              bgcolor: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Blue[600]
                  : BrandSwatch.Light.Blue[200]
            }
          }}>
          <Add />
        </IconButton>

        {selectedElementCard()}
        <IconButton
          // aria-label={hidden ? 'show' : 'hide'}
          // onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            transition: theme =>
              theme.transitions.create(['transform'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut
              }),
            left: 10,
            top: 0,
            mt: 20,
            bgcolor: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Blue[700]
                : BrandSwatch.Light.Blue[200],
            '&:hover, &.Mui-focused': {
              bgcolor: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Blue[600]
                  : BrandSwatch.Light.Blue[200]
            }
          }}>
          <Add />
        </IconButton>
      </Box>
    </Box>
  )
}
