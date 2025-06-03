import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  // CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarMenuSub,
  // SidebarMenuSubButton,
  // SidebarMenuSubItem,
} from "@/components/ui/sidebar";
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
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Sidebar Menu</SidebarGroupLabel>
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
                    {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {/* <CollapsibleContent> */}
                {/* <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.id}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub> */}
                {/* </CollapsibleContent> */}
              </SidebarMenuItem>
            </Collapsible>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
