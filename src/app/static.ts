import { type StickyScrollContent } from "@/components/ui/sticky-reveal";
import { type TabItem } from "@/components/ui/tabs";
import type { Extras, TopbarLink, Brand } from "@/components/ui/topbar";

export const brand: Brand = {
  label: "Accessability",
};
export const links: TopbarLink[] = [];
export const extras: Extras[] = [
  {
    label: "Sign in",
    href: "/signin",
  },
];

export const topbarProps = { links, extras };

export const scrollContents: StickyScrollContent[] = [
  {
    title: "Ready to Transform Your Future?",
    description:
      "Embark on an unforgettable journey with full access to top Australian universities and schools. Our platform empowers exchange students like you to explore diverse educational opportunities, gain global perspectives, and immerse yourself in the vibrant Australian culture—all in one place.",

    media: "Transform Your Future",
    mediaTitle: "Transform Your Future",
  },
  {
    title: "Why Choose us?",
    description:
      "Our mission is to provide you with all the essential information and ensure you maximise your adventure in Australia.",
    media: "",
  },
  {
    title: "Start your journey today!",
    description:
      "Discover how easy it is to turn your dreams into reality. Explore our platform and unlock a world of educational possibilities in Australia.",
    media: "",
  },
];

export const tabItems: TabItem[] = [
  { id: 0, value: "intro", label: "Intro", content: scrollContents },
  { id: 5, value: "services", label: "Services", content: scrollContents },
  { id: 1, value: "community", label: "Community", content: scrollContents },
  { id: 2, value: "guides", label: "Guides", content: scrollContents },
  { id: 3, value: "about", label: "About Us", content: scrollContents },
];
