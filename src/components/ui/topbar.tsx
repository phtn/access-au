import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { LinkBtn } from "./buttons";
import type { DualIcon } from "@/types";
import { Logo } from "@/components/app/logo";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { useAuthContext } from "@/app/ctx";

export interface Brand {
  label?: string;
  href?: string;
}
export interface TopbarLink {
  label: string;
  href: string;
}
export interface Extras {
  type?: "icon" | "text";
  label?: string;
  href: string;
  icon?: DualIcon;
}
interface TopbarProps {
  brand?: Brand;
  links?: TopbarLink[];
  extras?: Extras[];
}
export function Topbar({ extras }: TopbarProps) {
  const { user } = useAuthContext();

  const NavContentExtra = useCallback(() => {
    return (
      <NavbarContent justify="end">
        {extras?.map((extra, i) => (
          <NavbarItem key={`${i}_${extra.label}`}>
            <LinkBtn
              isIconOnly={extra.type === "icon"}
              icon={extra.icon}
              label={
                extra.type === "icon" ? "" : (user?.displayName ?? extra.label)
              }
              href={
                user?.uid
                  ? extra.type === "icon"
                    ? `${extra.href}/${user.uid}`
                    : `/account/${user.uid}`
                  : extra.href
              }
              className="shrink-0 px-2"
            ></LinkBtn>
          </NavbarItem>
        ))}
      </NavbarContent>
    );
  }, [extras, user]);
  return (
    <Navbar shouldHideOnScroll isBlurred maxWidth="xl">
      <NavbarBrand>
        <Link href="/">
          <div>
            <Logo />
          </div>
          <motion.div className="mx-4 animate-enter font-sarabun font-semibold text-gray-800 portrait:text-sm">
            Accessability
          </motion.div>
        </Link>
      </NavbarBrand>
      <NavContentExtra />
    </Navbar>
  );
}
