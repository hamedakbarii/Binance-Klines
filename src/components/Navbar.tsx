import { Button, Switch, useMantineTheme, rem, Drawer } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import ThemeChanger from "./themChanger";

export default function Navbar() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

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
      <div>
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
      </div>

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

        {/* <Switch
          size="md"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
        /> */}

        <ThemeChanger />
      </div>

      {/* hamburger menu */}
      <div className="md:hidden" onClick={open}>
        <TiThMenu className="text-white text-2xl" />
      </div>

      <Drawer opened={opened} onClose={close} title="Binance">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <Button variant="filled">login</Button>
            <Button variant="filled">Register</Button>
            <Switch
              size="md"
              color="dark.4"
              onLabel={sunIcon}
              offLabel={moonIcon}
            />
          </div>

          <div>
            <ul className="flex flex-col gap-8">
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
