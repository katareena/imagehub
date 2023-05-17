import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface AppProviderProps {
  children: JSX.Element;
}

interface ContextProps {
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>,
  searchTerm: string, 
  setSearchTerm: Dispatch<SetStateAction<string>>,
  isSearchActive: boolean,
  setIsSearchActive: Dispatch<SetStateAction<boolean>>,
}

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ isSearchActive, setIsSearchActive ] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        isSearchActive,
        setIsSearchActive,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('AppContext must be inside a Provider with a value');
  }
  return context;
};

export { AppProvider, useGlobalContext };
