// This file refers to the design figma file which lists all Nova Colours and corresponding dark colours
// Each design has a colour code matching to the below
// The comment in each colour code represents the typical use for it

const Colours = {
    // Actions
    BLACK_01: {
      // Hover
      light: '#F5F8FF',
      dark: '#18191F',
    },
    BLACK_02: {
      // Secondary Selected
      light: '#F5F5FF',
      dark: '#1E1F2A',
    },
    BLACK_03: {
      // Track background for switches/progress bars
      light: '#D6E3FB',
      dark: '#363E52',
    },
    BLUE_01: {
      // Input field Text Default
      light: '#5571A5',
      dark: '#4C7EE5',
    },
    BLUE_02: {
      // No Usage
      light: '#8398BF',
      dark: '#2A6EFB',
    },
    BLUE_03: {
      // Low Contrast AP
      light: '#84C8FF',
      dark: '#2A6EFB',
    },
    BLUE_04: {
      // Primary Action
      light: '#1E68FA',
      dark: '#61A0FF',
    },
    BLUE_05: {
      // No Usage
      light: '#2A6EFB',
      dark: '#8398BF',
    },
    BLUE_06: {
      // No Usage
      light: '#2A6EFB',
      dark: '#8398BF',
    },
    GREY_01: {
      // Text Input Complete
      light: '#455882',
      dark: '#D6E3FB',
    },
    // Naturals
    GREY_02: {
      // High Contrast
      light: '#1D1D1D',
      dark: '#EAEAEA',
    },
    Grey_03: {
      // Emphasis Text - highest contract
      light: '#363636',
      dark: '#C5CFD6',
    },
    GREY_04: {
      light: '#505152',
      dark: '#BEC4C9',
    },
    Grey_05: {
      // Main Text Colour
      light: '#606060',
      dark: '#E4E4E4',
    },
    GREY_06: {
      light: '#6B6D70',
      dark: '#ABB3B7',
    },
    GREY_07: {
      // Deempasis Text Colous - low contrast
      light: '#797979',
      dark: '#9BA5A7',
    },
    GREY_08: {
      light: '#888B8E',
      dark: '#6D767A',
    },
    GREY_09: {
      // Disabled Text and Icons
      light: '#9699A0',
      dark: '#444A51',
    },
    GREY_10: {
      light: '#B7B9C0',
      dark: '#3A424B ',
    },
    WHITE: {
      light: '#FFFFFF',
      dark: '#FFFFFF',
    },
    BW: {
      // Surface Elevation, Main Level Cards
      light: '#FFFFFF',
      dark: '#131315',
    },
    BW_02: {
      // Notification Background
      light: '#0A0B0B',
      dark: '#F8F9FA',
    },
    PURPLE: {
      // Screen Overlay
      light: '#838DC3',
      dark: '#838DC3',
    },
    LIGHT_BLUE: {
      // Blue Surface Colour
      light: '#42A5F6',
      dark: '#42A5F6',
    },
    GREEN_01: {
      // Green Surface Colour
      light: '#18A57B',
      dark: '#18A57B',
    },
    GREEN_02: {
      // Turqoise Surface Colour
      light: '#38E2AF',
      dark: '#72C8AE',
    },
    GREEN_03: {
      // Lime Green Surface Colour
      light: '#9BFA4E',
      dark: '#85C86E',
    },
    GREEN_04: {
      // Acid Green Surface Colour
      light: '#C6FF00',
      dark: '#A9C88A',
    },
    PURPLE_01: {
      // Purple Surface Colour
      light: '#B180FF',
      dark: '#BE9AF9',
    },
    LIGHT_BLUE01: {
      // Sky Blue Surface Colour
      light: '#5ED2FA',
      dark: '#9FC7E4',
    },
    PINK: {
      // Pink Surface Colour
      light: '#FF79D9',
      dark: '#FF8BDE',
    },
    RED: {
      // Coral Red Surface Colour
      light: '#FF5656',
      dark: '#FF5656',
    },
    YELLOW: {
      // Yellow Surface Colour
      light: '#FFDF39',
      dark: '#F8CF67',
    },
    ORANGE: {
      // Orange Surface Colour
      light: '#FFA500',
      dark: '#FFA500',
    },
    BROWN: {
      // Brown Surface Colour
      light: '#A67C52',
      dark: '#A67C52',
    },
    BLACK: {
      // Black Surface Colour
      light: '#000000',
      dark: '#000000',
    },
    GREY: {
      // Grey Surface Colour
      light: '#EAEAEA',
      dark: '#1D1D1D',
    },
    GREY_11: {
      // Grey Surface Colour  
      light: '#F5F5F5',
      dark: '#1D1D1D',
    },
    GREY_12: {
      // Grey Surface Colour
      light: '#F8F9FA', 
      dark: '#0A0B0B',
    },
  } as const
  
  export default Colours
  