import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './containers/home/Home';
import Info from './containers/info/Info';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<div>
				<App/>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/info" component={Info}/>
				</div>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
