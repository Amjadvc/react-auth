import {
  registerSchema,
  type RegisterFormValues,
} from '@/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      rePassword: '',
      date: undefined,
      gender: undefined,
    },
  });

  return (
    <form className="w-full">
      <Outlet context={{ form }} />
    </form>
  );
}

export default RegisterForm;
