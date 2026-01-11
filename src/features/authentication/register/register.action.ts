import { loginMock } from '@/services/auth';
import { registerApi } from '@/services/registerApi';

export type RegisterState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; message: string };

export async function registerAction(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  try {
    const data = await registerApi({
      name: formData.get('fullname') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      rePassword: formData.get('rePassword') as string,
      dateOfBirth: formData.get('date') as string, // make sure your Step3 DOB value is a string like "7-10-1994"
      gender: formData.get('gender') as string,
    });

    loginMock();

    return { status: 'success', data };
  } catch (error: any) {
    return { status: 'error', message: error.message };
  }
}
