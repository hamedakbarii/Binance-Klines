import { Button, Switch, useMantineTheme, rem, Drawer } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

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
    <nav className="w-full p-4 bg-black h-32 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl">
        <Link to={"/"}>
          <img
            src="./images/logo/logo.png"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
        </Link>
        {/* <span>Binance kliens</span> */}
      </div>

      {/* Menu items */}
      <div>
        <ul className="hidden md:flex gap-4 text-white text-xl">
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

      {/* buttons */}
      <div className="text-white hidden md:flex justify-center items-center gap-4">
        <Link to={"/login"}>
          <Button variant="filled">login</Button>
        </Link>

        <Link to={"/register"}>
          <Button variant="filled">Register</Button>
        </Link>

        <Switch
          size="md"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
        />
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
