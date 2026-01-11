import { Outlet } from 'react-router-dom';
import HeroImage from './HeroImage';

function AuthLayout() {
  return (
    <main
      className="container mx-auto flex flex-col-reverse items-center justify-between gap-[1.5rem] p-4 sm:flex-row sm:gap-8 sm:p-8"
      style={{
        background: `linear-gradient(rgb(247, 251, 255), rgb(255 232 225))`,
      }}
    >
      <Outlet />
      <HeroImage />
    </main>
  );
}

export default AuthLayout;
