import type { RegisterFormValues } from './register.schema';

const STORAGE_KEY = 'register-form';

export function saveRegister(values: Partial<RegisterFormValues>) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

export function loadRegister(): Partial<RegisterFormValues> | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  const data = JSON.parse(raw);

  if (data.date) {
    data.date = new Date(data.date);
  }

  return data;
}

export function clearRegister() {
  sessionStorage.removeItem(STORAGE_KEY);
}
