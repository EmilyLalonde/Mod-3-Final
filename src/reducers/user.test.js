import { user } from './user';

describe('user', () => {
  let mockState, mockUser;

  beforeEach(() => {
    mockUser = [{id: 1568780400483, firstName: "Emily", lastName: "Lalonde", feeling: "happy"}]
  })

  it('should return the initial state', () => {
    const result = user(null, {});

    expect(result).toEqual(null);
  });

  it('should return the right version of state from reducer - createUser', () => {
    mockState = [];
    const mockAction = {
      type: 'CREATE_USER',
      user: mockUser
    }
    const result = user(mockState, mockAction);
    expect(result).toEqual(mockUser)
  });

  it('should return the right version of state from reducer - removeUser', () => {
    const mockAction = {
      type: 'REMOVE_USER',
      user: mockUser
    }
    const result = user(mockState, mockAction);
    const expected = null;
    expect(result).toEqual(expected)
  });
});