import * as z from 'zod';

/* -------------------------------------------------
 * Step 1
 * ------------------------------------------------- */
const step1Fields = {
  fullname: z.string().min(3, 'Full Name is required'),
  email: z.string().email('Invalid email'),
};

export const step1Schema = z.object(step1Fields);

/* -------------------------------------------------
 * Step 2
 * ------------------------------------------------- */
const minLengthErrorMessage = 'Password must be at least 8 characters';
const maxLengthErrorMessage = 'Password cannot exceed 20 characters';
const uppercaseErrorMessage =
  'Password must contain at least one uppercase letter';
const lowercaseErrorMessage =
  'Password must contain at least one lowercase letter';
const numberErrorMessage = 'Password must contain at least one number';
const specialCharacterErrorMessage =
  'Password must contain at least one special character';
const passwordMismatchErrorMessage = 'Passwords do not match';

const passwordSchema = z
  .string()
  .min(8, { message: minLengthErrorMessage })
  .max(20, { message: maxLengthErrorMessage })
  .refine((password) => /[A-Z]/.test(password), {
    message: uppercaseErrorMessage,
  })
  .refine((password) => /[a-z]/.test(password), {
    message: lowercaseErrorMessage,
  })
  .refine((password) => /[0-9]/.test(password), { message: numberErrorMessage })
  .refine((password) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password), {
    message: specialCharacterErrorMessage,
  });

const step2Fields = {
  password: passwordSchema,
  // rePassword: z.string().min(8, 'Confirm your password'),
  // rePassword: z.string(),
  rePassword: z.string().min(1, 'Please confirm your password'),
};

export const step2Schema = z
  .object(step2Fields)
  .refine((data) => data.password === data.rePassword, {
    message: passwordMismatchErrorMessage,
    path: ['rePassword'],
  });

/* -------------------------------------------------
 * Step 3
 * ------------------------------------------------- */
const fiveYearsAgo = new Date();
fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 12);

const genders = ['male', 'female', 'other'] as const;

const step3Fields = {
  date: z
    .date({
      error: (issue) =>
        issue.input === undefined
          ? 'Date of Birth is required'
          : 'Invalid date',
    })
    .max(fiveYearsAgo, 'You must be at least 12 years old'),

  gender: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Gender is required' : 'Invalid gender',
    })
    .refine((v) => genders.includes(v as (typeof genders)[number]), {
      message: 'Invalid gender',
    }),
};

export const step3Schema = z.object(step3Fields);

/* -------------------------------------------------
 * Register (all steps combined)
 * ------------------------------------------------- */
export const registerSchema = z
  .object({
    ...step1Fields,
    ...step2Fields,
    ...step3Fields,
  })
  .refine((data) => data.password === data.rePassword, {
    message: passwordMismatchErrorMessage,
    path: ['rePassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
