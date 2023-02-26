import { ThemeOptions } from '@mui/material'
import Colours from './Colours'

// const primary = Colours.AP060.dark
const secondary = Colours.BROWN.light
// const defaultBorderColor = Colours.N070.light
// const tableRowHover = Colours.AP010.light

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    secondary: {
      main: secondary,
      light: Colours.BROWN.light,
      dark: Colours.BROWN.dark,
    },
    primary: {
      main: Colours.BROWN[mode],
      light: '#FFFFFF',
      dark: Colours.BROWN[mode],
    },
    info: {
      main: '#1890FF',
      light: '#E6F7FF',
      dark: '#33719E',
    },
    success: {
      main: '#97BD6F',
      light: '#F6FFED',
      dark: '#689844',
    },
    error: {
      main: '#F5222D',
      light: '#FFF1F0',
      dark: '#C74545',
    },
  },
  typography: {
    h1: {
      fontWeight: 'normal',
      fontSize: 32,
      lineHeight: '40px',
    },
    h2: {
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: '36px',
    },
    h3: {
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '24px',
    },
    h4: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: '36px',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '24px',
    },
    fontFamily: 'Inter',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        containedPrimary: {
          '> .MuiButton-startIcon': {
            '> .MuiSvgIcon-root': {
              fill: Colours.LIGHT_BLUE[mode],
            },
          },
        },
        root: {
          textTransform: 'inherit',
          '&.Pagination-activeButton.Pagination-text': {
            color: `${Colours.LIGHT_BLUE[mode]} !important`, // needed to use important here to get the color to apply to number in default table pagination
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: `${Colours.BLACK[mode]}`,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: Colours.RED[mode],
        },
        colorPrimary: {
          fill: Colours.RED[mode],
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '7px',
          margin: '0px 5px',
          '& .MuiSvgIcon-root': {
            fill: Colours.GREEN_01[mode],
          },
          '&:hover': {
            '& .MuiSvgIcon-root': {
              fill: Colours.GREEN_01[mode],
            },
          },
          '&.Mui-disabled': {
            '& .MuiSvgIcon-root': {
              fill: Colours.GREEN_01[mode],
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
        },
        textColorPrimary: {
          '&.Mui-selected': {
            '& .MuiSvgIcon-root': {
              fill: Colours.YELLOW[mode],
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          color: `${Colours.ORANGE[mode]} !important`,
          fontSize: '.75rem !important',
        },
        shrink: {
          background: 'transparent !important',
          color: `${Colours.ORANGE[mode]} !important`,
          transform: 'translate(14px, -6px) scale(1) !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${Colours.PURPLE[mode]} inset`,
            WebkitTextFillColor: `${Colours.PURPLE[mode]}`,
            borderRadius: '0px',
            fontSize: 'inherit',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: Colours.BLUE_01[mode],
          padding: '0px',
          '& fieldset': {
            borderColor: Colours.BLUE_01[mode],
          },
          '&:hover': {
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: Colours.BLUE_01[mode],
            },
            filter:
              mode === 'light'
                ? 'drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.18))'
                : 'none',
          },
          '&.Mui-focused': {
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: Colours.YELLOW[mode],
            },
            filter:
              mode === 'light'
                ? 'drop-shadow(0px 8px 10px rgba(42, 110, 251, 0.18))'
                : 'none',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: Colours.PINK[mode],
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: Colours.PINK[mode],
        },
        root: {
          '& .MuiBackdrop-root': {
            backgroundColor: `${Colours.BLACK[mode]}3C`,
            backdropFilter: 'blur(4px)',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: Colours.PURPLE_01[mode],
          },
        },
        root: {
          backgroundColor: Colours.BLUE_04[mode],
          '&:hover': {
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: Colours.GREEN_03[mode],
          },
          '&:hover td.action-column': {
            display: 'flex',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 0,
          height: '36px',
          borderColor: Colours.ORANGE[mode],
          alignItems: 'center',
          fontSize: '0.75rem',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          '& .MuiIconButton-label > .MuiSvgIcon-root': {
            fill: Colours.YELLOW[mode],
          },
          '& .MuiSvgIcon-root': {
            fill: Colours.PINK[mode],
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '22px 24px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '6px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: Colours.BLUE_01[mode],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          color: Colours.PINK[mode],
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          backgroundColor: Colours.YELLOW[mode],
          color: `${Colours.ORANGE[mode]}!important`,
          padding: '2px 12px',
          borderRadius: '6px',
          fontSize: '10px',
          lineHeight: '16px',
        },
        contained: {
          marginLeft: '0px',
          marginRight: '0px',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          background: Colours.BLUE_03[mode],
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        marginNormal: {
          marginTop: '0px',
          marginBottom: '0px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        input: {
          '&:first-of-type': {
            paddingLeft: '20px !important',
          },
        },
        inputRoot: {
          padding: '6px !important',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          '&.Pagination-text': {
            color: `${Colours.GREEN_01[mode]} !important`, // needed to use important here to get the color to apply to number in default table pagination
          },
        },
      },
    },
  },
})
