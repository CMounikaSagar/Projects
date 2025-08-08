export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  console.log(userStr);
  return userStr ? JSON.parse(userStr) : null;
};

export const getToken = () => {
  return localStorage.getItem('access');
};

export const isLoggedIn = () => {
  return !!getToken();
};