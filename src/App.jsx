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
          text="Panel"
          alert
        />
        <SidebarItem icon={<BarChart3 size={20} />} text="Estadisticas" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Usuarios" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventario" />
        <SidebarItem icon={<Package size={20} />} text="Pedidos" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Facturaciones" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Ajustes" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Ayuda" />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Cambiar tema"
          onClick={toggleTheme}
        />
      </Sidebar>
      <main className="flex h-screen">
        {/* Aquí iría el contenido principal de tu aplicación */}
        <h1>Contenido Principal</h1>
      </main>
    </div>
  );
}
