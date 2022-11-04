import { useCallback, useState } from "react";

type TReturn = [
  isActive: boolean,
  activate: () => void,
  deactivate: () => void,
  toggle: () => void
];

export default function useToggle(initialState = false): TReturn {
  const [isActive, setIsActive] = useState(initialState);

  const activate = useCallback(() => {
    setIsActive(true);
  }, []);

  const deactivate = useCallback(() => {
    setIsActive(false);
  }, []);

  const toggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return [isActive, activate, deactivate, toggle];
}
