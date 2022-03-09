import { useState } from "react";

export default function useToggle(initialState = false) {
  const [isActive, setIsActive] = useState(initialState);

  function activate() {
    setIsActive(true);
  }

  function deactivate() {
    setIsActive(false);
  }

  function toggle() {
    setIsActive((prevState) => !prevState);
  }

  return [isActive, activate, deactivate, toggle];
}
