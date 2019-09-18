import { errorMsg } from './errorMsg'

describe('errorMsg', () => {
  let mockState, mockError;

  beforeEach(() => {
    mockState = [];
    mockError = 'error'
  })

  it('should return the initial state', () => {
    const expected = mockState;
    const result = errorMsg([], {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the name search results array when GET_NAME_RESULTS action is passed', () => {
    const expected = mockError
    const errorAction = {
      type: 'HAS_ERRORED',
      errorMsg: mockError
    }
    const result = errorMsg(undefined, errorAction);

    expect(result).toEqual(expected);
  });
});