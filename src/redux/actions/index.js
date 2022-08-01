import getCurrencyInfo from '../../serviceAPI';

// USER
export const setUserData = (email) => ({ type: 'SET_USER_DATA', email });

// CURRENCIES
export const getCurrencies = (currencies) => ({ type: 'GET_CURRENCIES', currencies });

export const getError = (err) => ({ type: 'GET_ERROR', err });

export const getCurrenciesData = () => async (dispatch) => {
  try {
    const obj = await getCurrencyInfo();
    dispatch(getCurrencies(obj));
  } catch (err) {
    dispatch(getError(err));
  }
};
