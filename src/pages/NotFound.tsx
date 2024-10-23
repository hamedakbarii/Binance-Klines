import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="./images/logo/logo.png" alt="logo" className="rounded-full" />
        <h1 className="text-xl font-semibold">Sorry!</h1>
        <p>404! This page is not available</p>
        <Link to={"/"} className="text-sm underline">
          Let's get back to Home
        </Link>
      </div>
    </div>
  );
}
