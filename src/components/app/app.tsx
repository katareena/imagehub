import React from 'react';
import { AppProvider } from '../../hooks/use-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, InfoText } from '../../constants/constants';
import Layout from '../../pages/layout/layout';
import Favourites from '../../pages/favourites/favourites';
import Results from '../../pages/results/results';
import Popular from '../../pages/popular/popular';
import InfoMessage from '../info-message/info-message';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Popular />} />
            <Route path={AppRoute.Favourites} element={<Favourites />} />
            <Route path={AppRoute.Search} element={<Results />} />
            <Route path={AppRoute.NoFoundPage} element={
              <InfoMessage 
                text={InfoText.NotExistPage}
                goToRoot={true}
              />
              } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
