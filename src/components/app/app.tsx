import React from 'react';
import { AppProvider } from '../../hooks/use-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import Favourites from '../favourites/favourites';
import { AppRoute } from '../../constants/constants';
import Catalog from '../catalog/catalog';
import Lost from '../lost/lost';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Root} element={<MainPage />} > 
						<Route index element={<Catalog />} />
						<Route path={AppRoute.Favourites} element={<Favourites />} />
						<Route path={AppRoute.NoFoundPage} element={<Lost />} />
					</Route>				
				</Routes>
			</BrowserRouter>
		</AppProvider>    
	);
}

export default App;
