import { type SidebarProps } from "./components";

export const melbourneTabs: SidebarProps[] = [
  {
    tabId: 0,
    title: "Introduction",
    key: "introduction",
    content: {
      header: {
        logo: "/svg/melbourneU_c.svg",
        title: "University of Melbourne",
        subtext: "Melbourne, Victoria",
        href: "https://www.unimelb.edu.au/",
        extra: [
          { id: 0, label: "Australia", value: 1, suffix: "st" },
          { id: 1, label: "World", value: 13, suffix: "th" },
        ],
      },

      children: [
        {
          id: 0,
          type: "cover",
          title: "Campus still shot & Accomodations building.",
          data: [
            {
              id: 0,
              title: "Campus still shot",
              src: "https://www.unimelb.edu.au/__data/assets/image/0009/3822948/campuses.w600.min.jpg",
              caption: "Campus still shot",
            },
            {
              id: 1,
              title: "Accomodations building",
              src: "https://www.unimelb.edu.au/__data/assets/image/0010/3843667/accomodation-2.w600.min.jpg",
              caption: "Accomodations building",
            },
          ],
        },
        {
          id: 1,
          type: "article",
          data: [
            {
              id: 0,
              title: "",
              subtext: "",
              content: `University of Melbourne is Australia's leading research university,
                with a 165-year-long tradition of higher education in the arts, sciences
                and numerous professional disciplines.`,
            },
          ],
        },

        {
          id: 2,
          type: "article",
          data: [
            {
              id: 1,
              title: "",
              subtext: "",
              content: `Only a short walk or tram ride from Melbourne's city centre, the
                        University of Melbourne's main Parkville campus is a well-known city
                        landmark, with unique cultural, architectural and landscape features and
                        facilities. Our other campuses are spread across Melbourne and regional
                        Victoria, each with their own focus.`,
            },
          ],
        },
        {
          id: 3,
          type: "copy",
          title: "Contact Details",
          data: [
            {
              id: 0,
              title: "",
              subtext: "",
              symbol: "☎️",
              content: "13 MELB (13 6352)",
            },
            {
              id: 1,
              title: "",
              subtext: "",
              symbol: "☎️",
              content: "+(61 3) 9035 5511",
            },
            {
              id: 2,
              title: "",
              subtext: "",
              symbol: "📭",
              content: "The University of Melbourne, Victoria 3009 Australia",
            },
          ],
        },
      ],
      sources: [{ id: 1, title: "", href: "https://www.unimelb.edu.au" }],
    },
  },
  {
    tabId: 2,
    title: "Top Courses",
    key: "courses",
    content: {
      header: {
        logo: "/svg/melbourneU_c.svg",
        title: "Top Courses",
        subtext: "Universities Highest Output",
      },
      children: [
        {
          id: 0,
          type: "article",
          data: [
            {
              id: 0,
              title: "",
              content: `The Melbourne curriculum is distinct in Australia but aligned with leading universities in Europe and North America. Their extensive curriculum combines a broad-based undergraduate experience with pathways to postgraduate education, employment or research. Through this unique approach, students are encouraged to explore and discover their passions and strengths while developing deep expertise in their chosen discipline.`,
            },
            {
              id: 1,
              title: "",
              content:
                "Here are the Top Courses with the highest output to date.",
            },
          ],
        },
        {
          id: 1,
          type: "info",
          data: [
            {
              id: 0,
              title: "Law",
              subtext: "(1st in Australia, 11th globally)",
              content:
                "Comprehensive curriculum with high graduate employment rate.",
            },
            {
              id: 1,
              title: "Psychology",
              subtext: "(1st in Australia, 19th globally)",
              content:
                "Strong focus on cognitive sciences, offering various majors.",
            },
            {
              id: 2,
              title: "Arts and Humanities",
              subtext: "(1st in Australia, 16th globally)",
              content: "Over 600 subjects across 40 fields.",
            },
            {
              id: 3,
              title: "Medicine",
              subtext: "(2nd in Australia, 24th globally)",
              content:
                "Australia's first medical school with specializations in cancer and child health",
            },
            {
              id: 4,
              title: "Engineering (Civil and Structural) (22nd globally)",
              subtext: "(1st in Australia, 11th globally)",
              content: "Offers pathway from Bachelor's to Master's degree.",
            },
          ],
        },
        {
          id: 3,
          type: "article",
          data: [
            {
              id: 0,
              title: "",
              content: `Choosing from seven bachelors degrees in arts, biomedicine, commerce, design, fine arts, music, or science, students can select from over 100 study areas as they progress.`,
            },
          ],
        },
      ],
      sources: [
        {
          id: 1,
          href: "https://stories.unimelb.edu.au/featured/the-melbourne-curriculum-explained",
        },
      ],
    },
  },
  {
    tabId: 2,
    title: "Scholarships",
    key: "scholarships",
    content: {
      header: {
        logo: "/svg/melbourneU_c.svg",
        title: "Scholarships",
        subtext: "Offered Scholarships for International Students",
      },
      children: [
        { id: 0, type: "article", data: [] },
        {
          id: 1,
          type: "bento",
          data: [
            {
              id: 0,
              header: "Scholarship",
              title: "Narrm Scholarship",
              category: "Undergraduate Scholarship",
              cover: "/svg/melbourneU_c3.svg",
              href: "https://go8.edu.au/go8-ai-collaboration-and-commercialisation-summit",
              thumbnail:
                "https://d2glwx35mhbfwf.cloudfront.net/v14.10.0/logo.svg",
            },
            {
              id: 1,
              header: "Scholarship",
              title: "Melbourne Chancellor's Scholarship",
              category: "Prestigious Award",
              cover: "/svg/melbourneU_c2.svg",
              href: "https://go8.edu.au/go8-ai-collaboration-and-commercialisation-summit",
              thumbnail:
                "https://d2glwx35mhbfwf.cloudfront.net/v14.10.0/logo.svg",
            },
            {
              id: 2,
              header: "Scholarship",
              title: "International House Scholarships",
              category: "Up to AUD 22,500 per annum accommodation",
              cover: "/svg/melbourneU_c4.svg",
              href: "https://go8.edu.au/go8-ai-collaboration-and-commercialisation-summit",
              thumbnail:
                "https://d2glwx35mhbfwf.cloudfront.net/v14.10.0/logo.svg",
            },
          ],
        },
      ],
    },
  },

  {
    tabId: 3,
    title: "Accomodations",
    key: "accomodations",
    content: {
      header: {
        logo: "/svg/melbourneU_c.svg",
        title: "Accomodations",
        subtext: "University Life",
      },
      children: [
        {
          id: 0,
          type: "cover",
          title: "Room in Trinity College",
          data: [
            {
              id: 0,
              title: "",
              caption: "Rooms in Trinity College",
              src: "https://www.trinity.unimelb.edu.au/getmedia/73e9efd3-964d-4335-ae90-a940f72267d6/Bedroom.jpg",
            },
          ],
        },
        {
          id: 1,
          type: "article",
          data: [
            {
              id: 0,
              title: "",
              content: `University of Melbourne encourages all international students to live their best university life while studying. They are focused on maintaining and building support networks of peers, staff and community. `,
            },
            {
              id: 1,
              title: "",
              content: `Choose from independent apartment-style living to residential colleges with catered meals.
              All accommodation includes a year-round program of social, academic and career events.
              All our residencies are located just a short walk from our Parkville campus,
              in the heart of the city of Melbourne.`,
            },
            {
              id: 2,
              title: "",
              content: `University of Melbourne has na Accomodation Offer for all commencing students who are new to Melbourne.`,
            },
            {
              id: 2,
              title: "",
              content: `All applications are subject for availability.`,
            },
          ],
        },
        {
          id: 2,
          type: "list",
          cols: 1,
          marker: "check",
          title: "Included as part of your fees*",
          data: [
            {
              id: 0,
              title: "Furnished room",
              content: `Furnished room`,
            },
            {
              id: 1,
              content: `Utilities (Electricity, Water and Unlimited Internet)`,
            },
            {
              id: 2,
              content: "Close to Parkille Campus and City",
            },
            {
              id: 3,
              content:
                "Amenities (Gym, Cinema, Communal Kitchen, Study rooms, Music rooms, and more*)",
            },
            {
              id: 4,
              content: "24/7 staff and wellbeing support",
            },
            {
              id: 5,
              content: "Catered meals (residential colleges only)",
            },
            {
              id: 6,
              content: "Year-round calendar of programs and events.",
            },
          ],
        },
        {
          id: 3,
          type: "cover",
          title: "Lounge & Study area",
          data: [
            {
              id: 0,
              caption: "",
              title: "",
              src: "https://www.trinity.unimelb.edu.au/getmedia/93dbbfe9-3a06-4987-b2ec-78c473e773cb/communalforweb.aspx",
            },
          ],
        },
      ],
      sources: [
        {
          id: 1,
          title: "unimelb.edu.au",
          href: "https://study.unimelb.edu.au/accommodation",
        },
        {
          id: 2,
          title: "unimelb.edu.au",
          href: "https://www.trinity.unimelb.edu.au/residential-college/choose-trinity/rooms-facilities",
        },
      ],
    },
  },
  {
    tabId: 4,
    title: "Support Services",
    key: "support_services",
    content: {
      header: {
        logo: "/svg/melbourneU_c.svg",
        title: "Support Services",
        subtext: "Counseling and Advice",
      },
      children: [
        {
          id: 0,
          type: "article",
          data: [
            {
              id: 0,
              title: "Support",
              content: `The University of Melbourne offers comprehensive support services for international students. Here are some of popular services they provide.`,
            },
          ],
        },
        {
          id: 1,
          type: "info",
          data: [
            {
              id: 0,
              title: "Academic Support",
              subtext: "One-on-one advice via Zoom and email",
              content:
                "self-access resources for study skills, and Stop 1 for course advice and academic policies [8][2]. Library services provide online resources and chat assistance [3].",
            },
            {
              id: 1,
              title: "Career Counseling",
              subtext: "Zoom or personalized",
              content:
                "Career services offer Zoom appointments for personalized advice, workshops on employability skills, and the Melbourne Employability Accelerator program [3]. A Peer Mentor Program is available for career guidance and networking [3].",
            },
            {
              id: 2,
              title: "Mental Health Resources",
              subtext: "FREE",
              content:
                "Free, confidential short-term psychological counseling through Counseling and Psychological Services (CAPS), with up to six sessions per year [4][5]. Wellbeing workshops and crisis support are also available [3][4].",
            },
            {
              id: 3,
              title: "Additional Services",
              subtext: "",
              content:
                "Financial aid information, Student Equity and Disability Services, and the Safer Community Program [5][4]. The university organizes international student events and provides access to the Study Melbourne Hub for additional support and social activities [5][1].",
            },
          ],
        },
      ],
      sources: [
        {
          id: 1,
          href: "https://insiderguides.com.au/support-international-students-in-melbourne/",
        },
        {
          id: 2,
          href: "https://study.unimelb.edu.au/how-to-apply/international-exchange-and-study-abroad-applications/our-support-services",
        },
        {
          id: 3,
          href: "https://students.unimelb.edu.au/student-support/international-student-support/support-services-for-remote-study",
        },
        {
          id: 4,
          href: "https://gsa.unimelb.edu.au/wp-content/uploads/2023/05/Strengthening-International-Students-Access-to-University-Support-Services.pdf",
        },
        {
          id: 5,
          href: "https://gsa.unimelb.edu.au/resources/international-students/",
        },
      ],
    },
  },
  {
    tabId: 6,
    title: "Exchange Guide",
    key: "exchange_guide",
    content: {
      header: {
        logo: "/svg/melbourneU_c.svg",
        title: "Exchange Guide",
        subtext: "Quick Info",
      },

      children: [
        {
          id: 0,
          type: "article",
          data: [
            {
              id: 0,
              title: "title",
              content: `Here are some numbers that might help you with your decision in choosing the right school. We'll make sure to keep these metrics up-to-date.`,
            },
          ],
        },
        {
          id: 1,
          type: "metric",
          data: [
            {
              id: 0,
              title: "World Ranking",
              value: "13th",
              tag: "Rank",
            },
            {
              id: 1,
              title: "International Students",
              value: "42%",
              tag: "population",
            },
            {
              id: 2,
              title: "Admission Rate",
              value: "70%",
              tag: "Admission",
            },
            {
              id: 3,
              title: "Tuition Fee",
              value: "AUD 35,400",
              tag: "Fee",
            },
            {
              id: 4,
              title: "Cost of Living",
              value: "AUD 1,516",
              tag: "Money",
            },
          ],
        },
      ],
      sources: [
        {
          id: 0,
          title: "Australia Exchange Guide",
          href: "re-up.ph ottogrid agent",
        },
      ],
    },
  },
];

/*
The University of Melbourne offers several scholarships for international students:

1. Melbourne International Undergraduate Scholarship: Provides AUD 10,000 tuition fee remission for the first year, with potential 50% or 100% fee remission for the entire three-year duration. Eligibility requires being in the top 3% of secondary school results [1][3][9].

2. Graduate Research Scholarships: Offers full fee offset, living allowance of AUD 37,000 per year, relocation grant, and health cover for Masters and PhD students [3][4].

3. International House Scholarships: Up to AUD 22,500 per annum for accommodation fees [5].

4. Melbourne Chancellor's Scholarship: Prestigious award for high-achieving school leavers [2].

5. Narrm Scholarship: Provides financial, academic, and wellbeing support to eligible undergraduate students [2].

Eligibility generally requires being an international student with high academic achievement. Many scholarships, including the Melbourne International Undergraduate Scholarship, automatically consider eligible students upon course application [1][3][9].

[1]: https://scholarships.unimelb.edu.au/awards/melbourne-international-undergraduate-scholarship
[2]: https://scholarships.unimelb.edu.au/
[3]: https://leapscholar.com/blog/university-of-melbourne-international-scholarship/
[4]: https://greatyop.com/university-melbourne-scholarships/
[5]: https://scholarships.unimelb.edu.au/awards/international-house-scholarships
[9]: https://collegedunia.com/scholarship/370-melbourne-international-undergraduate-scholarship
*/

/*

Mental Health Resources: Free, confidential short-term psychological counseling through Counseling and Psychological Services (CAPS), with up to six sessions per year [9][10]. Wellbeing workshops and crisis support are also available [8][9].

Additional Services: Financial aid information, Student Equity and Disability Services, and the Safer Community Program [10][9]. The university organizes international student events and provides access to the Study Melbourne Hub for additional support and social activities [10][2].

[2]: https://insiderguides.com.au/support-international-students-in-melbourne/
[6]: https://study.unimelb.edu.au/how-to-apply/international-exchange-and-study-abroad-applications/our-support-services
[8]: https://students.unimelb.edu.au/student-support/international-student-support/support-services-for-remote-study
[9]: https://gsa.unimelb.edu.au/wp-content/uploads/2023/05/Strengthening-International-Students-Access-to-University-Support-Services.pdf
[10]: https://gsa.unimelb.edu.au/resources/international-students/
*/

/*
The University of Melbourne offers diverse accommodation options for international students, including both on-campus and off-campus housing:

On-Campus:
1. University Accommodation: Options like Little Hall (AUD 436-675/week), The Lofts (AUD 443-753/week), International House and Wilam Hall (both including meals, AUD 676-851/week). Features include proximity to campus, utilities included, academic support, and 24/7 security .

2. Residential Colleges: Offer catered meals, community focus, academic support, and 24/7 security .

Off-Campus:
1. Private Purpose-Built Student Accommodation: Providers like Unilodge, Scape, and Yugo offer housing near the university and CBD, with amenities such as gyms and study areas. Costs range from AUD 200-500/week .

2. Private Rentals and Share Houses: Offers independence and potentially lower costs, but requires more effort to secure .

3. Homestays: Living with local families, ideal for cultural immersion .

Special features include academic support, social events, and wellbeing programs across most options, with university-managed accommodations providing 24/7 security and support staff .
*/
