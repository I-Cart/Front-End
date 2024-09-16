import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl md:text-4xl lg:text-6xl mb-3 font-bold">
        An unexpected error occurred
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        {error.statusText || error.message}
      </p>
      <Link
        to="/"
        className="text-lg text-blue-500 hover:text-blue-600 transition-all duration-300 md:text-xl lg:text-2xl"
      >
        Go to home page
      </Link>
    </div>
  );
}

export default Error;
