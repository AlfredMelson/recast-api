import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { userGeneratedJsonAtom, minifiedTextAtom, minifyDialogOpenAtom } from '../../recoil'
import { BrandSwatch } from '../../style'
import { MinifyIcons } from '.'

const TypographyRoot = styled(Typography)(({ theme }) => ({
  ...theme.typography.code,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}))

const MinifyHeaderWrapper = styled(Box, { name: 'MinifyHeader', slot: 'wrapper' })(({ theme }) => ({
  top: 0,
  position: 'sticky',
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
  borderRadius: theme.spacing(3, 3, 0, 0),
  zIndex: theme.zIndex.drawer + 1,
}))

export function MinifyDialog() {
  // set dialog with minified json visability
  const [minifyDialogOpen, setMinifyDialogOpen] = useRecoilState(minifyDialogOpenAtom)
  // retrieve localStorage value
  const userGeneratedJson = useRecoilValue(userGeneratedJsonAtom)
  // store minified json in recoil
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)
  // handle minification of json & move to recoil
  React.useEffect(() => {
    async function Minify(json: string) {
      const typeJson = typeof JSON === 'undefined' || null
      if (typeJson) {
        return json
      } else {
        const results = json.length > 0 && JSON.stringify(JSON.parse(json), null, 0)
        setMinifiedText(results)
        return
      }
    }
    Minify(userGeneratedJson)
  }, [userGeneratedJson, setMinifiedText])

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={minifyDialogOpen}
      onClose={() => {
        setMinifyDialogOpen(false)
      }}
      scroll='paper'
      sx={{ mt: 20 }}>
      <MinifyHeaderWrapper>
        <Container maxWidth='lg'>
          <Stack direction='row' justifyContent='center' alignItems='center' sx={{ height: 50 }}>
            <MinifyIcons />
          </Stack>
        </Container>
      </MinifyHeaderWrapper>
      <DialogContent
        sx={{
          background: theme =>
            theme.palette.mode === 'dark'
              ? BrandSwatch.Dark.Grey[700]
              : BrandSwatch.Light.Grey[100],
          overflowWrap: 'break-word',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}>
        <TypographyRoot variant='code' id='minified-json-data'>
          {minifiedText}
        </TypographyRoot>
      </DialogContent>
    </Dialog>
  )
}