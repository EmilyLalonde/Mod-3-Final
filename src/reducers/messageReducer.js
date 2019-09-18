export const messageReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, {message: action.message, isUser: action.isUser}];
      case 'CLEAR_MESSAGE':
        return []
      default:
        return state;
  }
}