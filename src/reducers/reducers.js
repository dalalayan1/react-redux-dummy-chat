const appReducer = (state = {
    messages: []
}, action) => {

    switch (action.type) {

        case 'ADD_MSG':
            const { 
                data
            } = action,
            { messages } = state,
            updatedMessages = new Array(...messages);
            updatedMessages.push(data);
            return Object.assign({}, state, { messages: updatedMessages });
        default:
            return state
    }
}
  
export default appReducer;