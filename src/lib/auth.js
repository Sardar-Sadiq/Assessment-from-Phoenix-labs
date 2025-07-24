export function login(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(u => u.username === username && u.password === password);
}

export function saveUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}
