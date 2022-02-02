import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [isActive, setIsActive] = useState(initialValue);

  function activate() {
    setIsActive(true);
  }

  function deactivate() {
    setIsActive(false);
  }

  function toggle() {
    setIsActive(prevState => !prevState);
  }

  return [isActive, activate, deactivate, toggle];
}
