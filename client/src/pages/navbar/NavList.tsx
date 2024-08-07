import { DarkMode, LightMode } from '@mui/icons-material';
import {
  IconButton,
  List,
  ListItem
} from '@mui/material';
import { useAuthContext } from 'auth/index';
import React from 'react';
import { scrollToSection } from 'utils/util';
import { NavListProps, Pages } from './types';

export const navList = [
  { id: 1, label: 'Projects', url: Pages.PROJECTS },
  { id: 2, label: 'Skills', url: Pages.SKILLS },
  { id: 3, label: 'Certifications', url: Pages.CERTIFICATIONS },
  { id: 4, label: 'About', url: Pages.ABOUT },
  { id: 5, label: 'Contact', url: Pages.CONTACT },
  { id: 6, label: 'Blog', url: Pages.BLOG },
];

export const NavList: React.FC<NavListProps> = ({ dark }) => {
  const { setMode, mode } = useAuthContext();
  const handleLinkClick = (url: string) => {
    const el = document.getElementById(url);
    if (el) {
      scrollToSection(el);
    }
  };
  return (
    <>
    <List sx={{display:"flex"}}>
      {navList.map((section) => (
        <ListItem
          sx={{ cursor: 'pointer' }}
          onClick={() => handleLinkClick(section.url)}
        >
          {section.label}
        </ListItem>
      ))}
      </List>
      <IconButton onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} aria-label='dark-light-button'>
        {mode === 'dark' ? (
          <DarkMode sx={{ fontSize: '25px' }} />
        ) : (
          <LightMode sx={{ color: dark, fontSize: '25px' }} />
        )}
      </IconButton>
    </>
  );
};
