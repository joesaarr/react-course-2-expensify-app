import authReducer from '../../reducers/auth';

test('should set user id for login', () => {
  const uid = 'aasdfj324kjajkiuhfa';
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});

test('should remove user id for logout', () => {
  const state = authReducer({ uid: 'sad34gfew435jdsf' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});