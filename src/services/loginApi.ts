export async function loginApi(payload: { email: string; password: string }) {
  const res = await fetch('https://linked-posts.routemisr.com/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
}
