import { createTheme, ThemeOptions } from '@mui/material/styles'
import BrandSwatch from './BrandSwatch'

/**
 * Adding & disabling typography variants
 *
 * In addition to using the default typography variants, you can add custom ones, or disable any you don't need. Here is what you need to do:
 *
 * - Update the theme's typography object
 *
 * - Update the necessary typings
 *
 * Make sure that the typings for the theme's typography variants and the Typography's variant prop reflects the new set of variants.
 *
 * https://mui.com/customization/typography/#adding-amp-disabling-variants
 */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    code: React.CSSProperties
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true
  }
}

/**
 * Adding color variants
 *
 * In addition to using the default typography variants, you can add custom ones, or disable any you don't need. Here is what you need to do:
 *
 * - Update the theme's typography object
 *
 * - Update the necessary typings
 *
 * Make sure that the typings for the theme's typography variants and the Typography's variant prop reflects the new set of variants.
 *
 * https://mui.com/customization/typography/#adding-amp-disabling-variants
 */

// optically-consistent adjustment to space between letters
function round(value: number) {
  return Math.round(value * 1e5) / 1e5
}

const theme = createTheme()

const BrandDesignTokens = (mode: 'dark' | 'light') =>
  ({
    breakpoints: {},
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: BrandSwatch.Dark.Grey[900]
        },
        common: {
          black: BrandSwatch.Dark.Black[50],
          white: BrandSwatch.Dark.White[50]
        },
        text: {
          primary: BrandSwatch.Dark.White[50],
          secondary: BrandSwatch.Dark.Grey[100],
          disabled: BrandSwatch.Dark.Grey[400]
        },
        divider: BrandSwatch.Dark.Grey[900],
        primary: {
          main: BrandSwatch.Dark.White[50],
          light: BrandSwatch.Dark.Grey[200]
          // dark: BrandSwatch.Dark.White[50],
          // contrastText: BrandSwatch.Dark.White[50]
        },
        // secondary: {
        //   main: BrandSwatch.Dark.White[50],
        //   light: BrandSwatch.Dark.White[50],
        //   dark: BrandSwatch.Dark.White[50],
        //   contrastText: BrandSwatch.Dark.White[50]
        // },
        // error: {
        //   main: BrandSwatch.Dark.White[50],
        //   light: BrandSwatch.Dark.White[50],
        //   dark: BrandSwatch.Dark.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        // warning: {
        //   main: BrandSwatch.Dark.White[50],
        //   light: BrandSwatch.Dark.White[50],
        //   dark: BrandSwatch.Dark.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        // info: {
        //   main: BrandSwatch.Dark.White[50],
        //   light: BrandSwatch.Dark.White[50],
        //   dark: BrandSwatch.Dark.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        success: {
          main: BrandSwatch.Dark.Green[200]
          // light: BrandSwatch.Dark.White[50],
          // dark: BrandSwatch.Dark.White[50],
          // contrastText: BrandSwatch.Light.White[50]
        }
        // action: {
        //   active: BrandSwatch.Light.Grey[500],
        //   hover: BrandSwatch.Light.Grey[500],
        //   hoverOpacity: 0.04,
        //   selected: BrandSwatch.Light.Grey[500],
        //   selectedOpacity: 0.08,
        //   disabled: BrandSwatch.Light.Grey[500],
        //   disabledBackground: BrandSwatch.Light.Grey[500],
        //   disabledOpacity: 0.38,
        //   focus: BrandSwatch.Light.Grey[500],
        //   focusOpacity: 0.12,
        //   activatedOpacity: 0.12
        // }
      }),
      ...(mode === 'light' && {
        background: {
          default: BrandSwatch.Light.Grey[50]
          // default: '#F8F9FA'
        },
        common: {
          black: BrandSwatch.Light.Black[50],
          white: BrandSwatch.Light.White[50]
        },
        text: {
          primary: BrandSwatch.Light.Black[50],
          secondary: BrandSwatch.Light.Grey[800],
          disabled: BrandSwatch.Light.Grey[500]
        },
        divider: BrandSwatch.Light.Grey[200],
        primary: {
          main: BrandSwatch.Light.White[50],
          light: BrandSwatch.Light.Grey[700]
          // dark: BrandSwatch.Light.White[50],
          // contrastText: BrandSwatch.Light.White[50]
        },
        // secondary: {
        //   main: BrandSwatch.Light.White[50],
        //   light: BrandSwatch.Light.White[50],
        //   dark: BrandSwatch.Light.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        // error: {
        //   main: BrandSwatch.Light.White[50],
        //   light: BrandSwatch.Light.White[50],
        //   dark: BrandSwatch.Light.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        // warning: {
        //   main: BrandSwatch.Light.White[50],
        //   light: BrandSwatch.Light.White[50],
        //   dark: BrandSwatch.Light.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        // info: {
        //   main: BrandSwatch.Light.White[50],
        //   light: BrandSwatch.Light.White[50],
        //   dark: BrandSwatch.Light.White[50],
        //   contrastText: BrandSwatch.Light.White[50]
        // },
        success: {
          main: BrandSwatch.Light.Green[500]
          // light: BrandSwatch.Light.White[50],
          // dark: BrandSwatch.Light.White[50],
          // contrastText: BrandSwatch.Light.White[50]
        }
        // action: {
        //   active: BrandSwatch.Light.Grey[500],
        //   hover: BrandSwatch.Light.Grey[500],
        //   hoverOpacity: 0.04,
        //   selected: BrandSwatch.Light.Grey[500],
        //   selectedOpacity: 0.08,
        //   disabled: BrandSwatch.Light.Grey[500],
        //   disabledBackground: BrandSwatch.Light.Grey[500],
        //   disabledOpacity: 0.38,
        //   focus: BrandSwatch.Light.Grey[500],
        //   focusOpacity: 0.12,
        //   activatedOpacity: 0.12
        // }
      })
    },
    spacing: 1,
    mixins: {
      toolbar: {
        '@media (min-width:0px) and (orientation: landscape)': {},
        '@media (min-width:600px)': {}
        // '@media screen and (display-mode: standalone)': {
        //   paddingTop: '40px'
        // }
      }
    },
    spacingIcons: 1,
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      ...(mode === 'dark' && {
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600
      }),
      ...(mode === 'light' && {
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700
      }),
      // Dec 29, 2021 font sizes using the clamp function
      // developer.mozilla.org/en-US/docs/Web/CSS/clamp()
      // 300: clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem);
      // 400: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
      // 500: clamp(1.09rem, 1rem + 0.47vw, 1.33rem);
      // 600: clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem);
      // 700: clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem);
      // 800: clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem);
      // 900: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
      // 1000: clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem);

      h1: {
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)',
        letterSpacing: `${round(-2 / 72)}em`,
        fontWeight: 700,
        lineHeight: 80 / 72
      },
      h2: {
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        letterSpacing: `${round(-1.5 / 48)}em`,
        fontWeight: 700,
        lineHeight: 44 / 36
      },
      h3: {
        fontSize: theme.typography.pxToRem(36),
        letterSpacing: `${round(-1 / 36)}em`,
        lineHeight: 44 / 36
      },
      h4: {
        fontSize: theme.typography.pxToRem(28),
        letterSpacing: `${round(-0.5 / 24)}em`,
        lineHeight: 42 / 28
      },
      h5: {
        fontSize: theme.typography.pxToRem(24),
        letterSpacing: `${round(-0.25 / 20)}em`,
        lineHeight: 36 / 24
      },
      h6: {
        fontSize: theme.typography.pxToRem(20),
        letterSpacing: 0,
        lineHeight: 30 / 20
      },
      subtitle1: {
        fontSize: theme.typography.pxToRem(18),
        letterSpacing: 0,
        lineHeight: 24 / 18,
        fontWeight: 500
      },
      body1: {
        // fontSize: theme.typography.pxToRem(16),
        fontSize: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
        letterSpacing: 0,
        lineHeight: 24 / 16
      },
      body2: {
        // fontSize: theme.typography.pxToRem(14),
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        letterSpacing: 0,
        lineHeight: 21 / 14
      },
      caption: {
        display: 'inline-block',
        // fontSize: theme.typography.pxToRem(12),
        fontSize: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
        letterSpacing: 0,
        lineHeight: 18 / 12
      },
      code: {
        fontWeight: mode === 'dark' ? 400 : 500,
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        fontFamily: ['"Fira Code"', '"monospace"'].join(','),
        letterSpacing: 0,
        lineHeight: 21 / 14
      } // Fira code available fontWeights: 300, 400, 500, 600, 700
    },
    transitions: {
      duration: {
        shortest: 150,
        standard: 300,
        complex: 500,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195
      },
      easing: {
        // most common easing curve
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // enter at full velocity and slowly decelerate to a resting point
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // leave at full velocity without decelerating
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // sharp curve is used by objects that may return at any time
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
      }
    }
  } as ThemeOptions)

export default BrandDesignTokens
