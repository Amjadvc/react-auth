// useRegisterSession.ts
import { useEffect } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { RegisterFormValues } from '../register.schema';
import { loadRegister, saveRegister } from '../register.storage';

export function useRegisterSession(form: UseFormReturn<RegisterFormValues>) {
  /* Restore */
  useEffect(() => {
    const saved = loadRegister();

    if (saved) {
      form.reset({
        ...saved,
        password: '',
        rePassword: '',
      });
    }
  }, [form]);

  /* Persist */
  useEffect(() => {
    const subscription = form.watch((values) => {
      const { password, rePassword, ...safeValues } = values;
      saveRegister(safeValues);
    });

    return () => subscription.unsubscribe();
  }, [form]);
}
