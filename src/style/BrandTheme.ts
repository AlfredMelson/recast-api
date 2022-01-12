import { createTheme, ThemeOptions } from '@mui/material/styles'
import { BrandSwatch } from './BrandSwatch'

/**
 * @module {@mui/material/styles}
 * @purpose typography variant 'code'
 * @description Adding & disabling variants
 * In addition to using the default typography variants, you can add custom ones, or disable any you don't need. Here is what you need to do:
 * @step1 Update the theme's typography object
 * @step2 Update the necessary typings
 * Make sure that the typings for the theme's typography variants and the Typography's variant prop reflects the new set of variants.
 * @url https://mui.com/customization/typography/#adding-amp-disabling-variants
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

// optically-consistent adjustment to space between letters
function round(value: number) {
  return Math.round(value * 1e5) / 1e5
}

const theme = createTheme()
export const BrandDesignTokens = (mode: 'dark' | 'light') =>
  ({
    breakpoints: {},
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: BrandSwatch.Dark.Grey[900],
        },
        text: {
          primary: BrandSwatch.Dark.Grey[50],
          secondary: BrandSwatch.Dark.Grey[100],
          disabled: BrandSwatch.Dark.Grey[500],
        },
        // primary: {},
        // secondary: {},
        // error: {},
        // warning: {},
        // info: {},
        // success: {},
        divider: BrandSwatch.Dark.Grey[700],
        svgBg: {
          base: BrandSwatch.Dark.Grey[400],
          active: BrandSwatch.Dark.Grey[500],
        },
        svgFilled: {
          base: BrandSwatch.Dark.Green[800],
          active: BrandSwatch.Dark.Green[300],
        },
        svgStroke: {
          base: BrandSwatch.Dark.Blue[600],
          active: BrandSwatch.Dark.Blue[800],
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: BrandSwatch.Light.Grey[50],
        },
        text: {
          primary: BrandSwatch.Light.Grey[900],
          secondary: BrandSwatch.Light.Grey[700],
          disabled: BrandSwatch.Light.Grey[500],
        },
        // primary: {},
        // secondary: {},
        // error: {},
        // warning: {},
        // info: {},
        // success: {},
        divider: BrandSwatch.Light.Grey[200],
        svgBg: {
          base: BrandSwatch.Light.Grey[50],
          active: BrandSwatch.Light.Grey[50],
        },
        svgFilled: {
          base: BrandSwatch.Light.Grey[500],
          active: BrandSwatch.Light.Blue[500],
        },
        svgStroke: {
          base: BrandSwatch.Light.Grey[50],
          active: BrandSwatch.Light.Grey[200],
        },
      }),
    },
    spacing: 1,
    shape: {
      borderRadius: 3,
    },
    mixins: {
      toolbar: {
        '@media (min-width:0px) and (orientation: landscape)': {},
        '@media (min-width:600px)': {},
      },
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
        '"Segoe UI Symbol"',
      ].join(','),
      ...(mode === 'dark' && {
        fontWeightLightregular: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
      }),
      ...(mode === 'light' && {
        fontWeightLightregular: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
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
        lineHeight: 80 / 72,
      },
      h2: {
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        letterSpacing: `${round(-1.5 / 48)}em`,
        fontWeight: 700,
        lineHeight: 44 / 36,
      },
      h3: {
        fontSize: theme.typography.pxToRem(36),
        letterSpacing: `${round(-1 / 36)}em`,
        lineHeight: 44 / 36,
      },
      h4: {
        fontSize: theme.typography.pxToRem(28),
        letterSpacing: `${round(-0.5 / 24)}em`,
        lineHeight: 42 / 28,
      },
      h5: {
        fontSize: theme.typography.pxToRem(24),
        letterSpacing: `${round(-0.25 / 20)}em`,
        lineHeight: 36 / 24,
      },
      h6: {
        fontSize: theme.typography.pxToRem(20),
        letterSpacing: 0,
        lineHeight: 30 / 20,
      },
      subtitle1: {
        fontSize: theme.typography.pxToRem(18),
        letterSpacing: 0,
        lineHeight: 24 / 18,
        fontWeight: 500,
      },
      body1: {
        // fontSize: theme.typography.pxToRem(16),
        fontSize: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
        letterSpacing: 0,
        lineHeight: 24 / 16,
      },
      body2: {
        // fontSize: theme.typography.pxToRem(14),
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        letterSpacing: 0,
        lineHeight: 21 / 14,
      },
      caption: {
        display: 'inline-block',
        // fontSize: theme.typography.pxToRem(12),
        fontSize: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
        letterSpacing: 0,
        lineHeight: 18 / 12,
      },
      code: {
        display: 'block',
        // fontSize: theme.typography.pxToRem(14),
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        fontFamily: ['"Fira Code"', '"monospace"'].join(','),
        letterSpacing: 0,
        lineHeight: 1.7,
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        standard: 300,
        complex: 500,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // most common easing curve
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // enter at full velocity and slowly decelerate to a resting point
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // leave at full velocity without decelerating
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // sharp curve is used by objects that may return at any time
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    zIndex: {},
  } as ThemeOptions)
