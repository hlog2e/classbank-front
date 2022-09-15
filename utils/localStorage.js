function setObjectItem(_key, _value) {
  const beforeObjectValue = _value;
  const stringifyObjectValue = JSON.stringify(beforeObjectValue);

  window.localStorage.setItem(_key, stringifyObjectValue);
}

function getObjectItem(_key) {
  const beforeObjectValue = window.localStorage.getItem(_key);
  return (parsedLocalStorageValue = JSON.parse(beforeObjectValue));
}

function deleteItem(_key) {
  window.localStorage.removeItem(_key);
}
export { setObjectItem, getObjectItem, deleteItem };
