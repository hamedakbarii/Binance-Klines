import { Button, Drawer } from "@mantine/core";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import ThemeChanger from "./themChanger";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const { theme } = useContext(ThemeContext) || {}; // Access theme from context

  return (
    <nav className="w-full py-2 px-4 bg-gray-300 shadow-lg dark:bg-gray-700 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl">
        <Link to={"/"}>
          <img
            src="./images/logo/logo.png"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
        </Link>
      </div>

      {/* Menu items */}
      <ul className="hidden md:flex gap-4 text-gray-800 dark:text-white text-xl">
        <Link
          to={"/markets"}
          className="transition-all duration-300 hover:opacity-70"
        >
          <li>Markets</li>
        </Link>

        <Link
          to={"trade"}
          className="transition-all duration-300 hover:opacity-70"
        >
          <li>Trade</li>
        </Link>

        <Link
          to={"derivatives"}
          className="transition-all duration-300 hover:opacity-70"
        >
          <li>Derivatives</li>
        </Link>

        <Link
          to={"more"}
          className="transition-all duration-300 hover:opacity-70"
        >
          <li>More</li>
        </Link>
      </ul>

      {/* buttons */}
      <div className="text-white hidden md:flex justify-center items-center gap-4">
        <Link to={"/login"}>
          <Button
            variant="filled"
            className="!bg-white dark:!bg-black !text-gray-800 dark:!text-white"
          >
            login
          </Button>
        </Link>

        <Link to={"/register"}>
          <Button
            variant="filled"
            className="!bg-white dark:!bg-black !text-gray-800 dark:!text-white"
          >
            Register
          </Button>
        </Link>

        <ThemeChanger />
      </div>

      {/* hamburger menu */}
      <div className="md:hidden" onClick={open}>
        <TiThMenu className="text-gray-800 text-2xl dark:text-white" />
      </div>

      <Drawer
        opened={opened}
        position="right"
        size="sm"
        onClose={close}
        title="Binance"
        styles={{
          content: {
            backgroundColor: theme === "dark" ? "#333" : "#fff", // Use theme from context
          },
          header: {
            backgroundColor: theme === "dark" ? "#444" : "#f0f0f0", // Header background color
            color: theme === "dark" ? "#fff" : "#000", // Text color in header
          },
          close: {
            color: theme === "dark" ? "#fff" : "#000", // Close button color based on theme
            "&:hover": {
              backgroundColor: theme === "dark" ? "#555" : "#e0e0e0", // Hover background for close button
            },
          },
        }}
        className="dark:bg-black"
      >
        <div className="!w-full flex flex-col gap-10  p-6 h-screen">
          <img
            src="./images/logo/logo.png"
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <div className="flex justify-between items-center">
            <Link to={"/login"}>
              <Button
                variant="filled"
                className="!bg-gray-300 dark:!bg-gray-200 !text-gray-800 dark:!text-gray-800"
              >
                login
              </Button>
            </Link>

            <Link to={"/register"}>
              <Button
                variant="filled"
                className="!bg-gray-300 dark:!bg-gray-200 !text-gray-800 dark:!text-gray-800"
              >
                Register
              </Button>
            </Link>
            <ThemeChanger />
          </div>

          <div>
            <ul className="flex flex-col gap-8 dark:text-white">
              <Link to={"/markets"}>
                <li>Markets</li>
              </Link>

              <Link to={"trade"}>
                <li>Trade</li>
              </Link>

              <Link to={"derivatives"}>
                <li>Derivatives</li>
              </Link>

              <Link to={"more"}>
                <li>More</li>
              </Link>
            </ul>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
