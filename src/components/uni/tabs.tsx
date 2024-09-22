import { Button } from "../ui/button";
import { type Dispatch, type SetStateAction, useCallback, memo } from "react";
import { cn } from "@/utils/cn";
import { Image } from "@nextui-org/react";

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
  scrollFn: VoidFunction;
}

const UniTab = ({ selected, onSelect, scrollFn, props }: UniTabs) => {
  const { id, name, src } = props;
  const handleSelect = useCallback(() => {
    onSelect(id);
    scrollFn();
  }, [scrollFn, id, onSelect]);
  return (
    // <div className="flex w-fit shrink-0 items-center justify-center border-default-400/60 py-2 shadow-default drop-shadow md:border-b-[0.33px] md:py-10 md:first:border-b-0 md:first:shadow-none md:last:rounded-br-[44px] portrait:w-full">
    <Button
      variant={"ghost"}
      onClick={handleSelect}
      className={cn("h-fit py-2 portrait:w-fit", {
        "via-default-60 bg-gradient-to-br from-default/20 to-default":
          selected === id,
      })}
    >
      <Image alt={name} src={src} height={56} className={cn("my-1 shrink-0")} />
    </Button>
    // </div>
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
      <Uni
        props={props}
        key={props.id}
        selected={selected}
        onSelect={onSelect}
        scrollFn={scrollFn}
      />
    ),
    [onSelect, selected, scrollFn],
  );

  return (
    <div className="w-screen overflow-auto py-4 shadow-md">
      <div className="flex w-full items-center justify-evenly px-0 md:px-8 portrait:space-x-6">
        {unilist.map(render)}
      </div>
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
  },
  {
    id: 2,
    name: "University of Queensland, Australia",
    src: "/svg/queenU.svg",
  },

  {
    id: 3,
    name: "University Of Adelaide, Australia",
    src: "/svg/adelaideU.svg",
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
//         key: 0,
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
