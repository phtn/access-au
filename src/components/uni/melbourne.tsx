import { Image } from "@nextui-org/react";
import {
  AccordionChild,
  BentoChild,
  CopyDetail,
  type CopyDetails,
  type SidebarProps,
  type Stats,
  StatsExtra,
  TabContent,
  TabTitle,
} from "./components";

const copyDetails: CopyDetails[] = [
  { id: 0, value: "13 MELB (13 6352)", symbol: "☎️" },
  { id: 0, value: "+(61 3) 9035 5511", symbol: "☎️" },
  {
    id: 0,
    value: "The University of Melbourne, Victoria 3009 Australia",
    symbol: "📭",
  },
];

const DefaultIntro = () => (
  <div className="relative space-y-10">
    <p>
      University of Melbourne is Australia&apos; leading research university,
      with a 165-year-long tradition of higher education in the arts, sciences
      and numerous professional disciplines.
    </p>

    <p>
      Only a short walk or tram ride from Melbourne&apos;s city centre, the
      University of Melbourne&apos;s main Parkville campus is a well-known city
      landmark, with unique cultural, architectural and landscape features and
      facilities. Our other campuses are spread across Melbourne and regional
      Victoria, each with their own focus.
    </p>
    <CopyDetail title="Contact details" details={copyDetails} />
  </div>
);

const accordionList = [
  {
    id: 0,
    title: "Accepted Students",
    content: `Credit will be granted to students who are accepted for admission
              into a degree program at a Go8 university for appropriate units of
              study successfully completed while enrolled at another Go8
              university where these are assessed as comparable to units in the
              corresponding program and taking into consideration the course
              structure.`,
  },

  {
    id: 1,
    title: "Recognition",
    content: `Credit transfer may be possible for students in all degree programs who have successfully completed a recognised component of study at a Go8 university.`,
  },
  {
    id: 2,
    title: "Meet All Requirements",
    content: `Students must meet all requirements of the degree program in which they enrol.`,
  },
  {
    id: 3,
    title: "Accordance With Rules",
    content: `Credit transfer for units of study successfully completed as part of a previously completed degree will be considered in accordance with the rules of the degree program into which the student is seeking admission.`,
  },
];

const bentoList = [
  {
    id: 0,
    header: "partners in excellence:",
    title: "the Go8’s long-standing relationship with Japan",
    category: "research",
    cover:
      "https://go8.edu.au/wp-content/uploads/2019/04/Minister-85-scalia-blog-default.jpg",
    href: "https://go8.edu.au/wp-content/uploads/2020/03/0800-Go8-Holding-Slide-scalia-blog-default.jpg",
    thumbnail:
      "http://go8.edu.au/wp-content/uploads/2018/07/go8australia-doublesmall.png",
  },
  {
    id: 0,
    header: "artificial intelligence",
    title: "Go8 AI Collaboration and Commercialisation Summit",
    category: "event",
    cover:
      "https://go8.edu.au/wp-content/uploads/2020/03/0800-Go8-Holding-Slide-scalia-blog-default.jpg",
    href: "https://go8.edu.au/go8-ai-collaboration-and-commercialisation-summit",
    thumbnail:
      "http://go8.edu.au/wp-content/uploads/2018/07/go8australia-doublesmall.png",
  },
];

const stats: Stats[] = [
  { id: 0, label: "Australia", value: 1, prefix: "#" },
  { id: 1, label: "World", value: 14, prefix: "#" },
];

export const melbourneTabs: SidebarProps[] = [
  {
    tabId: 0,
    title: <TabTitle title="Introduction"></TabTitle>,
    key: "introduction",
    content: (
      <TabContent
        title="University of Melbourne"
        subtext="Melbourne, Australia"
        source="https://www.unimelb.edu.au"
        logo="/svg/melbourneU_c.svg"
        extra={<StatsExtra stats={stats} />}
      >
        <div className="flex items-center space-x-6 p-6">
          <Image
            alt="university photo"
            src="https://www.unimelb.edu.au/__data/assets/image/0009/3822948/campuses.w600.min.jpg"
            isBlurred
            className="rounded-lg"
            width={400}
          />
          <Image
            alt="university photo"
            src="https://www.unimelb.edu.au/__data/assets/image/0010/3843667/accomodation-2.w600.min.jpg"
            isBlurred
            className="rounded-lg"
            width={400}
          />
        </div>

        <DefaultIntro />
      </TabContent>
    ),
  },
  {
    tabId: 1,
    title: <TabTitle title="Credit Transfer"></TabTitle>,
    key: "credit_transfer",
    content: (
      <TabContent
        title="Credit Transfer"
        subtext="Principles"
        source="https://go8.edu.au/study/credit-transfer"
      >
        <p>
          In recognition of the excellence of teaching and research that exists
          in Go8 universities, members agree to support the mobility of students
          between them by facilitating the transfer of credit earned at their
          institutions where possible. The Agreement is based on recognition
          that the academic expectations and assessment regimes at all Go8
          universities are comparable, however it is noted that a student’s
          completed units must be assessed against the corresponding units
          within the program to which they seek to transfer.
        </p>
        <div>
          <AccordionChild list={accordionList} />
        </div>
      </TabContent>
    ),
  },
  {
    tabId: 2,
    title: <TabTitle title="News & Updates"></TabTitle>,
    key: "news",
    content: (
      <TabContent
        title="Latest News"
        subtext="Research Collaboration"
        source="https://go8.edu.au/tag/research-collaboration"
      >
        <BentoChild list={bentoList} />
      </TabContent>
    ),
  },
];
