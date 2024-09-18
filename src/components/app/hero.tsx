import { Button } from "@nextui-org/button";
import { useCallback } from "react";
import { cn } from "@/utils/cn";
import { type DualIcon } from "@/types";
import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/solid";

type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "default"
  | "warning"
  | "danger"
  | undefined;
export interface Buttons {
  color: ButtonColor;
  label: string;
  href?: string;
  icon?: DualIcon;
}

export interface HeroProps {
  actions: VoidFunction[];
}

const buttons: Buttons[] = [
  {
    color: "primary",
    label: "Explore ",
    icon: MagnifyingGlassIcon,
  },
  {
    color: "default",
    label: "Ask AI",
    href: "/chat",
    icon: SparklesIcon,
  },
];

export const HeroLight = ({ actions }: HeroProps) => {
  const heading = ["Get Full Access", "to Australian Education."];

  const ActionButtons = useCallback(
    () =>
      buttons.map((btn, i) => (
        <Button
          onClick={actions[i]}
          key={btn.label}
          size={`lg`}
          variant={"shadow"}
          color={btn.color}
          className={cn(
            "group animate-enter px-8 text-sm font-medium tracking-tighter",
            { "delay-100": i === 1 },
            {
              "": btn.color === "primary",
            },
            {
              "bg-gray-800 text-white": btn.color === "default",
            },
          )}
        >
          <p>{btn.label}</p>
          {btn?.icon ? <btn.icon className={"size-4"} /> : null}
        </Button>
      )),
    [actions],
  );

  return (
    <div className="relative mb-6 flex w-full max-w-6xl flex-col items-center justify-center leading-none portrait:w-screen">
      <div className="h-12" />
      <div className="grid h-[20rem] w-full from-zinc-100/40 via-zinc-100/20 to-transparent lg:mx-12 lg:grid-cols-2 portrait:bg-gradient-to-b">
        <div className="relative z-10 flex items-end px-6 pb-8 pt-12 md:p-12 md:pt-12">
          <div className={cn("w-full space-y-16 text-gray-800")}>
            <div className="flex w-full flex-col portrait:items-center portrait:justify-center portrait:px-0">
              <h2 className="max-w-[16ch] font-sarabun text-5xl font-bold tracking-tighter portrait:text-3xl">
                {heading?.[0] ?? heading}{" "}
              </h2>
              <h2 className="font-sarabun text-[1.75rem] font-normal tracking-tighter text-slate-800/60 portrait:text-xl">
                {heading?.[1]}
              </h2>
            </div>

            <div className="flex items-center space-x-3 portrait:justify-center">
              <ActionButtons />
            </div>
          </div>
        </div>
        <AccessAu />
      </div>
    </div>
  );
};

const AccessAu = () => (
  <div className="relative inset-0 hidden items-end rounded-3xl rounded-t-[300px] bg-gradient-to-br from-sky-900/20 to-transparent text-gray-800 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)] lg:flex">
    <div className="center h-72 w-full bg-[url('/svg/opera_v2.svg')] bg-cover bg-bottom" />
    <div className="absolute -left-[30px] -top-[60px] z-30 h-[75px] w-[150px] bg-[url('/svg/qantas.svg')] bg-contain bg-center bg-no-repeat" />
    <div className="absolute right-10 z-50 m-4 h-[140px] w-[160px] animate-enter bg-[url('/svg/stamp.svg')] bg-contain bg-center bg-no-repeat opacity-60 delay-1000" />
  </div>
);
