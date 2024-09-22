"use client";

import { HeroLight } from "@/components/app/hero";
import { Scrolly } from "@/components/app/scrolly";
import { TabComp } from "@/components/ui/tabs";
import { Topbar } from "@/components/ui/topbar";
import { Rect } from "@/components/ui/tracy";
import { UniContent } from "@/components/uni/content";
import { UniTablist } from "@/components/uni/tabs";
import { memo, useCallback, useRef, useState } from "react";
import { scrollContents, tabItems, topbarProps } from "./static";

export const PageCont = () => {
  const [selected, setSelected] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleExplore = useCallback(() => {
    if (scrollRef.current && window.scrollY !== 668) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollRef]);
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <div className="relative flex h-full w-full flex-col items-center">
        <div className="h-2 w-full lg:h-4 xl:h-8" />
        <Navbar />
        <div className="h-8 xl:h-16 portrait:hidden" />
        <HeroLight actions={[handleExplore]} />
        <Haze />
        <div className="h-2 w-full bg-sky-100/20"></div>
        <Rect />
        <div className="h-[7.50rem]" />
        <div ref={scrollRef} />
        <UniTablist
          onSelect={setSelected}
          selected={selected}
          scrollFn={handleExplore}
        />

        <UniContent selected={selected} />

        <div className="_h-[200px]" />
      </div>
    </main>
  );
};

const Haze = () => (
  <div className="flex h-8 w-screen overflow-clip bg-sky-100/20 md:w-full">
    <div className="h-full w-[calc(100vw*0.3)] bg-sky-200/10">
      <div className="h-3 w-full bg-white" />
      <div className="h-4 w-2/3 bg-white/80" />
      <div className="h-1 w-full bg-sky-300/10" />
    </div>
    <div className=" flex h-8 w-[calc(100vw*0.4)] flex-col items-end justify-between">
      <div className=" h-2 w-2/3 bg-white" />
      <div className="flex h-full w-full justify-between">
        <div className="h-2 w-1/5 bg-sky-100/10" />
        <div className="h-1 w-1/4 bg-sky-200/20" />
        <div className="h-1 w-1/3 bg-white/60" />
      </div>
    </div>
    <div className="flex h-full w-[calc(100vw*0.2)] items-end justify-end bg-sky-100/20">
      <div className="h-2 w-2/3 bg-sky-200/10" />
    </div>
    <div className="h-full w-[calc(100vw*0.1)]">
      <div className="h-3 w-1/2 bg-sky-50" />
      <div className="h-2 w-full bg-sky-100/20" />
      <div className="h-1 w-1/2 bg-sky-200/20" />
    </div>
  </div>
);

const Navbar = memo(() => <Topbar {...topbarProps} />);
Navbar.displayName = "Navbar";

const Tabs = memo(() => <TabComp tabItems={tabItems} />);
Tabs.displayName = "Tabs";

const Scrolley = memo(() => <Scrolly content={scrollContents} />);
Scrolley.displayName = "Scrolley";
