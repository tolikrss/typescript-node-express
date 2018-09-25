import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(

	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
