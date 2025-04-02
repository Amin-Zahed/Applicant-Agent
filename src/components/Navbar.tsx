// "use client";

// import * as React from "react";
// import { NavLink } from "react-router-dom";

// import { cn } from "@/lib/utils";
// // import { Icons } from "@/components/icons";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuNavLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a NavLink.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

// export function Navbar() {
//   return (
//     <NavigationMenu className="bg-amber-800">
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>List</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuNavLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     {/* <Icons.logo className="h-6 w-6" /> */}
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components built with Radix UI and
//                       Tailwind CSS.
//                     </p>
//                   </a>
//                 </NavigationMenuNavLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavLink to="/">
//             <NavigationMenuNavLink className={navigationMenuTriggerStyle()}>
//               Dashboard
//             </NavigationMenuNavLink>
//           </NavLink>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuNavLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuNavLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// export default Navbar;

import {
  Menubar,
  //   MenubarContent,
  //   MenubarItem,
  MenubarMenu,
  //   MenubarSeparator,
  //   MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavLink } from "react-router-dom";
import { CircleUserRound, BellDot } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <Menubar className="container flex flex-nowrap justify-between h-14 items-center">
      <div className="flex md:w-1/3 xl:w-1/6 w-1/2 justify-between items-center">
        <MenubarMenu>
          <NavLink to="/">
            <MenubarTrigger>Logo</MenubarTrigger>
          </NavLink>
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
          {/* <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent> */}
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

export default Navbar;
