import { useState, useEffect } from "react";

function usePersistentState(initialState, key = "default_key") {
  const [state, setState] = useState(() => {
    const existingState = localStorage.getItem(key);
    return existingState ? JSON.parse(existingState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("first_name", JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;
