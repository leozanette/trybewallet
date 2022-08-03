import getCurrencyInfo from '../../serviceAPI';

// USER
export const setUserData = (email) => ({ type: 'SET_USER_DATA', email });

// CURRENCIES
export const getCurrencies = (currencies) => ({ type: 'GET_CURRENCIES', currencies });

export const getError = (err) => ({ type: 'GET_ERROR', err });

export const getCurrenciesData = () => async (dispatch) => {
  try {
    const obj = await getCurrencyInfo();
    const objectData = Object.keys(obj).filter((coin) => coin !== 'USDT');
    dispatch(getCurrencies(objectData));
  } catch (err) {
    dispatch(getError(err));
  }
};

// EXPENSES
export const getExpenses = (expenses) => ({ type: 'GET_EXPENSES', expenses });

// DELETE BUTTON
export const deleteButton = (expense) => ({ type: 'DELETE_EXPENSE', expense });
