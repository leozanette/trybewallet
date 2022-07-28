const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  const { email } = action;

  switch (action.type) {
  case 'SET_USER_DATA':
    return {
      ...state,
      ...email,
    };
  default:
    return state;
  }
}

export default user;
