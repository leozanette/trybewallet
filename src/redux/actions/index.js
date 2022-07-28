export function setUserData(email) {
  return {
    type: 'SET_USER_DATA',
    email,
  };
}

export function setWalletData(walletData) {
  return {
    type: 'SET_WALLET_DATA',
    walletData,
  };
}
