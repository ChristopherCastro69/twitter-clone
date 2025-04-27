import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Go back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
