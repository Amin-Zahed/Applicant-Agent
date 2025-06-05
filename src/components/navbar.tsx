import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link, NavLink } from "react-router-dom";
import { BellDot } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import useLogin from "@/stores/useLogin";
import { Button } from "./ui/button";
import useNotifications from "@/stores/useNotifications";

const Navbar = () => {
  const { isLogin } = useLogin();
  const { numberOfNots } = useNotifications();

  return (
    <Menubar className="flex flex-nowrap justify-between w-full h-full items-center lg:px-10">
      <div className="flex md:w-1/3 lg:w-1/12 2xl:1/12 w-1/3 justify-between items-center">
        <MenubarMenu>
          <Link to={isLogin ? "/dashboard" : "/"}>
            <MenubarTrigger>Logo</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </div>

      {isLogin ? (
        <div className=" flex flex-nowrap justify-between md:w-1/3 lg:w-3/12 2xl:2/12 w-2/3 items-center">
          <MenubarMenu>
            <MenubarTrigger>
              <ModeToggle />
            </MenubarTrigger>
            <NavLink to="/notifications">
              <MenubarTrigger className="relative">
                {" "}
                <BellDot />
                <span className="w-4.5 h-4.5 bg-red-600 rounded-full absolute top-0 right-1 text-balance text-white text-xs flex items-center justify-center border border-background">
                  {numberOfNots}
                </span>
              </MenubarTrigger>
            </NavLink>
            <NavLink to="/dashboard">
              <MenubarTrigger> Dashboard</MenubarTrigger>
            </NavLink>
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
