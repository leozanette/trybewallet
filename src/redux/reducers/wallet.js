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
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, ...action.expenses],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((a) => a !== action.expense),
    };
  default:
    return state;
  }
}

export default wallet;
