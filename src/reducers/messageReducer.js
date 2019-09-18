export const messageReducer = (state='', action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return action.message
      case 'CLEAR_MESSAGE':
        return state
      default:
        return state;
  }
}