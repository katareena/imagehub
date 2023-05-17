import React from 'react';
import { AppProvider } from '../../hooks/use-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '../../pages/layout-page/layout-page';
import Favourites from '../favourites/favourites';
import Results from '../results/results';
import { AppRoute } from '../../constants/constants';
import Lost from '../lost/lost';
import Popular from '../popular/popular';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Root} element={<LayoutPage />} >
						<Route index element={<Popular />} />
						<Route path={AppRoute.Favourites} element={<Favourites />} />
						<Route path={AppRoute.Search} element={<Results />} />
						<Route path={AppRoute.NoFoundPage} element={<Lost />} />
					</Route>				
				</Routes>
			</BrowserRouter>
		</AppProvider>    
	);
}

export default App;
