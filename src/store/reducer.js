export default (state = { num: 0 }, action) => {
    if (action.type == "add") {
        return { num: action.value }
    }
    return state;
}