import { CommandLineIcon } from "@heroicons/react/24/outline";
import { memo, useMemo, type FC } from "react";
import { Sidebar } from "./components";
import { defaultTabs } from "./default";
import { melbourneTabs } from "./melbourne";

const DefaultTab = memo(() => <Sidebar tabs={defaultTabs} />);
DefaultTab.displayName = "GroupOf8";
const Melbourne = memo(() => <Sidebar tabs={melbourneTabs} />);
Melbourne.displayName = "MelbourneU";

export const UniContent = (props: { selected: number }) => {
  const contents: FC[] = useMemo(() => [DefaultTab, Melbourne], []);
  const Component = useMemo(
    () => contents[props.selected],
    [props.selected, contents],
  );
  return (
    <div
      className={
        "relative h-[calc(100vh-124px)] w-full overflow-auto bg-default/60 px-10 xl:px-24"
      }
    >
      {Component ? <Component /> : <UnderDevelopment id={props.selected} />}
    </div>
  );
};

// <div className="absolute left-0 -mt-[40px] h-10 w-screen bg-gradient-to-b from-white via-transparent to-sky-100/20 backdrop-blur-lg" />
const UnderDevelopment = (props: { id: number }) => (
  <div className="flex h-full w-full justify-center whitespace-nowrap">
    <div className="m-10 flex h-fit items-center space-x-8 rounded-xl bg-default px-14 py-10">
      <CommandLineIcon className="size-24 shrink-0 stroke-1 opacity-70" />
      <div>
        <div className="text-xl"> Page Under Development</div>
        <div className="text-xs opacity-80">Work ID: {props.id}</div>
      </div>
    </div>
  </div>
);
