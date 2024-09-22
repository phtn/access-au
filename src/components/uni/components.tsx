import { useResize } from "@/app/hooks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ClassName } from "@/types";
import { cn } from "@/utils/cn";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Snippet,
  Tab,
  Tabs,
} from "@nextui-org/react";
import {
  useCallback,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

type Id = string | number;

interface Stats {
  id: Id;
  label: string;
  value: number | string;
  prefix?: string;
  suffix?: string;
}

interface ContentHeaderProps {
  title: string;
  subtext?: string;
  extra?: Stats[];
  href?: string;
  logo?: string;
}

interface CoverData {
  id: Id;
  title?: string;
  src: string;
  caption: string;
}

interface ArticleData {
  id: number | string;
  title?: string;
  subtext?: string;
  content: string;
}

interface ListData {
  id: Id;
  content: string | number | boolean;
  cols?: number;
  marker?: "number" | "check";
}

interface AccordData {
  id: number | string;
  title: string;
  subtext?: string;
  content: string;
}

interface MetricData {
  id: Id;
  title: string;
  tag?: string;
  className?: ClassName;
  children?: ReactNode;
  value: number | string | boolean;
}

interface InfoData {
  id: number;
  title?: string;
  subtext?: string;
  content: string;
  symbol: string;
}

interface Info {
  title?: string;
  data: InfoData[];
}

interface BentoData {
  id: number;
  title: string;
  header: string;
  category: string;
  cover: string;
  thumbnail: string;
  href?: string;
}

interface Source {
  id: Id;
  title?: string;
  href?: string;
  updated?: number;
}

type ChildType =
  | "article"
  | "copy"
  | "cover"
  | "info"
  | "bento"
  | "list"
  | "metric";
type ChildData =
  | ArticleData
  | InfoData
  | CoverData
  | AccordData
  | BentoData
  | ListData
  | MetricData;
interface DynamicChild {
  id: Id;
  type: ChildType;
  data: ChildData[];
  title?: string;
  cols?: number;
  marker?: "number" | "check";
}

interface TabContentProps {
  header: ContentHeaderProps;
  href?: string;
  sources?: Source[];
  updated?: number;
  children?: DynamicChild[];
  body?: ReactElement;
}

export interface SidebarProps {
  tabId: number;
  title: string;
  key: string;
  content: TabContentProps;
}

export const Sidebar = (props: { tabs: SidebarProps[] }) => {
  const [placement, setPlacement] = useState<"end" | "top">("top");

  const width = useResize();

  useEffect(() => {
    if (width >= 700) {
      setPlacement("end");
    } else {
      setPlacement("top");
    }
  }, [width]);

  const render = useCallback(
    (tab: SidebarProps) => (
      <Tab
        key={`${tab.tabId}_${tab.key}`}
        title={<TabTitle title={tab.title} />}
      >
        <TabContent {...tab.content} />
      </Tab>
    ),
    [],
  );

  return (
    <>
      <Tabs
        aria-label="Options"
        placement={placement}
        className="h-fit"
        classNames={{
          tabList:
            "md:mt-8 portrait:rounded-none portrait:w-screen portrait:bg-default/30 portrait:border-t border-default-400/60 portrait:p-2 md:p-4 bg-white portrait:overflow-auto",
          tab: "md:h-14 h-10 lg:mx-6 rounded-3xl",
          panel: "md:mr-6 py-0 mr-0 portrait:w-full",
        }}
        color="warning"
        radius="sm"
      >
        {props.tabs.map(render)}
      </Tabs>
    </>
  );
};

export const TabTitle = (props: { title?: string; children?: ReactNode }) => (
  <div className="flex h-fit items-center justify-start md:space-x-6 md:px-4">
    <span className="font-medium tracking-tight">{props.title}</span>
    {props.children}
  </div>
);

const DynamicRenderer = (props: { data: DynamicChild[] | undefined }) => {
  const render = useCallback((item: DynamicChild) => {
    switch (item.type) {
      case "article":
        return <Article key={item.id} data={item.data as ArticleData[]} />;
      case "copy":
        return (
          <CopyInfo
            title={item.title}
            key={item.id}
            data={item.data as InfoData[]}
          />
        );
      case "cover":
        return (
          <Cover
            key={item.id}
            title={item.title}
            data={item.data as CoverData[]}
          />
        );
      case "info":
        return <Accord key={item.id} data={item.data as AccordData[]} />;
      case "bento":
        return <Bento key={item.id} data={item.data as BentoData[]} />;
      case "list":
        return (
          <List
            key={item.id}
            marker={item.marker}
            cols={item.cols}
            data={item.data as ListData[]}
          />
        );
      case "metric":
        return <Metric data={item.data as MetricData[]} />;
      default:
        return null;
    }
  }, []);
  return <div className="relative space-y-12">{props.data?.map(render)}</div>;
};

const ContentHeader = (props: ContentHeaderProps) => (
  <div className="flex h-[72px] items-start justify-between">
    <Link
      href={props.href}
      className="flex items-center space-x-4 text-slate-800"
    >
      {props.logo ? (
        <Image
          alt={props.logo}
          isBlurred
          isLoading={false}
          src={props.logo}
          className="animate-enter"
          disableSkeleton
          width={72}
        />
      ) : null}
      <div>
        <h1 className="font-arc text-xl tracking-tight md:text-3xl">
          {props.title}
        </h1>
        <p className="font-light tracking-tight opacity-60">{props.subtext}</p>
      </div>
    </Link>
    {props.extra ? <HeaderExtra stats={props.extra} /> : null}
  </div>
);

const ContentBody = (props: { children?: ReactNode }) => (
  <div className="w-full space-y-12 leading-8 md:pr-4">{props.children}</div>
);

export const TabContent = (props: TabContentProps) => (
  <div className="h-fit space-y-4 bg-white px-4 py-6 md:my-8 md:rounded-xl md:px-6">
    <ContentHeader {...props.header} />
    <ContentBody>
      <DynamicRenderer data={props.children} />
    </ContentBody>
    <Sources sources={props.sources} />
  </div>
);

const Cover = (props: { data: CoverData[]; title?: string }) => (
  <figure>
    <div className="flex items-center py-6 md:space-x-10 md:px-10">
      {props.data.map((cover, i) => (
        <Image
          isZoomed
          isBlurred
          key={cover.id}
          src={cover.src}
          alt={cover.caption}
          className={cn("rounded-lg", {
            "md:w-full portrait:hidden": i === 1,
          })}
        />
      ))}
    </div>
    <figcaption className="ml-3 text-xs md:ml-10">{props.title}</figcaption>
  </figure>
);

const Article = (props: { data: ArticleData[] }) => {
  return props.data.map((item) => (
    <p className="px-4 text-justify" key={item.id}>
      {`${item.content}`}
    </p>
  ));
};

export const HeaderExtra = (props: { stats: Stats[] }) => (
  <div className="flex items-center text-xs md:space-x-6 md:px-4 lg:space-x-10 portrait:hidden">
    {props.stats.map((stat) => (
      <div
        key={stat.id}
        className={cn(
          "flex animate-enter flex-col items-start first:delay-100 last:delay-200",
        )}
      >
        <p className="font-arc font-medium ordinal md:text-xl">
          <span className="text-xs font-thin xl:text-sm">{stat.prefix}</span>
          {stat.value}

          <span className="text-xs font-light xl:text-sm">{stat.suffix}</span>
        </p>
        <p className="opacity-70 portrait:text-[10px]">{stat.label}</p>
      </div>
    ))}
  </div>
);

export const List = (props: {
  data: ListData[];
  cols?: number;
  marker: "number" | "check" | undefined;
}) => (
  <div className={cn("w-full px-6")}>
    {[new Array(props.cols ?? 1)].map((_, i) => (
      <ol
        key={`_${i}`}
        className={cn(
          "list-inside list-decimal py-4 font-medium marker:font-light marker:text-gray-500",
          {
            "list-image-[url('/svg/check.svg')] marker:size-8 marker:text-green-500":
              props.marker === "check",
          },
        )}
      >
        {props.data.map((item) => (
          <li key={item.id}>{`${item.content}`} </li>
        ))}
      </ol>
    ))}
  </div>
);

export const CopyInfo = ({ title, data }: Info) => (
  <div className="flex flex-col space-y-4 overflow-auto font-ibm md:px-4">
    <p className="text-lg font-semibold tracking-tight">{title}</p>
    {data.map((info) => (
      <Snippet
        key={info.id}
        size="md"
        symbol={info.symbol}
        className="overflow-auto md:w-fit portrait:max-w-[40ch]"
      >
        {`${info.content}`}
      </Snippet>
    ))}
  </div>
);

const Sources = (props: { sources?: Source[] }) => (
  <section className="flex flex-col items-start py-10">
    {props.sources?.map((source) => (
      <Link
        href={source.href}
        key={source.id}
        className="flex items-center space-x-2 font-arc text-[10px] italic tracking-tight text-gray-400 hover:text-gray-800"
      >
        <code className="not-italic">[{source.id}]</code>
        <code>{`${source.href}`}</code>
        <code>{source.updated}</code>
      </Link>
    ))}
  </section>
);

export const MetricPanel = (props: Omit<MetricData, "value" | "id">) => {
  return (
    <div className="flex h-[130px] w-full cursor-pointer flex-col rounded-xl border-[0.33px] border-default-400/60 p-4 text-default-800 shadow-md shadow-default transition-shadow hover:shadow-lg hover:shadow-default/60">
      <div className="flex h-full w-full justify-between">
        <div className="">
          <div className="font-medium leading-none tracking-tight text-neutral-800">
            {props.title}
          </div>
          <div className="text-[10px] font-medium uppercase tracking-tight text-neutral-400 md:text-xs">
            {props.tag}
          </div>
        </div>
        <div></div>
      </div>
      {props.children}
    </div>
  );
};
// <props.icon className="size-6 stroke-1 text-neutral-500" />

export const MetricPanelContent = (props: { value: MetricData["value"] }) => {
  return (
    <div className="flex w-full items-center justify-end self-baseline text-xl font-semibold leading-none tracking-tighter md:text-3xl">
      <div className="flex w-full flex-col items-end">
        <div className="animate-enter">{props.value}</div>
        <div className="text-xs font-light opacity-80"></div>
      </div>
    </div>
  );
};

const Metric = (props: { data: MetricData[] }) => (
  <div className="mb-4 grid w-full grid-cols-2 gap-6 md:grid-cols-3">
    {props.data.map((metric) => (
      <MetricPanel key={metric.id} title={metric.title} tag={metric.tag}>
        <MetricPanelContent value={metric.value} />
      </MetricPanel>
    ))}
  </div>
);

const Accord = (props: { data: AccordData[] }) => {
  return (
    <div className="w-full py-2 md:p-6">
      <Accordion
        variant="shadow"
        itemClasses={{
          title: "tracking-tight text-sky-600",
          base: "shadow-none drop-shadow-default drop-shadow px-6 my-2",
        }}
        className=""
      >
        {props.data.map((item) => (
          <AccordionItem
            key={item.id}
            subtitle={`${item.subtext ?? ""}`}
            title={`${item.title}`}
          >
            {`${item.content}`}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export const Bento = (props: { data: BentoData[] }) => (
  <div className="grid w-full grid-cols-1 gap-12 px-12 py-6 md:grid-cols-2">
    {props.data.map((item) => (
      <BentoBox key={item.id} {...item} />
    ))}
  </div>
);

const BentoBox = (props: BentoData) => (
  <Card isFooterBlurred className="h-auto w-full">
    <CardHeader className="absolute top-1 z-10 flex-col items-start">
      <p className="text-tiny font-bold uppercase text-white/60">
        {`${props.header}`}
      </p>
      <h4 className="drop-shadow-default text-xl font-semibold tracking-tighter text-white drop-shadow-md">{`${props.title}`}</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt="Relaxing app background"
      className="z-0 h-full w-full object-cover"
      src={props.cover}
    />
    <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
      <div className="flex flex-grow items-center gap-2">
        <Image
          alt="go8-logo"
          className="aspect-square size-10 rounded-full bg-black object-contain"
          src={props.thumbnail}
        />
        <div className="flex flex-col">
          <p className="text-tiny text-white/60">{props.category}</p>
          <p className="text-tiny text-white/60"></p>
        </div>
      </div>
      <Button radius="full" size="sm" className="flex">
        <p>Read</p>
      </Button>
    </CardFooter>
  </Card>
);

export function Size() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="absolute w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className=" p-1">
              <div className="bg-default">
                <div className="flex items-center justify-center p-2">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
