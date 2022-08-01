const getCurrencyInfo = async () => {
  const BASE_API = 'https://economia.awesomeapi.com.br/json/all';
  const dataBrute = await fetch(BASE_API);
  const data = await dataBrute.json();
  const objectData = Object.keys(data).filter((coin) => coin !== 'USDT');
  // const coins = objectData;
  console.log(objectData);
  return objectData;
};

export default getCurrencyInfo;
