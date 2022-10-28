import { useState } from "react";

type TReturn = [
  isActive: boolean,
  activate: () => void,
  deactivate: () => void,
  toggle: () => void
];

export default function useToggle(initialState = false): TReturn {
  const [isActive, setIsActive] = useState(initialState);

  function activate() {
    setIsActive(true);
  }

  function deactivate() {
    console.log("clicked");
    setIsActive(false);
  }

  function toggle() {
    setIsActive((prevState) => !prevState);
  }

  return [isActive, activate, deactivate, toggle];
}
