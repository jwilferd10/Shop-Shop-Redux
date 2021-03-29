// Call createStore from redux & reducer from utils
import { createStore } from 'redux';
import reducer from '../utils/reducers'

// const store the createStore tied to reducer
const store = createStore(reducer);

// Export the store
export default store;