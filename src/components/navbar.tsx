import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link, NavLink } from "react-router-dom";
import { CircleUserRound, BellDot } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import useLogin from "@/stores/useLogin";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isLogin } = useLogin();

  return (
    <Menubar className="flex flex-nowrap justify-between w-full h-full items-center">
      {isLogin ? (
        <div className="flex md:w-1/3 xl:w-1/6 w-1/2 justify-between items-center">
          <MenubarMenu>
            <Link to="/">
              <MenubarTrigger>Logo</MenubarTrigger>
            </Link>
            <NavLink to="/notifications">
              <MenubarTrigger>
                {" "}
                <BellDot />
              </MenubarTrigger>
            </NavLink>
            <NavLink to="/profile">
              <MenubarTrigger>
                {" "}
                <CircleUserRound />
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
        </div>
      ) : (
        <div className="flex md:w-1/3 xl:w-1/6 w-1/2 justify-between items-center">
          <MenubarMenu>
            <Link to="/">
              <MenubarTrigger>Logo</MenubarTrigger>
            </Link>
          </MenubarMenu>
        </div>
      )}
      {isLogin ? (
        <div className=" flex flex-nowrap justify-between md:w-1/3 xl:w-1/6 w-1/2 items-center">
          <MenubarMenu>
            <MenubarTrigger>
              <ModeToggle />
            </MenubarTrigger>
            <NavLink to="/add">
              <MenubarTrigger>Add</MenubarTrigger>
            </NavLink>
          </MenubarMenu>
        </div>
      ) : (
        <div className=" flex flex-nowrap justify-between md:w-1/3 xl:w-1/6 w-1/2 items-center">
          <MenubarMenu>
            <MenubarTrigger>
              <ModeToggle />
            </MenubarTrigger>
            <Button
              variant={"secondary"}
              className="border-2 border-primary hover:bg-primary hover:text-white w-1/3"
            >
              <Link to="/signin">
                <MenubarTrigger>Sign in</MenubarTrigger>
              </Link>
            </Button>
            <Button className="w-1/3">
              <Link to="/signup">
                <MenubarTrigger>Sign up</MenubarTrigger>
              </Link>
            </Button>
          </MenubarMenu>
        </div>
      )}
    </Menubar>
  );
};

export default Navbar;
