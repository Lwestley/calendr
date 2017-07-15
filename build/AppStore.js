/**
 * The AppStore is the foundation to Redux. Here we can define what the default application state looks like. Here I am creating default data and assigning it to the createStore() method. We also hook up redux debugging with our extension, redux-devtools-extension. As you can see, we pass in all of the reducers to this single store, so before data can be held inside our store, it must go through all the reducers. 
 */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

let month = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': [],

};
// This should be an outline of every possible state your app can be in.
const defaultState = {
    month
};

const store = createStore(rootReducer, defaultState, composeWithDevTools());

export default store;
