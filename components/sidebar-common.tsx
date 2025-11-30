import { cn } from "@/lib/utils";
import { sidebarMenuButtonVariants } from "./ui/sidebar";
import { VariantProps } from "class-variance-authority";

export const SideBarItem = ({
  isActive = false,
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
} & VariantProps<typeof sidebarMenuButtonVariants>) => {
  const Comp = "button";
  return (
    <Comp
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="truncate">{children}</span>
    </Comp>
  );
};
