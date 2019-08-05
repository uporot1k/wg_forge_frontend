import getSymbolFromCurrency from 'currency-symbol-map';

export function getTotal(currency, str) {
  return getSymbolFromCurrency(currency) + ' ' + str;
}

export function getConvertedNumber (str) {
  let strLen = str.length;
  let newStr = str.slice(0, 2) + '*'.repeat(strLen - 6) + str.slice(-4);
  return newStr;
}

export function getFullNameWithPrefix (str, firstName, lastName) {
  let prefix = str === 'Male' ? 'Mr.' : 'Ms.';
  const fullName = `${prefix} ${firstName} ${lastName}`;
  
  return fullName;
}