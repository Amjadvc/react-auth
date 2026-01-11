import { startTransition, useActionState, useEffect, useState } from 'react';
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
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Label } from '../../../components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover';
import { Calendar } from '../../../components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { Controller, type UseFormReturn } from 'react-hook-form';
import type { RegisterFormValues } from '@/features/authentication/register/register.schema';
import { cn } from '@/lib/utils';
import {
  registerAction,
  type RegisterState,
} from '@/features/authentication/register/register.action';
import { Spinner } from '@/components/ui/spinner';
import { clearRegister } from './register.storage';

function formatDate(date: Date | undefined) {
  if (!date) return '';
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function isValidDate(date: Date | undefined) {
  return date instanceof Date && !isNaN(date.getTime());
}

function RegisterStep3() {
  const navigate = useNavigate();
  const { form } = useOutletContext<{
    form: UseFormReturn<RegisterFormValues>;
  }>();

  const [state, action, isPending] = useActionState<RegisterState, FormData>(
    registerAction,
    { status: 'idle' },
  );

  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(new Date());

  const handleSubmit = async () => {
    const isValid = await form.trigger(); // validate all fields
    if (!isValid) return;

    const formData = new FormData();
    Object.entries(form.getValues()).forEach(([key, value]) => {
      if (key === 'date' && value instanceof Date) {
        // convert Date object to "DD-MM-YYYY" format for API
        const d = value.getDate();
        const m = value.getMonth() + 1;
        const y = value.getFullYear();
        formData.append(key, `${d}-${m}-${y}`);
      } else {
        formData.append(key, value as string);
      }
    });

    startTransition(() => action(formData));
  };

  useEffect(() => {
    if (state.status === 'success') {
      clearRegister();
      navigate('/home');
    }
  }, [state.status, navigate]);

  return (
    <>
      <FieldSet disabled={isPending}>
        <FieldGroup className="gap-6">
          {/* ====================== Date of Birth ====================== */}
          <Controller
            name="date"
            control={form.control}
            render={({ field, fieldState }) => {
              const date = field.value ? new Date(field.value) : undefined;

              return (
                <div
                  className="flex flex-col gap-3"
                  data-invalid={fieldState.invalid}
                >
                  <Label
                    htmlFor="dob"
                    className={cn(
                      'px-1 text-base font-medium',
                      fieldState.invalid ? 'text-red-500' : 'text-PrimaryText',
                    )}
                  >
                    Date of Birth
                  </Label>
                  <div className="relative flex gap-2">
                    <Input
                      id="dob"
                      placeholder="June 01, 2025"
                      value={field.value ? formatDate(date) : ''}
                      aria-invalid={fieldState.invalid}
                      className={cn(
                        'h-11 border bg-InputFill pr-10 placeholder:text-base placeholder:font-normal placeholder:tracking-wide',
                        fieldState.invalid
                          ? 'border-red-500'
                          : 'border-InputStrok',
                      )}
                      onChange={(e) => {
                        const d = new Date(e.target.value);
                        if (isValidDate(d)) field.onChange(d);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          setOpen(true);
                        }
                      }}
                      readOnly
                    />
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          id="date-picker"
                          variant="ghost"
                          className="absolute right-2 top-1/2 size-6 -translate-y-1/2"
                        >
                          <CalendarIcon className="size-3.5" />
                          <span className="sr-only">Select date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          month={month}
                          onMonthChange={setMonth}
                          onSelect={(d) => {
                            field.onChange(d);
                            setMonth(d);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              );
            }}
          />

          {/* ====================== Gender ====================== */}
          <Controller
            name="gender"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className={cn(
                    'mb-2 text-base font-medium',
                    fieldState.invalid ? 'text-red-500' : 'text-PrimaryText',
                  )}
                >
                  Gender
                </FieldLabel>
                <RadioGroup
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-row gap-6"
                  aria-invalid={fieldState.invalid}
                >
                  {['male', 'female', 'other'].map((g) => (
                    <div key={g} className="flex items-center gap-3">
                      <RadioGroupItem
                        value={g}
                        id={g}
                        aria-invalid={fieldState.invalid}
                      />
                      <Label htmlFor={g}>
                        {g[0].toUpperCase() + g.slice(1)}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
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
          disabled={isPending}
          onClick={handleSubmit}
        >
          {isPending ? <Spinner className="!size-6" /> : 'Sign up'}
        </Button>
      </div>
      {state.status === 'error' && (
        <p className="mt-4 text-sm text-red-500">{state.message}</p>
      )}
      {state.status === 'success' && (
        <p className="mt-4 text-sm text-green-500">
          Registration successful 🎉
        </p>
      )}
    </>
  );
}

export default RegisterStep3;
