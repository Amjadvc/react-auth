import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Big 404 */}
      <h1 className="text-[8rem] font-extrabold text-gray-300 sm:text-[5rem]">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl font-semibold text-gray-700 sm:text-2xl">
        Oops! Page not found
      </p>
      <p className="mt-2 max-w-md text-gray-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
      >
        Go Back Home
      </button>

      {/* Optional illustration */}
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Page not found illustration"
        className="mx-auto mt-10 w-full max-w-md"
      />
    </div>
  );
}

export default PageNotFound;
