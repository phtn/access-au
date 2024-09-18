import { Tab, Tabs } from "@nextui-org/react";
import { type StickyScrollContent } from "./sticky-reveal";
import { Scrolly } from "@/components/app/scrolly";

export interface TabItem {
  id: string | number;
  value: string;
  label: string;
  content: StickyScrollContent[];
}
export interface TabCompProps {
  tabItems: TabItem[];
}

export function TabComp({ tabItems }: TabCompProps) {
  return (
    <div className="flex w-full flex-col gap-4 tracking-tight md:items-center">
      <Tabs>
        {tabItems.map((item, i) => (
          <Tab key={i} title={item.label} titleValue={item.value}>
            <div className="portrait:-ml-5 portrait:w-screen">
              <Scrolly content={item.content} />
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
