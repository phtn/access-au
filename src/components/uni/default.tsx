import { Tab, Tabs } from "@nextui-org/react";
import { AccordionChild, BentoChild, TabContent, TabTitle } from "./components";

export const GroupOf8Tab = () => (
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
      {defaultTablist.map((tab) => (
        <Tab key={`${tab.tabId}_${tab.key}`} title={tab.title}>
          <div className="w-full rounded-xl border shadow-sm">
            {tab.content}
          </div>
        </Tab>
      ))}
    </Tabs>
  </div>
);

const DefaultIntro = () => (
  <div className="relative space-y-10">
    <p>
      The Group of Eight (Go8) represents Australia&apos;s leading
      research-intensive universities, comprising eight prestigious institutions
      that form the cornerstone of the nation&apos;s higher education and
      research landscape. Established in 1999, this alliance includes the:
    </p>
    <div className="grid grid-cols-1 px-2 md:grid-cols-2">
      <ol className="py-4 font-medium text-sky-600">
        <li>University of Melbourne - Melbourne</li>
        <li>University of Sydney - Sydney</li>
        <li>Australian National University - Canberra</li>
        <li>Monash University - Melbourne</li>
      </ol>
      <ol className="py-4 font-medium text-sky-600">
        <li>University of Queensland (UQ) - Brisbane</li>
        <li>University of Western Australia (UWA) – Perth</li>
        <li>University of New South Wales (UNSW) – Sydney</li>
        <li>University of Adelaide – Adelaide</li>
      </ol>
    </div>
    <p>
      Renowned for their academic excellence and global standings, Go8
      universities consistently rank among the world&apos;s top 150
      institutions. These universities collectively educate over 425,000
      students, including 160,000 international students from 200 countries, and
      are at the forefront of Australia&apos;s research output, securing 71% of
      the country&apos;s competitive research grants. With a significant annual
      economic impact of $66.4 billion, the Go8 plays a pivotal role in shaping
      Australia&apos;s educational, research, and economic future.
    </p>
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

const defaultTablist = [
  {
    tabId: 0,
    title: <TabTitle title="Introduction"></TabTitle>,
    key: "introduction",
    content: (
      <TabContent
        title="Group of 8"
        subtext="Australia"
        source="https://go8.edu.au/about/the-go8"
        logo="/svg/groupOf8_c.svg"
      >
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
