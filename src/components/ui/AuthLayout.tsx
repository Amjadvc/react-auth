import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex w-full items-center justify-center sm:w-[55%]">
      <Outlet />
    </div>
  );
}
