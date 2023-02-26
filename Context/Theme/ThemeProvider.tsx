import { ThemeProvider, createTheme } from '@mui/system';
import React, { FC, PropsWithChildren } from 'react'
import { useTeams } from '../TeamProvider';
import { CssBaseline } from '@material-ui/core';
import { getDesignTokens } from './theme';


const useTheme = () => {
    const { mode: contextMode } = useTeams()
    let mode = contextMode
  
    const theme = React.useMemo(() => {
      const designTokens = getDesignTokens(mode)
      return createTheme(designTokens);
    }, [mode])
    return {
      theme,
    }
  }
  
const NhlThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
    );
  }

  export default NhlThemeProvider
