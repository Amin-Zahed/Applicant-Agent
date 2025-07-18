import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    id: number;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      id: number;
    }[];
  }[];
}) {
  const isMobile = useIsMobile();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {isMobile ? "Hamburger Menu" : "Shortcut --> ctrl + b"}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Link to={item.url} className="cursor-pointer">
            <Collapsible
              key={item.id}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
