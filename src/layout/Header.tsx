import { Container, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { DrawerIcons } from '../components/drawer'
import { SlideUpAnimation } from '../components/framer-motion'
import { GithubToggle, TerminalToggle, ThemeModeToggle } from '../components/toggle'
import { dataDrawerOpenAtom } from '../recoil-state'
import { BrandSwatch } from '../style'

export const HeaderStyle = styled('header', { name: 'Header', slot: 'style' })(({ theme }) => ({
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.drawer + 1
}))

export function Header() {
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  const [hover, setHover] = React.useState(false)
  const [disable, setDisable] = React.useState(false)

  const hoverTransition = () => {
    setHover(!hover)
  }

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  const hoverOutTransition = () => {
    setHover(true)
    setDisable(true)
    // restore state to pre-hover
    interactionTimer.current = window.setTimeout(() => {
      setHover(false)
      setDisable(false)
    }, 3000)
  }

  //   return (
  //     <HeaderStyle>
  //       <Box
  //         sx={{
  //           display: 'grid',
  //           gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: '1fr 1fr 150px' },
  //           minHeight: 70,
  //           mx: { xs: 10, sm: 20 }
  //         }}>
  //         <Box
  //           sx={{
  //             gridColumn: '1 / span 2',
  //             gridRow: 1,
  //             alignSelf: 'center',
  //             justifySelf: 'start',
  //             position: 'absolute'
  //           }}>
  //           <AnimatePresence exitBeforeEnter>
  //             {!hover && (
  //               <SlideUpAnimation startY={-30} endY={3}>
  //                 <Typography
  //                   variant='code'
  //                   sx={{ fontWeight: 700, fontSize: '24px', color: BrandSwatch.Dark.Green[400] }}>
  //                   Recast
  //                 </Typography>
  //               </SlideUpAnimation>
  //             )}
  //           </AnimatePresence>
  //         </Box>
  //         <Box
  //           sx={{
  //             gridColumn: '1 / span 2',
  //             gridRow: 1,
  //             alignSelf: 'center',
  //             justifySelf: 'start',
  //             display: { xs: 'none', md: 'block' }
  //           }}>
  //           <AnimatePresence exitBeforeEnter>
  //             {!dataDrawerOpen && hover && (
  //               <SlideUpAnimation startY={30} endY={3}>
  //                 <Typography variant='code' sx={{ fontWeight: 600 }}>
  //                   Lightweight, interactive api response visualizer that infers type and accepts crud
  //                   operations.
  //                 </Typography>
  //               </SlideUpAnimation>
  //             )}
  //           </AnimatePresence>
  //         </Box>

  // <Box
  //   sx={{
  //     gridColumn: 2,
  //     gridRow: 1,
  //     alignSelf: 'center',
  //     justifySelf: { xs: 'end', sm: 'center', md: 'start' }
  //   }}>
  //   <AnimatePresence>
  //     {dataDrawerOpen && (
  //       <SlideUpAnimation startY={-90} endY={0}>
  //         <DrawerIcons />
  //       </SlideUpAnimation>
  //     )}
  //   </AnimatePresence>
  // </Box>

  // <Box
  //   sx={{
  //     gridColumn: 1,
  //     gridRow: 1,
  //     alignSelf: 'center',
  //     justifySelf: 'start',
  //     display: { xs: 'none', md: 'block' }
  //   }}>
  //   {!dataDrawerOpen && (
  //     <Button
  //       disabled={disable}
  //       disableFocusRipple
  //       disableRipple
  //       onMouseOver={hoverTransition}
  //       onFocus={hoverTransition}
  //       onMouseOut={hoverOutTransition}
  //       onBlur={hoverTransition}
  //       sx={{
  //         height: 60,
  //         width: 80,
  //         '&:hover, .Mui-focused': {
  //           backgroundColor: 'transparent'
  //         }
  //       }}
  //     />
  //   )}
  // </Box>
  //         <Box sx={{ gridColumn: 3, gridRow: 1, placeSelf: 'center end' }}>
  //           <AnimatePresence>
  //             {!dataDrawerOpen && (
  //               <SlideUpAnimation startY={-90} endY={0}>
  //                 <Box
  //                   sx={{
  //                     display: 'grid',
  //                     gridTemplateColumns: 'repeat(3, 1fr)'
  //                   }}>
  //                   <Box sx={{ gridColumn: 1, placeSelf: 'center' }}>
  //                     <TerminalToggle />
  //                   </Box>
  //                   <Box sx={{ gridColumn: 2, placeSelf: 'center' }}>
  //                     <ThemeModeToggle />
  //                   </Box>
  //                   <Box sx={{ gridColumn: 3, placeSelf: 'center' }}>
  //                     <GithubToggle />
  //                   </Box>
  //                 </Box>
  //               </SlideUpAnimation>
  //             )}
  //           </AnimatePresence>
  //         </Box>
  //       </Box>
  //     </HeaderStyle>
  //   )
  // }

  return (
    <HeaderStyle>
      <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
        <Container disableGutters maxWidth='xl'>
          {dataDrawerOpen ? (
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              sx={{
                minHeight: 64,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)'
              }}>
              <Box
                sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  alignSelf: 'center',
                  justifySelf: 'start',
                  pl: 20
                }}>
                <Typography
                  variant='code'
                  sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: BrandSwatch.Dark.Green[400]
                  }}>
                  Recast
                </Typography>
              </Box>
              <Box
                sx={{
                  gridColumn: 2,
                  gridRow: 1,
                  alignSelf: 'center',
                  justifySelf: 'center',
                  zIndex: theme => theme.zIndex.drawer + 2
                }}>
                <AnimatePresence exitBeforeEnter>
                  <SlideUpAnimation startY={-30} endY={3}>
                    <DrawerIcons />
                  </SlideUpAnimation>
                </AnimatePresence>
              </Box>
            </Stack>
          ) : (
            <Stack
              direction='row'
              sx={{
                minHeight: 64,
                display: 'grid',
                gridTemplateColumns: 'auto 200px'
              }}>
              <Box
                sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  alignSelf: 'center',
                  justifySelf: 'start',
                  pl: 20
                }}>
                <AnimatePresence>
                  {!hover && (
                    <SlideUpAnimation startY={-30} endY={3}>
                      <Typography
                        variant='code'
                        sx={{
                          fontWeight: 700,
                          fontSize: '24px',
                          color: BrandSwatch.Dark.Green[400]
                        }}>
                        Recast
                      </Typography>
                    </SlideUpAnimation>
                  )}
                </AnimatePresence>
              </Box>
              <Box
                sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  alignSelf: 'center',
                  justifySelf: 'start',
                  pl: 20
                }}>
                <AnimatePresence>
                  {!dataDrawerOpen && hover && (
                    <SlideUpAnimation startY={30} endY={3}>
                      <Typography variant='code' sx={{ fontWeight: 500 }}>
                        Lightweight, interactive api response visualizer that infers type and
                        accepts crud operations.
                      </Typography>
                    </SlideUpAnimation>
                  )}
                </AnimatePresence>
              </Box>
              <Box
                sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  alignSelf: 'center',
                  justifySelf: 'start',
                  display: { xs: 'none', md: 'initial' }
                }}>
                {!dataDrawerOpen && (
                  <Button
                    disabled={disable}
                    disableFocusRipple
                    disableRipple
                    onMouseOver={hoverTransition}
                    onFocus={hoverTransition}
                    onMouseOut={hoverOutTransition}
                    onBlur={hoverTransition}
                    sx={{
                      height: 60,
                      width: 80,
                      '&:hover, .Mui-focused': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  />
                )}
              </Box>
              <Box sx={{ gridColumn: 2, gridRow: 1, placeSelf: 'center' }}>
                <AnimatePresence>
                  {!dataDrawerOpen && (
                    <SlideUpAnimation startY={-90} endY={0}>
                      <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                          minHeight: 64,
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)'
                        }}>
                        <Box sx={{ gridColumn: 1, gridRow: 1, placeSelf: 'center' }}>
                          <TerminalToggle />
                        </Box>
                        <Box sx={{ gridColumn: 2, gridRow: 1, placeSelf: 'center' }}>
                          <ThemeModeToggle />
                        </Box>
                        <Box sx={{ gridColumn: 3, gridRow: 1, placeSelf: 'center' }}>
                          <GithubToggle />
                        </Box>
                      </Stack>
                    </SlideUpAnimation>
                  )}
                </AnimatePresence>
              </Box>
            </Stack>
          )}
        </Container>
      </Box>
      {/* https://mui.com/system/grid/#display */}
      <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
        <Container
          disableGutters
          sx={{
            minHeight: 52,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}>
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'start'
            }}>
            <Typography
              variant='code'
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: BrandSwatch.Dark.Green[400],
                pl: 20
              }}>
              Recast
            </Typography>
          </Box>
          <Box
            sx={{
              gridColumn: 2,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'end',
              pr: 10
            }}>
            {dataDrawerOpen ? (
              <DrawerIcons />
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)'
                }}>
                <Box sx={{ gridColumn: 1, placeSelf: 'center' }}>
                  <TerminalToggle />
                </Box>
                <Box sx={{ gridColumn: 2, placeSelf: 'center' }}>
                  <ThemeModeToggle />
                </Box>
                <Box sx={{ gridColumn: 3, placeSelf: 'center' }}>
                  <GithubToggle />
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </HeaderStyle>
  )
}
