import React, { lazy } from 'react';
import { AppProvider } from '../../hooks/use-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, InfoText } from '../../constants/constants';
const Layout = lazy(() => import('../../pages/layout/layout'));
const Popular = lazy(() => import('../../pages/popular/popular'));
const InfoMessage = lazy(() => import('../info-message/info-message'));
const Favourites = lazy(() => import('../../pages/favourites/favourites'));
const Results = lazy(() => import('../../pages/results/results'));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Popular />} />
            <Route path={AppRoute.Favourites} element={<Favourites />} />
            <Route path={AppRoute.Search} element={<Results />} />
            <Route
              path={AppRoute.NoFoundPage}
              element={
                <InfoMessage text={InfoText.NotExistPage} goToRoot={true} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
