import Image from "next/image";
import { Button } from "../ui/button";
import { type Dispatch, type SetStateAction, useCallback, memo } from "react";
import { cn } from "@/utils/cn";

export interface UniProps {
  id: number;
  name: string;
  size?: number;
  src: string;
}

interface UniTabs {
  props: UniProps;
  selected: number;
  onSelect: Dispatch<SetStateAction<number>>;
}

const UniTab = ({ props, selected, onSelect }: UniTabs) => {
  const { id, name, size, src } = props;
  const handleSelect = () => {
    onSelect(id);
  };
  return (
    <div className="flex items-center justify-center border-b py-10 shadow-default drop-shadow-md first:border-b-0 first:shadow-none last:rounded-br-[44px]">
      <Button variant={"ghost"} onClick={handleSelect} className="border">
        <Image
          alt={name}
          src={src}
          height={size ?? 48}
          width={size ?? 48}
          unoptimized
          priority
          className={cn(
            "m-2 h-[48px] w-auto rounded-full p-1",
            {
              "h-[56px]": size,
            },
            { "border border-gray-400/60 bg-default": selected === id },
          )}
        />
      </Button>
    </div>
  );
};
const Uni = memo((props: UniTabs) => <UniTab {...props} />);
Uni.displayName = "Uni";

interface UnitTablistProps {
  selected: number;
  onSelect: Dispatch<SetStateAction<number>>;
  scrollFn: VoidFunction;
}
export const UniTablist = ({
  onSelect,
  selected,
  scrollFn,
}: UnitTablistProps) => {
  const render = useCallback(
    (props: UniProps) => (
      <Uni props={props} selected={selected} onSelect={onSelect} />
    ),
    [onSelect, selected],
  );

  return (
    <div
      onClick={scrollFn}
      className="grid w-full grid-cols-5 items-center justify-around px-8"
    >
      {unilist.map(render)}
    </div>
  );
};

const unilist: UniProps[] = [
  {
    id: 0,
    name: "Group Of 8 Australia",
    src: "/svg/groupOf8.svg",
  },
  {
    id: 1,
    name: "University Of Melbourne, Australia",
    src: "/svg/melbourneU.svg",
    size: 48,
  },
  {
    id: 2,
    name: "University of Queensland, Australia",
    src: "/svg/queenU.svg",
    size: 48,
  },

  {
    id: 3,
    name: "University Of Adelaide, Australia",
    src: "/svg/adelaideU.svg",
    size: 48,
  },
  {
    id: 4,
    name: "University of Sydney, Australia",
    src: "/svg/sydneyU.svg",
  },
];

// interface UniDockListProps {
//   onSelect: Dispatch<SetStateAction<number>>;
//   selected: number
// }
// export const UniDockList = ({ onSelect }: UniDockListProps) => {
//   const unilist: UniProps[] = useMemo(
//     () => [
//       {
//         id: 0,
//         name: "Group Of 8",
//         src: "/svg/groupOf8.svg",
//         onSelect,
//       },
//       {
//         id: 1,
//         name: "University of Queensland",
//         src: "/svg/queenU.svg",
//         size: 48,
//         onSelect,
//       },
//       {
//         id: 2,
//         name: "University Of Melbourne",
//         src: "/svg/melbourneU.svg",
//         size: 48,
//         onSelect,
//       },
//       {
//         id: 3,
//         name: "University Of Adelaide",
//         src: "/svg/adelaideU.svg",
//         size: 48,
//         onSelect,
//       },
//       {
//         id: 4,
//         name: "University of Sydney",
//         src: "/svg/sydneyU.svg",
//         onSelect,
//       },
//     ],
//     [onSelect],
//   );

//   const items = unilist.map((item) => ({
//     ...item,
//     icon: <UniTab {...item} />,
//     href: "#",
//   }));

//   return <Dock desktopClassName="" items={items} />;
// };
