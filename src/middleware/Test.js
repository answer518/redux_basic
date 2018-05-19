const Test = (store) => {
    return function wrapDispatchToTest(next) {
        return function dispatchAndTest(action) {
            console.log('test dispatching', action)
            let result = next(action)
            console.log('test next state', store.getState())
            return result
        }
    }
}
export default Test;