import { createStore, applyMiddleware } from './Redux';
import reducer from './Reducer.js';
import logger from './middleware/Logger';
import test from './middleware/Test';

const initValues = {
    'First': 0,
    'Second': 1,
    'Third': 2
}

/**
 * reducer: 更新状态的reducer, state
 * initValues: 状态初始值
 */
const store = createStore(reducer, initValues, applyMiddleware(logger,test))

export default store;