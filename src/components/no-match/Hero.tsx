import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded'
import { Link } from 'react-router-dom'
import GradientText from '../typography/GradientText'
import { ButtonSxStyle } from '../mui'

export default function HeroNoMatch() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container
        sx={{
          minHeight: 500,
          height: 'calc(100vh - 120px)',
          maxHeight: { xs: 500, sm: 700, xl: 1000 },
          transition: '0.3s',
        }}>
        <Grid container alignItems='center' wrap='nowrap' sx={{ height: '100%', mx: 'auto' }}>
          <Grid item md={7} lg={6} sx={{ m: 'auto' }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant='h1' sx={{ my: 20, maxWidth: 500 }}>
                It seems you&nbsp;have <GradientText>lost</GradientText> your way
              </Typography>
              <Box
                sx={{
                  mt: 50,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  '&& > *': { minWidth: 'clamp(0px, (492px - 100%) * 999 ,100%)' },
                }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <ButtonSxStyle sx={{ px: 20 }} endIcon={<KeyboardArrowRightRounded />}>
                    Head back
                  </ButtonSxStyle>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
