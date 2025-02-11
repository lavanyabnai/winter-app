"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SettingsIcon, UsersIcon } from "lucide-react";
import { GoCheckCircle, GoCheckCircleFill, GoGraph, GoHome, GoHomeFill, GoGoal, GoServer } from "react-icons/go";
import { MdOutlineWarehouse } from "react-icons/md";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
      {
      label: "Analytics",
      href: "/analytics",
      icon: GoGraph,
      activeIcon: GoGraph,
  },
  {
    label: "Warehouse",
    href: "/warehouse",
    icon: MdOutlineWarehouse,
    activeIcon: MdOutlineWarehouse,
  },
  {
    label: "Control",
    href: "/control",
    icon: GoGoal,
    activeIcon: GoGoal,
  },
  {
    label: "Network Simulation",
    href: "/netsim",
    icon: GoGraph,
    activeIcon: GoGraph,
  },
    {
    label: "Incidents",
    href: "/incidents",
    icon: GoServer,
    activeIcon: GoServer,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },

];

export const Navigation = () => {
  const workspaceId = useWorkspaceId();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const fullHref = `/workspaces/${workspaceId}${item.href}`
        const isActive = pathname === fullHref;
        const Icon = isActive ? item.activeIcon : item.icon;
        
        return (
          <Link key={item.href} href={fullHref}>
            <div className={cn(
              "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
              isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
            )}>
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        )
      })}
    </ul>
  );
};
