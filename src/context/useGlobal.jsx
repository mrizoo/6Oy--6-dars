import { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const changeState = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: false,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
