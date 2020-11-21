import { createStore } from 'redux';

import todoAppReducer from './todoAppStore';

const store = createStore(todoAppReducer);

export default store;