/**
 * @name @getItem
 * @description get saved items from localstorage
 * @requires key (name) of the saved item
 * */
 const getItem = key => {
    return localStorage.getItem(key);
  };
  
  /**
   * @name @setItem
   * @description save items in localstorage
   * @requires key (name to be saved) value (data to be saved)
   * */
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  /**
   * @name @removeItem
   * @description remove saved items from localstorage
   * @requires key (name) of the saved item
   * */
  const deleteItem = key => {
    window.localStorage.removeItem(key);
  };
  const clearAll = key => {
    window.localStorage.clear();
  };
  
  
  /** export all */
  const storage = {
    getItem,
    setItem,
    deleteItem,
    clearAll
  };
  export default storage;
  