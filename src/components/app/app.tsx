import React from 'react';
import { AppProvider } from '../../hooks/use-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../favorites/favorites';
import { AppRoute } from '../../constants/constants';
import Catalog from '../catalog/catalog';
import LostPage from '../../pages/lost-page/lost-page';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Root} element={<MainPage />} > 
						<Route index element={<Catalog />} />
						<Route path={AppRoute.MyFavorite} element={<Favorites />} />
						<Route path={AppRoute.NoFoundPage} element={<LostPage />} />
					</Route>				
				</Routes>
			</BrowserRouter>
		</AppProvider>    
	);
}

export default App;
