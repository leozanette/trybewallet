const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  err: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'GET_ERROR':
    return {
      ...state,
      err: action.err,
    };
  default:
    return state;
  }
}

export default wallet;
