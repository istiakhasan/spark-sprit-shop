export const getFromLocalStorage = (key) => {
    if (!key) {
       return ""
   }
  return localStorage.getItem(key)
}
export const isLoggedIn = () => {
    const authToken = getFromLocalStorage("token");
    return !!authToken;
  };

  export const removeUserInfo = (key) => {
    return localStorage.removeItem(key);
  };