// Thinking on ways to solve a DARK/LIGHT THEME SWITCH
// https://www.youtube.com/watch?v=kZiS1QStIWc
import { styled } from '@mui/material/styles'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function SunAndMoonIcon(props: SvgIconProps): JSX.Element {
  // aria-hidden="true"
  // viewBox="0 0 24 24"
  return (
    <SvgIconSx {...props}>
      <mask className='moon' id='moon-mask'>
        <rect x='0' y='0' width='100%' height='100%' fill='white' />
        <circle cx='24' cy='10' r='6' fill='black' />
      </mask>
      <circle className='sun' cx='12' cy='12' r='6' mask='url(#moon-mask)' fill='currentColor' />
      <g className='sun-beams' stroke='currentColor'>
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
      </g>
    </SvgIconSx>
  )
}

export const SvgIconSx = styled(
  (props: SvgIconProps) => <SvgIcon sx={{ width: 24, height: 24 }} {...props} />,
  {
    name: 'SvgIcon',
    slot: 'style'
  }
)(() => ({
  '& > :is(.moon, .sun, .sun-beams)': {
    webkitTransformOrigin: 'center center',
    msTransformOrigin: 'center center',
    transformOrigin: 'center center'
  },
  '& > :is(.moon, .sun)': {
    fill: 'var(--icon-fill)',
    '@nest .theme-toggle:is(:hover, :focus-visible) > & ': {
      fill: 'var(--icon-fill-hover)'
    }
  },
  '& > .sun-beams': {
    stroke: 'var(--icon-fill)',
    strokeWidth: '2px',
    '@nest .theme-toggle:is(:hover, :focus-visible) &': {
      stroke: 'var(--icon-fill-hover)'
    }
  },

  '@nest [data-theme="dark"]': {
    '& > .sun': {
      webkitTransform: 'scale(1.75)',
      msTransform: 'scale(1.75)',
      transform: 'scale(1.75)'
    },
    '& > .sun-beams': {
      opacity: 0
    },
    '& > .moon > circle': {
      webkitTransform: 'translateX(-7px)',
      msTransform: 'translateX(-7px)',
      transform: 'translateX(-7px)',
      '@supports (cx: 1)': {
        webkitTransform: 'translateX(0)',
        msTransform: 'translateX(0)',
        transform: 'translateX(0)',
        cx: 17
      }
    }
  },
  '@media (--motionOK)': {
    '& > .sun': {
      webkitTransition: '-webkit-transform 0.5s var(--ease-elastic-3)',
      transition: '-webkit-transform 0.5s var(--ease-elastic-3)',
      oTransition: 'transform 0.5s var(--ease-elastic-3)',
      webkitTransform: '0.5s var(--ease-elastic-3)'
    },
    '& > .sun-beams': {
      webkitTransition: 'opacity 0.5s var(--ease-3), -webkit-transform 0.5s var(--ease-elastic-4)',
      transition: 'opacity 0.5s var(--ease-3), webkit-transform 0.5s var(--ease-elastic-4)',
      oTransition: 'transform 0.5s var(--ease-elastic-4), opacity 0.5s var(--ease-3)',
      webkitTransform: '0.5s var(--ease-elastic-4)'
    },
    '& .moon > circle': {
      webkitTransition: '-webkit-transform 0.25s var(--ease-out-5)',
      transition: '-webkit-transform 0.25s var(--ease-out-5)',
      oTransition: 'transform 0.25s var(--ease-out-5)',
      '@supports (cx: 1)': {
        webkitTransition: 'cx 0.25s var(--easeout-5)',
        oTransition: 'cx 0.25s var(--easeout-5)',
        transition: 'cx 0.25s var(--easeout-5)'
      }
    },
    '@nest [data-theme="dark"]': {
      '& > .sun': {
        webkitTransform: 'scale(1.75)',
        msTransform: 'scale(1.75)',
        transform: 'scale(1.75)',
        webkitTransitionTimingFunction: 'var(--ease-3)',
        oTransitionTimingFunction: 'var(--ease-3)',
        transitionTimingFunction: 'var(--ease-3)',
        webkitTransitionDuration: '0.25s',
        oTransitionDuration: '0.25s',
        transitionDuration: '0.25s'
      },
      '& > .sun-beams': {
        webkitTransform: 'rotateZ(-25deg)',
        msTransform: 'rotate(-25deg)',
        transform: 'rotateZ(-25deg)',
        webkitTransitionDuration: '0.15s',
        oTransitionDuration: '0.15s',
        transitionDuration: '0.15s'
      },
      '& > .moon > circle': {
        webkitTransitionDelay: '0.25s',
        oTransitionDelay: '0.25s',
        transitionDelay: '0.25s',
        webkitTransitionDuration: '0.5s',
        oTransitionDuration: '0.5s',
        transitionDuration: '0.5s'
      }
    }
  }
}))
