import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store/store';


import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <App/>
            </React.Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' ) as HTMLElement
);

registerServiceWorker();
