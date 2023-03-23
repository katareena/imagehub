import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react';
import { toCamelCase } from '../utils/to-camel-case';
import { IImage } from '../interfaces/image';
import { URL, FETCH_OPTIONS } from '../constants/constants';

type AppProviderProps = {
  children: JSX.Element,
};

type ContextProps = {
  items: IImage[] | [], 
  setItems: React.Dispatch<React.SetStateAction<IImage[] | []>>
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, 
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [ items, setItems ] = useState<IImage[] | []>([]);    
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const fetchData = useCallback(async() => {
    setIsLoading(true);

    try {
      const response = await fetch(URL, FETCH_OPTIONS);
      const {photos} = await response.json();

      if (photos) {
        const cameliseData = toCamelCase(photos);
        setItems(cameliseData);

      } else {
        setItems([]);
      }

      setIsLoading(false);
      
    } catch(error) {
      console.log(error);
      setIsLoading(false);
    }

  }, []);  

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider value = {{
      items,
      setItems,
      isLoading,
      setIsLoading,
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('AppContext must be inside a Provider with a value');
  }
  return context;
}

export { AppContext, AppProvider };
