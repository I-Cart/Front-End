import { Link } from "react-router-dom";

function NotFound({ message }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl lg:text-8xl mb-3 font-bold">404</h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        {message || "Page not found"}
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        Go to home
      </Link>
    </div>
  );
}

export default NotFound;
