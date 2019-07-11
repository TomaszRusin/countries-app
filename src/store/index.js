
import { createStore } from 'redux';
import reducers from '../reducers/index';
import { getCountries } from '../actions/actions-countries';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store