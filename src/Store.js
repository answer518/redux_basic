import {createStore} from './Redux';
import reducer from './Reducer.js';

const initValues = {
    'First' : 0,
    'Second' : 1,
    'Third' : 2
}

/**
 * reducer: 更新状态的reducer, state
 * initValues: 状态初始值
 */
const store = createStore(reducer, initValues)

export default store;