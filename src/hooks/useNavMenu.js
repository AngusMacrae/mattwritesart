import { useState } from 'react';
import useOnResize from './useOnResize.js';

export default function useNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(prevState => !prevState);
  }

  useOnResize(closeMenu);

  return { menuOpen, openMenu, closeMenu, toggleMenu };
}
