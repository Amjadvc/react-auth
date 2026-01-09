import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../../../components/ui/field';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { cn } from '@/lib/utils';

import { startTransition, useActionState } from 'react';
import { loginAction } from '@/features/authentication/login/login.actions';
import type { LoginState } from '@/features/authentication/login/login.actions';

const loginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type FormValues = z.infer<typeof loginFormSchema>;

function LoginForm() {
  const [state, action, isPending] = useActionState<LoginState, FormData>(
    loginAction,
    { status: 'idle' },
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    // action(formData);
    startTransition(() => {
      action(formData);
    });
  }
  return (
    <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup className="gap-6">
          {/* ------------Email------------ */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="email"
                  className={cn(
                    'text-base font-medium',
                    fieldState.invalid ? 'text-red-500' : 'text-PrimaryText',
                  )}
                >
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  className="h-11 border border-InputStrok bg-InputFill placeholder-InputPlaceholder placeholder:text-base placeholder:font-normal placeholder:tracking-wide"
                  type="email"
                  placeholder="Example@email.com"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* ------------Password------------ */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="password"
                  className={cn(
                    'text-base font-medium',
                    fieldState.invalid ? 'text-red-500' : 'text-PrimaryText',
                  )}
                >
                  Password
                </FieldLabel>

                <Input
                  {...field}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  className="h-11 border border-InputStrok bg-InputFill placeholder-InputPlaceholder placeholder:text-base placeholder:font-normal placeholder:tracking-wide"
                  type="password"
                  placeholder="At least 8 characters"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>
      <Field orientation="vertical" className="mt-8">
        <Button
          type="submit"
          className="h-12 bg-ButtonBg text-xl font-normal text-white hover:bg-ButtonHover"
        >
          {isPending ? 'Signing in...' : 'Sign in'}
        </Button>
      </Field>

      {state.status === 'error' && (
        <p className="mt-4 text-sm text-red-500">{state.message}</p>
      )}

      {/* 🟢 رسالة النجاح */}
      {state.status === 'success' && (
        <p className="mt-4 text-sm text-green-500">Login successful 🎉</p>
      )}
    </form>
  );
}

export default LoginForm;
