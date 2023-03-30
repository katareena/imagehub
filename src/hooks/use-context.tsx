import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch
} from 'react';
import { toCamelCase } from '../utils/to-camel-case';
import { IImage } from '../interfaces/image';
import { URL, FETCH_OPTIONS, ITEMS_PER_FETCHING } from '../constants/constants';

interface AppProviderProps {
  children: JSX.Element,
};

interface ContextProps {
  items: IImage[] | [], 
  setItems: Dispatch<React.SetStateAction<IImage[] | []>>,
  fetching: boolean,
  setFetching: Dispatch<React.SetStateAction<boolean>>, 
  currentPage: number,
  setCurrentPage: Dispatch<React.SetStateAction<number>>,
  isNextPage: boolean,
  setIsNextPage: Dispatch<React.SetStateAction<boolean>>, 
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [ items, setItems ] = useState<IImage[] | []>([]);
  const [ fetching, setFetching ] = useState<boolean>(true);
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ isNextPage, setIsNextPage ] = useState<boolean>(true);

  useEffect(() => {
    if(fetching) {
      fetch(`${URL}?page=${currentPage}&per_page=${ITEMS_PER_FETCHING}`, FETCH_OPTIONS)
      .then((data) => {
        return data.json();
      })
      .then(data => {
        const nextPage = !!data.next_page;
        const cameliseData = toCamelCase(data.photos);
        setItems([...items, ...cameliseData]);
        setCurrentPage( prevState => prevState + 1);
        setIsNextPage(nextPage);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setFetching(false))
    }        
  }, [fetching]);

  return (
    <AppContext.Provider value = {{
      items,
      setItems,
      fetching,
      setFetching, 
      currentPage,
      setCurrentPage,
      isNextPage,
      setIsNextPage,
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
