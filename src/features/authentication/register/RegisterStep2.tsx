import { useNavigate, useOutletContext } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../../../components/ui/field';
import { Input } from '../../../components/ui/input';
import { Controller, type UseFormReturn } from 'react-hook-form';
import { type RegisterFormValues } from '@/features/authentication/register/register.schema';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

function RegisterStep2() {
  const navigate = useNavigate();

  const { form } = useOutletContext<{
    form: UseFormReturn<RegisterFormValues>;
  }>();

  const handleNext = async () => {
    const valid = await form.trigger(['password', 'rePassword']);

    const password = form.getValues('password');
    const rePassword = form.getValues('rePassword');

    if (password !== rePassword) {
      form.setError('rePassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }

    if (valid) {
      navigate('/register/step-3');
    }
  };

  // useEffect for real-time password validation
  useEffect(() => {
    const subscription = form.watch((_value, { name }) => {
      if (name === 'password' || name === 'rePassword') {
        const password = form.getValues('password');
        const rePassword = form.getValues('rePassword');

        const hasManualError =
          form.formState.errors.rePassword?.type === 'manual';

        if (rePassword && password !== rePassword) {
          form.setError('rePassword', {
            type: 'manual',
            message: 'Passwords do not match',
          });
        } else if (hasManualError) {
          form.clearErrors('rePassword');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <>
      <FieldSet>
        <FieldGroup className="gap-6">
          {/*  ===========================password=========================== */}

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
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  aria-invalid={fieldState.invalid}
                  className="h-11 border border-InputStrok bg-InputFill placeholder-InputPlaceholder placeholder:text-base placeholder:font-normal placeholder:tracking-wide"
                  onChange={(e) => {
                    field.onChange(e);
                    if (form.getValues('rePassword')) {
                      form.trigger('rePassword');
                    }
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/*  ===========================rePassword=========================== */}
          <Controller
            name="rePassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="rePassword"
                  className={cn(
                    'text-base font-medium',
                    fieldState.invalid ? 'text-red-500' : 'text-PrimaryText',
                  )}
                >
                  Confirm Password
                </FieldLabel>
                <Input
                  {...field}
                  id="rePassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  aria-invalid={fieldState.invalid}
                  className="h-11 border border-InputStrok bg-InputFill placeholder-InputPlaceholder placeholder:text-base placeholder:font-normal placeholder:tracking-wide"
                  onChange={(e) => {
                    field.onChange(e);
                    // Validate against current password value
                    const password = form.getValues('password');
                    if (password && e.target.value !== password) {
                      form.setError('rePassword', {
                        type: 'manual',
                        message: 'Passwords do not match',
                      });
                    } else {
                      form.clearErrors('rePassword');
                    }
                  }}
                />
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>

      <div className="mt-6 flex justify-end">
        <Button
          className="h-12 w-full bg-ButtonBg text-xl font-normal text-white hover:bg-ButtonHover"
          type="button"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default RegisterStep2;
