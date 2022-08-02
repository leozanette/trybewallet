const getCurrencyInfo = async () => {
  const BASE_API = 'https://economia.awesomeapi.com.br/json/all';
  const dataBrute = await fetch(BASE_API);
  const data = await dataBrute.json();
  console.log(data);
  return data;
};

export default getCurrencyInfo;
