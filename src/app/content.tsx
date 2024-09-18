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
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollRef]);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex h-full w-full flex-col items-center">
        <div className="md:h-8" />
        <Navbar />
        <div className="md:h-[64px]" />
        <HeroLight actions={[handleExplore]} />
        <Haze />
        <Rect />
        <div
          ref={scrollRef}
          className=" mx-8 w-[calc(100vw/1.4)] self-end border-b-[0.33px] border-slate-300/60"
        />
        <UniTablist
          onSelect={setSelected}
          selected={selected}
          scrollFn={handleExplore}
        />
        <div className="grid h-10 w-screen grid-cols-5 justify-start px-8">
          <div className="-mt-[0.33px] h-full w-full rounded-tl-[64px] border-t-[0.33px] border-default-400/60" />
        </div>

        <UniContent selected={selected} />

        <div className="flex h-[100px] w-screen justify-start overflow-clip border-default-400/60 border-y-[0.33] bg-default/0"></div>
        <div className="px-4 portrait:w-screen"></div>
        <div className="h-[200px]" />
      </div>
    </main>
  );
};

const Haze = () => (
  <div className="mb-6 flex w-full md:h-[64px]">
    <div className="h-full w-[300px] border-t-[0.33px] border-slate-200" />
    <div className="h-full w-[100px] border-y-[0.33px] border-default-200" />
    <div className="h-full w-[400px] border-b-[0.33px] border-default" />
    <div className="h-full w-[400px]">
      <div className="h-[32px] w-[300px] border-b-[0.33px] border-default" />
      <div className="w-[100px] border-t-[0.33px] border-dotted border-default-400" />
    </div>
    <div className="-ml-8 h-full w-[250px] border-b-[0.33px] border-dashed border-default-400/60" />
  </div>
);

const Navbar = memo(() => <Topbar {...topbarProps} />);
Navbar.displayName = "Navbar";

const Tabs = memo(() => <TabComp tabItems={tabItems} />);
Tabs.displayName = "Tabs";

const Scrolley = memo(() => <Scrolly content={scrollContents} />);
Scrolley.displayName = "Scrolley";
