import { Link } from 'react-router';

export const PageNotFound = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <h1 className=" mt-3 font-extrabold text-white text-6xl text-center z-0">
        Page not found <br className="sm:hidden" /> ❌
      </h1>
      <p className="text-white text-center text-xl my-2">You seem lost, go back to the main page</p>
      <Link
        to={'/'}
        className="bg-indigo-900 hover:bg-indigo-700 text-white p-3 text-sm text-center rounded-full"
      >
        Back to the home page
      </Link>
    </div>
  );
};
