import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/root.reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = () => {
    const composeEnhancers = composeWithDevTools( {} );
    return createStore(
        rootReducer,
        composeEnhancers( applyMiddleware( thunk ) )
    );
};

const store = configureStore();

// export store singleton instance
export default store;