export async function registerApi(payload: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  dateOfBirth: string;
  gender: string;
}) {
  const res = await fetch('https://linked-posts.routemisr.com/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Registration failed');
  }

  return data;
}
