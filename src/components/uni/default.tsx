import { type SidebarProps } from "./components";

export const defaultTabs: SidebarProps[] = [
  {
    tabId: 0,
    title: "Introduction",
    key: "introduction",
    content: {
      header: {
        logo: "/svg/groupOf8_c.svg",
        title: "Group of Eight",
        subtext: "Australia",
      },
      children: [
        {
          id: 0,
          type: "article",
          data: [
            {
              id: 0,
              content: `The Group of Eight (Go8) represents Australia's leading
                research-intensive universities, comprising eight prestigious institutions
                that form the cornerstone of the nation's higher education and
                research landscape. Established in 1999, this alliance includes the:`,
            },
          ],
        },
        {
          id: 1,
          type: "list",
          cols: 2,
          data: [
            { id: 1, content: "University of Melbourne - Melbourne" },
            { id: 2, content: "University of Sydney - Sydney" },
            { id: 3, content: "Australian National University - Canberra" },
            { id: 4, content: "Monash University - Melbourne" },
            { id: 5, content: "University of Queensland (UQ) - Brisbane" },
            { id: 6, content: "University of Western Australia (UWA) – Perth" },
            { id: 7, content: "University of New South Wales (UNSW) – Sydney" },
            { id: 8, content: "University of Adelaide – Adelaide" },
          ],
        },
        {
          id: 2,
          type: "article",
          data: [
            {
              id: 1,
              content: `Renowned for their academic excellence and global standings, Go8
                                  universities consistently rank among the world's top 150
                                  institutions. These universities collectively educate over 425,000
                                  students, including 160,000 international students from 200 countries, and
                                  are at the forefront of Australia's research output, securing 71% of
                                  the country's competitive research grants. With a significant annual
                                  economic impact of $66.4 billion, the Go8 plays a pivotal role in shaping
                                  Australia's educational, research, and economic future.`,
            },
          ],
        },
      ],
      sources: [
        { id: 1, title: "about", href: "https://go8.edu.au/about/the-go8" },
      ],
    },
  },
  {
    tabId: 1,
    title: "Credit Transfer",
    key: "credit_transfer",
    content: {
      header: {
        logo: "/svg/groupOf8_c.svg",
        title: "Credit Transfer",
        subtext: "Principles",
      },
      children: [
        {
          id: 0,
          type: "article",
          data: [
            {
              id: 0,
              title: "",
              content: `In recognition of the excellence of teaching and research that exists
                              in Go8 universities, members agree to support the mobility of students
                              between them by facilitating the transfer of credit earned at their
                              institutions where possible. The Agreement is based on recognition
                              that the academic expectations and assessment regimes at all Go8
                              universities are comparable, however it is noted that a student’s
                              completed units must be assessed against the corresponding units
                              within the program to which they seek to transfer.`,
            },
          ],
        },
        {
          id: 1,
          type: "info",
          data: [
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
          ],
        },
      ],
      sources: [
        {
          id: 1,
          title: "credit transfer",
          href: "https://go8.edu.au/study/credit-transfer",
        },
      ],
    },
  },
  {
    tabId: 2,
    title: "News & Updates",
    key: "news",
    content: {
      header: {
        logo: "/svg/groupOf8_c.svg",
        title: "Latest News",
        subtext: "Research Collaboration",
      },
      children: [
        {
          id: 0,
          type: "bento",
          data: [
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
          ],
        },
      ],
      sources: [
        {
          id: 1,
          title: "news and updates",
          href: "https://go8.edu.au/tag/research-collaboration",
        },
      ],
    },
  },
];
