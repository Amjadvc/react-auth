import { loginMock } from '@/services/auth';
import { loginApi } from '@/services/loginApi';

export type LoginState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; message: string };

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const data = await loginApi({ email, password });

    loginMock();
    return { status: 'success', data };
  } catch (error: any) {
    return {
      status: 'error',
      message: error.message,
    };
  }
}
