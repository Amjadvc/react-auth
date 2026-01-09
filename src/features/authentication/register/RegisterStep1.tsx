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
import type { RegisterFormValues } from '@/schemas/register.schema';
import { Controller, type UseFormReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';

function RegisterStep1() {
  const navigate = useNavigate();
  const { form } = useOutletContext<{
    form: UseFormReturn<RegisterFormValues>;
  }>();

  const handleNext = async () => {
    const valid = await form.trigger(['fullname', 'email']);
    if (valid) {
      navigate('/register/step-2');
    }
  };

  return (
    <>
      <FieldSet>
        <FieldGroup className="gap-6">
          {/*  ===========================Full Name=========================== */}

          <Controller
            name="fullname"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="fullname"
                  className={cn(
                    'text-base font-medium',
                    fieldState.invalid ? 'text-red-500' : 'text-PrimaryText',
                  )}
                >
                  Full Name
                </FieldLabel>
                <Input
                  {...field}
                  id="fullname"
                  aria-invalid={fieldState.invalid}
                  className="h-11 border border-InputStrok bg-InputFill placeholder-InputPlaceholder placeholder:text-base placeholder:font-normal placeholder:tracking-wide"
                  placeholder="John Doe"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/*  ===========================Email=========================== */}

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

export default RegisterStep1;
