import {
  createUser,
  removeUser,
  hasErrored,
  addMessage,
  clearMessage
} from '../actions';

describe('actions', () => {

  it('should return the correct action object for the action type - createUser', () => {
    const mockResult = {id: 1568780400483, firstName: "Emily", lastName: "Lalonde", feeling: "happy"}
    const result = createUser(mockResult)
    const expected = {
      type: 'CREATE_USER',
      user: mockResult
    }
    expect(result).toEqual(expected);
  })

  it('should return the correct action object for the action type - removeUser', () => {
    const mockResult = {id: 1568780400483, firstName: "Emily", lastName: "Lalonde", feeling: "happy"}
    const result = removeUser(mockResult)
    const expected = {
      type: 'REMOVE_USER',
    }
    expect(result).toEqual(expected);
  })

  it('should return the correct action object for the action type - hasErrored', () => {
    const mockResult = 'error'
    const result = hasErrored(mockResult)
    const expected = {
      type: 'HAS_ERRORED',
      errorMsg: 'error'
    }
    expect(result).toEqual(expected);
  })

  it('should return the correct action object for the action type - addMessage', () => {
    const mockResult = 'I feel happy'
    const result = addMessage(mockResult)
    const expected = {
      type: 'ADD_MESSAGE',
      message: mockResult
    }
    expect(result).toEqual(expected);
  })

  it('should return the correct action object for the action type - clearMessage', () => {
    const mockResult = ''
    const result = clearMessage(mockResult)
    const expected = {
      type: 'CLEAR_MESSAGE',
    }
    expect(result).toEqual(expected);
  })
})