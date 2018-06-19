import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#212121', contrastText: '#ffffff' },
		secondary: {main: '#e53635', contrastText: '#000000' },
	},
});

function Main() {
		return (
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
				);
	
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
