import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img 
              src="/Logo2.png" 
              alt="NEXIRAI"
              width={120}
              height={40}
              className="h-8 w-auto transition-transform hover:scale-105"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Button
                  variant={location === item.href ? "default" : "ghost"}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location === item.href ? "bg-[#FF7F50] text-white" : "text-gray-700"
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;