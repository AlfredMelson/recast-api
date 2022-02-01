import { alpha, Theme } from '@mui/material/styles'
import BrandSwatch from './BrandSwatch'

export default function BrandThemedComponents(theme: Theme) {
  return {
    components: {
      MuiAppBar: {
        defaultProps: {},
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backgroundImage: 'none'
          }, // Styles applied to the root element
          positionFixed: {} // Styles applied to the root element if invisible={true}
        }
      },
      MuiBackdrop: {
        defaultProps: {
          invisible: true
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          invisible: {} // Styles applied to the root element if invisible={true}
        }
      },
      MuiButton: {
        defaultProps: {}
      },
      styleOverrides: {
        root: {
          msTouchAction: 'manipulation',
          touchAction: 'manipulation',
          webkitTapHighlightColor: 'transparent',
          transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut
          }),
          '&:hover': { backgroundColor: 'transparent' }
        }, // Styles applied to the root element
        text: {
          fontWeight: theme.palette.mode === 'dark' ? 400 : 600
        }, // Styles applied to the root element if variant="text"
        outlined: {}, // Styles applied to the root element if variant="outlined"
        contained: {}, // Styles applied to the root element if variant="contained"
        disabled: {}, // State class applied to the root element if disabled={true}
        textSizeSmall: { borderRadius: theme.spacing(3) }, // State class applied to the root element if disabled={true}
        endIcon: {
          '& .MuiButton-iconSizeSmall': {
            margin: 0
          }
        } // Styles applied to the endIcon element if supplied.
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true
        },
        styleOverrides: {
          root: {
            borderRadius: theme.spacing(3),
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          }, // Styles applied to the root element
          disabled: {}, // State class applied to the root element if disabled={true}
          focusVisible: {} // State class applied to the root element if keyboard focused
        }
      },
      MuiButtonGroup: {
        defaultProps: {
          variant: 'outlined',
          disableFocusRipple: true,
          disableRipple: true
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          grouped: {
            '&:not(:last-of-type)': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRight: '1px solid',
              borderColor: theme.palette.divider
            }
          } // Styles applied to the root element
        }
      },
      MuiCard: {
        defaultProps: {},
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          } // Styles applied to the root element
        }
      },
      MuiCardActionArea: {
        defaultProps: {},
        styleOverrides: {
          root: {} // Styles applied to the root element
        }
      },
      MuiCardActions: {
        defaultProps: {},
        styleOverrides: {
          root: {
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          } // Styles applied to the root element
        }
      },
      MuiCardContent: {
        defaultProps: {},
        styleOverrides: {
          root: {
            padding: theme.spacing(0),
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          } // Styles applied to the root element
        }
      },
      MuiCardHeader: {
        defaultProps: {},
        styleOverrides: {
          root: {
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          }, // Styles applied to the root element
          avatar: {}, // Styles applied to the avatar element
          action: {}, // Styles applied to the action element
          content: {}, // Styles applied to the content wrapper element
          title: {
            ...theme.typography.body2
          }, // Styles applied to the title Typography element
          subheader: {} // Styles applied to the subheader Typography element
        }
      },
      MuiContainer: {
        defaultProps: {},
        styleOverrides: {
          root: {
            // [theme.breakpoints.up('md')]: {
            //   padding: theme.spacing(0, 20),
            // },
          }
        }
      },
      MuiDialog: {
        defaultProps: {},
        styleOverrides: {
          root: { marginTop: theme.spacing(60) }, // Styles applied to the root element
          paperAnchorTop: {}, // Styles applied to the Paper component if anchor="top"
          paper: {
            backgroundColor: '#21262d',
            backgroundImage: 'none',
            margin: 0,
            padding: 0,
            borderRadius: 3,
            maxHeight: '100vh',
            bottom: '13px'
          } // Styles applied to the Paper component
        }
      },
      MuiDivider: {
        defaultProps: {},
        styleOverrides: {
          root: {
            margin: theme.spacing(5, 10)
          }
        }
      },
      MuiDrawer: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          // paperAnchorTop: { boxShadow: 'none' }, // Styles applied to the Paper component if anchor="top"
          paper: { backgroundColor: 'transparent', backgroundImage: 'none', boxShadow: 'none' } // Styles applied to the Paper component
        }
      },
      MuiFormControl: {
        defaultProps: {},
        styleOverrides: {
          root: { minWidth: 240 }, // Styles applied to the root element
          fullWidth: {} // Styles applied to the root element if fullWidth={true}
        }
      },
      MuiFormControlLabel: {
        defaultProps: {},
        styleOverrides: {
          root: {
            ...theme.typography.body2,
            textDecoration: 'none',
            backgroundColor: 'transparent',
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[200]
                : BrandSwatch.Light.Grey[700],
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
            // '&:hover, &.Mui-focused': {
            //   color: theme.palette.text.primary,
            //   backgroundColor: 'transparent'
            // }
          }, // Styles applied to the root element
          disabled: {}, // State class applied to the root element if disabled={true}
          label: {
            ...theme.typography.body2,
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[200]
                : BrandSwatch.Light.Grey[700]
          } // Styles applied to the label's Typography component
        }
      },
      MuiIcon: {
        defaultProps: {
          fontSize: 'small'
        },
        styleOverrides: {}
      },
      MuiIconButton: {
        defaultProps: {},
        styleOverrides: {
          root: {
            msTouchAction: 'manipulation',
            touchAction: 'manipulation',
            webkitTapHighlightColor: 'transparent',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover, & .Mui-focused': {
              backgroundColor: 'transparent'
            }
          }
        }
      },
      MuiInput: {
        defaultProps: {},
        styleOverrides: {
          root: {},
          input: {
            padding: theme.spacing(5, 0),
            '&:focus': {
              backgroundColor: 'transparent'
            }
          }
        }
      },
      MuiInputBase: {
        defaultProps: {},
        styleOverrides: {
          root: {
            borderRadius: theme.spacing(3),
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          }, // Styles applied to the root element
          formControl: {}, // Styles applied to the root element if the component is a descendant of FormControl
          focused: {}, // Styles applied to the root element if the component is focused
          disabled: {}, // Styles applied to the root element if disabled={true}
          error: {}, // State class applied to the root element if error={true}
          fullWidth: {}, // Styles applied to the root element if fullWidth={true}
          input: {}, // Styles applied to the input element
          inputSizeSmall: {} // Styles applied to the input element if size="small"
        }
      },
      MuiInputLabel: {
        defaultProps: {},
        styleOverrides: {
          root: {}
        }
      },
      MuiMenu: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          paper: {}, // Styles applied to the Paper component
          list: {
            paddingTop: 0,
            paddingBottom: 0
          } // Styles applied to the List component via `MenuList`
        }
      },
      MuiMenuItem: {
        defaultProps: {
          dense: { sm: false, md: true }
        },
        styleOverrides: {
          root: {
            borderRadius: theme.spacing(0),
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[200],
            '&:hover, &.Mui-focused': {
              color: theme.palette.text.primary,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? alpha(BrandSwatch.Dark.Grey[700], 0.6)
                  : alpha(BrandSwatch.Light.Grey[300], 0.8)
            },
            '&.Mui-selected': {
              cursor: 'default',
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[700]
                  : BrandSwatch.Light.Grey[300],
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Grey[700]
                    : BrandSwatch.Light.Grey[300]
              }
            }
          }, // Styles applied to the root element
          //  MuiButtonBase-root-MuiMenuItem-root.Mui-selected
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {} // State class applied to the root element if selected={true}
        }
      },

      MuiMenuList: {
        defaultProps: {
          dense: true
        },
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[200],
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[700]
                  : BrandSwatch.Light.Grey[300]
            },
            '&.Mui-focused': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[600]
                  : BrandSwatch.Light.Grey[400]
            },
            '&.Mui-selected': {
              cursor: 'default',
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[600]
                  : BrandSwatch.Light.Grey[400],
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Grey[600]
                    : BrandSwatch.Light.Grey[300]
              }
            }
          }, // Styles applied to the root element
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {} // State class applied to the root element if selected={true}
        }
      },
      MuiModal: {
        defaultProps: {
          hideBackdrop: true
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          hidden: {} // Styles applied to the root element if the Modal has exited.
        }
      },
      MuiOutlinedInput: {
        defaultProps: {},
        styleOverrides: {}
      },
      MuiPaper: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          rounded: {}, // Styles applied to the root element unless square={true}
          outlined: {}, // Styles applied to the root element if variant="outlined"
          elevation: {} // Styles applied to the root element if variant="elevation"
        }
      },
      MuiPopover: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          paper: { marginLeft: '-10px' } // Styles applied to the root element unless square={true}
        }
      },
      MuiRadio: {
        defaultProps: {
          size: 'small' // small is equivalent to the dense radio styling
        },
        styleOverrides: {
          root: {
            ...theme.typography.body2,
            textDecoration: 'none',
            backgroundColor: 'transparent',
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[200]
                : BrandSwatch.Light.Grey[500],
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            }),
            '&:hover, &.Mui-focused': {
              color:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[50]
                  : BrandSwatch.Light.Grey[900],
              backgroundColor: 'transparent'
            },
            '&.Mui-checked': {
              color:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[200]
                  : BrandSwatch.Light.Grey[700],
              backgroundColor: 'transparent',
              cursor: 'default'
            }
          }, // Styles applied to the root element
          checked: {}, // State class applied to the root element if checked={true}
          disabled: {} // State class applied to the root element if disabled={true}
        }
      },
      MuiSelect: {
        defaultProps: {
          variant: 'standard'
        },
        styleOverrides: {
          select: {
            fontSize: 16,
            borderRadius: theme.spacing(3),
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          }, // Styles applied to the select component `select` class
          icon: {
            margin: theme.spacing(0, 10),
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[200]
                : BrandSwatch.Light.Grey[700],
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            }),
            '&:hover': {
              // color:
              //   theme.palette.mode === 'dark'
              //     ? BrandSwatch.Dark.Grey[50]
              //     : BrandSwatch.Light.Grey[900]
            }
          }, // Styles applied to the icon component
          iconOpen: {
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[50]
                : BrandSwatch.Light.Grey[900]
          } // Styles applied to the icon component if the popup is open
        }
      },
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'small'
        },
        styleOverrides: {
          root: {} // Styles applied to the root element
        }
      },
      MuiSwitch: {
        defaultProps: {},
        styleOverrides: {
          root: {
            width: theme.spacing(32),
            height: theme.spacing(20),
            padding: theme.spacing(0)
          },
          switchBase: {
            height: theme.spacing(20),
            width: theme.spacing(20),
            padding: theme.spacing(0),
            color: '#fff',
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1
            },
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff'
            }
          },
          track: {
            opacity: 1,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[400]
          },
          thumb: {
            flexShrink: 0,
            width: '14px',
            height: '14px'
          }
        }
      },
      MuiTab: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true
        },
        styleOverrides: {
          root: {
            borderRadius: theme.spacing(3, 3, 0, 0)
          }, // Styles applied to the root element
          labelIcon: {}, // Styles applied to the root element if both icon and label are provided
          selected: {}, // State class applied to the root element if selected={true} (controlled by the Tabs component)
          disabled: {}, // State class applied to the root element if disabled={true} (controlled by the Tabs component)
          fullWidth: {}, // Styles applied to the root element if fullWidth={true} (controlled by the Tabs component)
          wrapped: {}, // Styles applied to the root element if wrapped={true}
          iconWrapper: {} // Styles applied to the wrapper element of `icon` if icon is provided
        }
      },
      MuiTabs: {
        defaultProps: {},
        styleOverrides: {
          indicator: { backgroundColor: 'transparent' }
        }
      },
      MuiTableCell: {
        defaultProps: {},
        styleOverrides: {
          root: {
            padding: theme.spacing(10, 20),
            borderColor: theme.palette.divider
          },
          head: {
            color: theme.palette.text.primary,
            fontWeight: 600
          },
          body: {
            color: theme.palette.text.secondary
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small'
        },
        styleOverrides: {
          root: {
            fontSize: theme.typography.body2
          }
        }
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          size: 'small'
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          vertical: {}, // Styles applied to the root element if orientation="vertical"
          disabled: {}, // State class applied to the root element if disabled={true}
          grouped: {}, // Styles applied to the children
          groupedHorizontal: {}, // Styles applied to the children if orientation="horizontal"
          groupedVertical: {} // Styles applied to the children if orientation="vertical"
        }
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true, // If true, adds an arrow to the tooltip
          enterDelay: 400, // ms to wait before showing the tooltip
          enterNextDelay: 50, // ms to wait before showing the tooltip when one was already recently opened
          enterTouchDelay: 800, // ms a user must touch the element before showing the tooltip
          leaveDelay: 50, // ms to wait before hiding the tooltip
          leaveTouchDelay: 1000, // ms after the user stops touching an element before hiding the tooltip
          placement: 'bottom' // position the tooltip will appear, 'bottom' is default
        },
        styleOverrides: {
          popper: {}, // Styles applied to the Popper component.
          popperInteractive: {}, // Styles applied to the Popper component unless disableInteractive={true}
          popperArrow: {}, // Styles applied to the Popper component if arrow={true}
          popperClose: {}, // Styles applied to the Popper component unless the tooltip is open
          tooltip: {
            fontSize: 13,
            fontWeight: theme.palette.mode === 'dark' ? 400 : 600,
            color: theme.palette.text.primary,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Green[500]
                : BrandSwatch.Light.Green[300],
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0px 0px 6px 0px rgba(0,0,0,0.5)'
                : '0px 0px 3px 0px rgba(0,0,0,0.25)'
          }, // Styles applied to the tooltip (label wrapper) element
          tooltipArrow: {}, // Styles applied to the tooltip (label wrapper) element if arrow={true}
          arrow: {
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Green[500]
                : BrandSwatch.Light.Green[300]
          }, // Styles applied to the arrow element
          touch: {}, // Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch
          tooltipPlacementLeft: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "left"
          tooltipPlacementRight: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "right"
          tooltipPlacementTop: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "top"
          tooltipPlacementBottom: {} // Styles applied to the tooltip (label wrapper) element if placement contains "bottom"
        }
      },
      MuiTreeItem: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          group: {}, // Styles applied to the transition component
          content: {}, // Styles applied to the content element
          expanded: {}, // State class applied to the content element when expanded
          selected: {}, // State class applied to the content element when selected
          focused: {}, // State class applied to the content element when focused
          disabled: {}, // State class applied to the element when disabled
          iconContainer: {}, // Styles applied to the tree node icon
          label: {
            ...theme.typography.body2
          } // Styles applied to the label element
        }
      },
      MuiTreeView: {
        defaultProps: {},
        styleOverrides: {
          root: {} // Styles applied to the root element
        }
      },
      MuiTypography: {
        defaultProps: {},
        styleOverrides: {
          root: {
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          }, // Styles applied to the root element if variant="root"
          body1: {}, // Styles applied to the root element if variant="body1"
          body2: {}, // Styles applied to the root element if variant="body2"
          caption: {}, // Styles applied to the root element if variant="caption"
          button: { textTransform: 'capitalize', ...theme.typography.body2 }, // Styles applied to the root element if variant="button"
          h1: {}, // Styles applied to the root element if variant="h1"
          h2: {}, // Styles applied to the root element if variant="h2"
          h3: {}, // Styles applied to the root element if variant="h3"
          h4: {}, // Styles applied to the root element if variant="h4"
          h5: {}, // Styles applied to the root element if variant="h5"
          h6: {}, // Styles applied to the root element if variant="h6"
          subtitle1: {}, // Styles applied to the root element if variant="subtitle1"
          subtitle2: {}, // Styles applied to the root element if variant="subtitle2"
          overline: {}, // Styles applied to the root element if variant="overline"
          noWrap: {}, // Styles applied to the root element if variant="noWrap"
          gutterBottom: {}, // Styles applied to the root element if variant="gutterBottom"
          paragraph: {} // Styles applied to the root element if variant="paragraph"
        }
      }
    }
  }
}
