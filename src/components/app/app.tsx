import React from 'react';
import { AppProvider } from '../../hooks/use-context';
import MainPage from '../../pages/main-page/main-page';

function App() {
	return (
		<AppProvider>
			<MainPage />
		</AppProvider>    
	);
}

export default App;
