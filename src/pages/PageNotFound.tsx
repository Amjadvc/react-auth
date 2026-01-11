import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[8rem] font-extrabold text-gray-300 sm:text-[5rem]">
        404
      </h1>

      <p className="mt-4 text-xl font-semibold text-gray-700 sm:text-2xl">
        Oops! Page not found
      </p>
      <p className="mt-2 max-w-md text-gray-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Button
        onClick={() => navigate('/')}
        className="mt-8 h-12 rounded-full bg-ButtonBg px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-ButtonHover"
      >
        Go Back Home
      </Button>

      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Page not found illustration"
        className="mx-auto mt-10 w-full max-w-md"
      />
    </div>
  );
}

export default PageNotFound;
