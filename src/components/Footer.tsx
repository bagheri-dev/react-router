import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full p-4 bg-[#001F3F] border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <div className="container mx-auto flex justify-between items-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Maktabsharif
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" className="hover:underline me-4 md:me-6">
                Posts
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
