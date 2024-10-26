import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white dark:bg-black">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="./images/logo/logo.png" alt="logo" className="rounded-full" />
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Sorry!
        </h1>
        <p className="text-black dark:text-white">
          404! This page is not available
        </p>
        <Link to={"/"} className="text-sm underline text-black dark:text-white">
          Let's get back to Home
        </Link>
      </div>
    </div>
  );
}
