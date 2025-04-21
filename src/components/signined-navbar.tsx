import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link, NavLink } from "react-router-dom";
import { CircleUserRound, BellDot } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const SigninedNavbar = () => {
  return (
    <Menubar className="flex flex-nowrap justify-between w-full h-full items-center">
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
      <div className=" flex flex-nowrap justify-between md:w-1/3 xl:w-1/6 w-1/2 items-center">
        <MenubarMenu>
          <MenubarTrigger>
            <ModeToggle />
          </MenubarTrigger>
          <NavLink to="/add">
            <MenubarTrigger>Add</MenubarTrigger>
          </NavLink>
          <NavLink to="/list">
            <MenubarTrigger>List</MenubarTrigger>
          </NavLink>
          <NavLink to="/log">
            <MenubarTrigger>Log</MenubarTrigger>
          </NavLink>
        </MenubarMenu>
      </div>
    </Menubar>
  );
};

export default SigninedNavbar;
