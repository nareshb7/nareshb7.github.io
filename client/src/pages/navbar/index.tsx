import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton, useTheme } from '@mui/material'
import { useAuthContext } from 'auth/index';
import React from 'react'
import { ThemeType } from 'theme/index';

const Navbar = () => {
  const {setMode, mode} = useAuthContext()
  const theme = useTheme() as ThemeType;
  const dark = theme.palette.neutral.dark
  return (
    <div>
       <IconButton onClick={() => setMode(mode === "dark"? "light": "dark")}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
    </div>
  )
}

export default Navbar