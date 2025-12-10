import { cn } from "@/lib/utils";
import { sidebarMenuButtonVariants } from "./ui/sidebar";
import { VariantProps } from "class-variance-authority";

interface SideBarItemProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  isActive?: boolean;
}

export const SideBarItem = ({
  isActive = false,
  variant = "default",
  size = "default",
  className,
  children,
  asChild = false,
  ...props
}: SideBarItemProps) => {
  const Comp = "button";

  return (
    <Comp
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    >
      {asChild ? children : <span className="truncate">{children}</span>}
    </Comp>
  );
};
