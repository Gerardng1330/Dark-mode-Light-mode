import React from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import useTheme from "./useTheme";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="flex h-screen">
      <Sidebar toggleTheme={toggleTheme}>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statics" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Change Theme"
          onClick={toggleTheme}
        />
      </Sidebar>
      <main className="flex-1 p-6">
        {/* Aquí iría el contenido principal de tu aplicación */}
        <h1>Contenido Principal</h1>
      </main>
    </div>
  );
}
