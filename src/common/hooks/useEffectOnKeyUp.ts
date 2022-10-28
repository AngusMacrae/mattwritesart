import { useEffect, useCallback } from "react";

export default function useEffectOnKeyUp(key, callback) {
  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === key) {
        callback();
      }
    },
    [key, callback]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);
}
