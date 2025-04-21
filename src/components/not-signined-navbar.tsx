import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const NotSigninedNavbar = () => {
  return (
    <Menubar className="flex flex-nowrap justify-between w-full h-full items-center">
      <div className="flex md:w-1/3 xl:w-1/6 w-1/2 justify-between items-center">
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger>Logo</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </div>
      <div className=" flex flex-nowrap justify-between md:w-1/3 xl:w-1/6 w-1/2 items-center">
        <MenubarMenu>
          <MenubarTrigger>
            <ModeToggle />
          </MenubarTrigger>
          <Button
            variant={"secondary"}
            className="border-2 border-primary hover:bg-primary w-1/3"
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
    </Menubar>
  );
};

export default NotSigninedNavbar;
