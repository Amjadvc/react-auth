export function loginMock() {
  localStorage.setItem('auth', 'true');
}

export function logoutMock() {
  localStorage.removeItem('auth');
}

export function isAuthenticated() {
  return localStorage.getItem('auth') === 'true';
}
