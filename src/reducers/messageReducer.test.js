import { messageReducer } from './messageReducer';

describe('messageReducer', () => {
  let mockState, mockMessage, mockIsUser;

  beforeEach(() => {
    mockMessage = [
      {
        isUser: true,
        message: 'I am happy!'
      }
    ]
  })

  it('should return the initial state', () => {
    const result = messageReducer([], {});

    expect(result).toEqual([]);
  });

  it('should return the right version of state from reducer - addMessage', () => {
    mockState = [];
    const mockAction = {
      type: 'ADD_MESSAGE',
      message: mockMessage,
      isUser: mockIsUser
    }
    const result = messageReducer(mockState, mockAction);
    expect(result).toEqual([{isUser: undefined, message: [{isUser: true, message: "I am happy!"}]}])
  });

  it('should return the right version of state from reducer - clearMessage', () => {
    const mockAction = {
      type: 'CLEAR_MESSAGE',
    }
    const result = messageReducer(mockState, mockAction);
    const expected = [];
    expect(result).toEqual(expected)
  });
});