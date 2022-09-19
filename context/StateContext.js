import { useState, useContext, createContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        toggleSearch,
        setToggleSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
