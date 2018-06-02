const appReducer = (state = {
    messages: []
}, action) => {

    switch (action.type) {
        case 'ADD_USER':
            const { 
                data: users
            } = action;
            return Object.assign({}, state, { users });
        case 'ADD_MSG':
            const { 
                data: msgObj
            } = action,
            { messages } = state,
            updatedMessages = new Array(...messages);
            updatedMessages.push(msgObj);
            return Object.assign({}, state, { messages: updatedMessages });
        default:
            return state
    }
}
  
export default appReducer;