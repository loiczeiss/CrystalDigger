import { createContext, useContext, useState, useRef, useEffect } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [encyclopedieIndex, setEncyclopedieIndex] = useState<number>(0)
  const [listStyle, setListStyle] = useState<number>(0)
 
  const contextValues = {
    activeIndex,
    setActiveIndex,
    encyclopedieIndex, setEncyclopedieIndex,
    listStyle, setListStyle

  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
