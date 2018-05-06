
const createStore = (reducer, initValues) => {
    let state = { ...initValues };

    const dispatch = (action) => {
        // 计算出新的state
        state = reducer(state, action);
        // state更新后的订阅的事件
        listener.forEach((fn) => {
            fn()
        });
    }

    /**
     * 实现一个简单的订阅者莫斯
     */
    const listener = [];
    const subscribe = (hanlder) => { listener.push(hanlder) }
    const unsubscribe = (hanlder) => {
        listener.forEach((fn, i) => {
            if (fn === hanlder) {
                listener.slice(i, 1);
            }
        })
    }

    const getState = () => {
        return state;
    }

    return {
        dispatch: dispatch,
        getState: getState,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    }
}

export { createStore };