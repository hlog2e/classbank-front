async function setObjectItem(_key, _value) {
  const beforeObjectValue = _value;
  const stringifyObjectValue = JSON.stringify(beforeObjectValue);

  await window.localStorage.setItem(_key, stringifyObjectValue);
}

async function getObjectItem(_key) {
  const beforeObjectValue = await window.localStorage.getItem(_key);
  return JSON.parse(beforeObjectValue);
}

async function deleteItem(_key) {
  await window.localStorage.removeItem(_key);
}
export { setObjectItem, getObjectItem, deleteItem };
