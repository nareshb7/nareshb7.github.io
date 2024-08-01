import React from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, ListItem } from '@mui/material';
import { useAuthContext } from 'auth/index';

export interface NavListProps {
  dark: string;
}

export const NavList = ({ dark }: NavListProps) => {
  const { setMode, mode } = useAuthContext();
  return (
    <>
      <ListItem sx={{ cursor: 'pointer' }}>Projects</ListItem>
      <ListItem sx={{ cursor: 'pointer' }}>Skills</ListItem>
      <ListItem sx={{ cursor: 'pointer' }}>Certifications</ListItem>
      <ListItem sx={{ cursor: 'pointer' }}>About</ListItem>
      <ListItem sx={{ cursor: 'pointer' }}>Contact</ListItem>
      <ListItem sx={{ cursor: 'pointer' }}>Blog</ListItem>
      <IconButton onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
        {mode === 'dark' ? (
          <DarkMode sx={{ fontSize: '25px' }} />
        ) : (
          <LightMode sx={{ color: dark, fontSize: '25px' }} />
        )}
      </IconButton>
    </>
  );
};
