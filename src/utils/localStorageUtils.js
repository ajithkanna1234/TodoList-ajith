export const saveTodos = (username, todos) => {
  localStorage.setItem(`todos-${username}`, JSON.stringify(todos));
};

export const getTodos = (username) => {
  return JSON.parse(localStorage.getItem(`todos-${username}`)) || [];
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const clearUser = () => {
  localStorage.removeItem("user");
};
