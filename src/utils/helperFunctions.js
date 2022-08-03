const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  const storedData = JSON.parse(localStorage.getItem(key));
  return storedData || null;
};

export { saveToLocalStorage, getFromLocalStorage };
