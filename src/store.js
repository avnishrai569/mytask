// store.js
import { createStore } from 'redux';
import reducer from './redux/reducer';
// import reducer from './reducer';

const store = createStore(reducer);

export default store;
