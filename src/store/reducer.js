const defaultState = {
    countNum: 0
}
export default (state = defaultState, action) => {
    if (action.type == "add") {
        return { countNum: action.value }
    }
    return state;
}