const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function loginApi(payload: { email: string; password: string }) {
  const res = await fetch(`${API_BASE_URL}/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Registration failed');
  }

  return data;
}
