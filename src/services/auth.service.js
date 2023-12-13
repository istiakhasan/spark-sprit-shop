import { jwtDecode } from "jwt-decode";

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined"){
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

  export const setToLocalStorage = (key, token) => {
    if (!key || typeof window === "undefined") {
       return ""
   }
  return localStorage.setItem(key, token)
}


export const getUserInfo = () => {
  const authToken = getFromLocalStorage('token');
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};