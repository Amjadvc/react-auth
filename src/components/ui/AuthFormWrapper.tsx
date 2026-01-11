import { type ReactNode } from 'react';
export default function AuthFormWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-full items-center justify-center sm:w-[55%]">
      <div className="flex w-full max-w-[400px] flex-col items-start gap-8 sm:gap-12">
        {children}
      </div>
    </section>
  );
}
