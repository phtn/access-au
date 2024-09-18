import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/utils/cn";
import {
  DocumentMagnifyingGlassIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  ScrollShadow,
  Snippet,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { ChevronRightIcon } from "lucide-react";
import type { ReactElement, ReactNode, SVGProps } from "react";

export interface SidebarProps {
  tabId: number;
  title: ReactElement | string;
  key: string;
  content: ReactElement | string;
}
export const Sidebar = (props: { tabs: SidebarProps[] }) => (
  <div className="flex w-full flex-col">
    <Tabs
      aria-label="Options"
      placement={"end"}
      classNames={{
        tabList: " p-4",
        tab: "h-[56px] mx-6 rounded-3xl",
        panel: "mr-6",
      }}
      color="primary"
      radius="sm"
    >
      {props.tabs.map((tab) => (
        <Tab key={`${tab.tabId}_${tab.key}`} title={tab.title}>
          <div className="w-full rounded-xl border shadow-sm">
            {tab.content}
          </div>
        </Tab>
      ))}
    </Tabs>
  </div>
);

export const TabTitle = (props: { title?: string; children?: ReactNode }) => (
  <div className="flex h-fit max-h-[calc(100vh-160px)] items-center justify-start space-x-6 px-4">
    <span className="font-medium tracking-tight">{props.title}</span>
    {props.children}
  </div>
);

interface TabContentProps {
  title: string;
  subtext?: string;
  logo?: string;
  source?: string;
  updated?: number;
  children?: ReactNode;
  body?: ReactElement;
  extra?: ReactElement | string;
}

export const TabContent = (props: TabContentProps) => (
  <div className="h-[calc(100vh-160px)] w-full max-w-[calc(100vw/1.40)] space-y-4 overflow-auto px-6 pb-20 pt-6">
    <TitleSection
      title={props.title}
      subtext={props.subtext}
      logo={props.logo}
      extra={props.extra}
    />
    <ContentBody>{props.children}</ContentBody>
    <SourceSection title={props.source} updated={props.updated} />
  </div>
);

const TitleSection = (props: {
  title: string;
  subtext?: string;
  logo?: string;
  extra?: ReactElement | string;
}) => (
  <div className="flex h-[72px] items-start justify-between">
    <div className="flex items-center space-x-4">
      {props.logo ? (
        <Image
          alt={props.logo}
          isBlurred
          src={props.logo}
          className=""
          width={72}
        />
      ) : null}
      <div>
        <h1 className="font-arc text-3xl tracking-tight">{props.title}</h1>
        <p className="pl-2 font-light tracking-tight opacity-60">
          {props.subtext}
        </p>
      </div>
    </div>
    {props.extra}
  </div>
);

export interface Stats {
  id: number;
  label: string;
  value: number | string;
  prefix?: string;
  suffix?: string;
}
export const StatsExtra = (props: { stats: Stats[] }) => (
  <div className="flex items-center space-x-10 px-4 text-xs">
    {props.stats.map((stat) => (
      <div
        key={stat.id}
        className={cn(
          "flex animate-enter flex-col items-start first:delay-100 last:delay-200",
        )}
      >
        <p className="font-arc text-xl font-medium">
          <span className="text-sm font-normal opacity-30">{stat.prefix}</span>
          {stat.value}
          <span className="text-sm font-normal opacity-30">{stat.suffix}</span>
        </p>
        <p className="opacity-70">{stat.label}</p>
      </div>
    ))}
  </div>
);

export interface CopyDetails {
  id: number;
  value: string;
  symbol: string;
}
export const CopyDetail = (props: {
  details: CopyDetails[];
  title: string;
}) => (
  <div className="flex flex-col space-y-4 px-4">
    <p className="text-lg font-medium tracking-tight">Contact details</p>
    {props.details.map((detail) => (
      <Snippet
        key={detail.id}
        size="lg"
        symbol={detail.symbol}
        className="w-fit"
      >
        {detail.value}
      </Snippet>
    ))}
  </div>
);

const ContentBody = (props: { children?: ReactNode }) => (
  <ScrollShadow className="w-full space-y-10 text-justify leading-8">
    {props.children}
  </ScrollShadow>
);

const SourceSection = (props: {
  title?: string;
  href?: string;
  updated?: number;
}) => (
  <section className="flex items-center justify-between py-10 font-arc text-xs italic tracking-wide opacity-50">
    <div className="flex items-center space-x-2">
      <DocumentMagnifyingGlassIcon className="size-3.5 flex-shrink-0 stroke-1 text-gray-800" />
      <code>source </code>
      <ChevronRightIcon className="size-3 flex-shrink-0 text-gray-800" />{" "}
      <code>{props.title}</code>
    </div>
    <code>{props.updated}</code>
  </section>
);

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
}
interface AccordionChildProps {
  list: AccordionItemProps[];
}
export const AccordionChild = ({ list }: AccordionChildProps) => {
  return (
    <div className="p-6">
      <Accordion
        variant="splitted"
        itemClasses={{ title: "tracking-tight text-sky-600" }}
      >
        {list.map((item) => (
          <AccordionItem key={item.id} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

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

export const GalleryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    fill="none"
    {...props}
  >
    <path
      d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z"
      fill="currentColor"
    />
    <path
      d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
      fill="currentColor"
    />
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
      fill="currentColor"
    />
  </svg>
);

export interface BentoProps {
  id: number;
  title: string;
  header: string;
  category: string;
  cover: string;
  thumbnail: string;
}
interface BentoChildProps {
  list: BentoProps[];
}
export const BentoChild = ({ list }: BentoChildProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-12 px-12 py-6 md:grid-cols-2">
      {list.map((item) => (
        <Bento key={item.id} {...item} />
      ))}
    </div>
  );
};

const Bento = (props: BentoProps) => (
  <Card isFooterBlurred className="h-[300px] w-full">
    <CardHeader className="absolute top-1 z-10 flex-col items-start">
      <p className="text-tiny font-bold uppercase text-white/60">
        {props.header}
      </p>
      <h4 className="text-xl font-medium text-white/90">{props.title}</h4>
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
          <p className="text-tiny text-white/60">Read more.</p>
        </div>
      </div>
      <Button radius="full" size="sm" className="flex">
        <p>View</p>
        <EyeIcon className="size-3.5 " />
      </Button>
    </CardFooter>
  </Card>
);
