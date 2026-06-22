// ==========================================================================
// PROJECTS CONTENT — edit this file to add or change projects
// ==========================================================================
//
// HOW TO ADD A PROJECT
//   1. Copy the TEMPLATE block at the bottom of this file.
//   2. Paste it inside the list below (between the [ and ]).
//   3. Fill in the fields and save. The website updates automatically.
//
// You only ever edit THIS file. No HTML, CSS, or other code needed.
//
// --------------------------------------------------------------------------
// FIELD GUIDE
// --------------------------------------------------------------------------
//   title        (required)  Project name.
//   category     (required)  Short label shown on the colored badge.
//   description  (required)  One or two sentences (shown on the tile).
//   image        (required)  Photo path (e.g. "./assets/photo.jpg") or URL.
//   alt          (required)  Describe the photo for screen readers.
//   accent       optional    Color: "green" or "blue". (Default: "green")
//   size         optional    Tile size in the grid:
//                               "large" — big 2x2 feature
//                               "wide"  — 2 columns
//                               "tall"  — 2 rows
//                               "small" — standard 1x1 (default)
//   stat         optional    A key impact number, shown as a highlight chip.
//                               e.g. "50,000+ meals served"
//   highlights   optional    A list of short bullet points for extra content.
//                               e.g. ["Open 6 days a week", "12 villages"]
//   featured     optional    true to add a "Featured" flag that stands out.
//
// --------------------------------------------------------------------------
// DETAIL PAGE FIELDS  (shown when a project tile is clicked → project.html)
// --------------------------------------------------------------------------
//   id           optional    A short URL name, e.g. "seva". If you leave it
//                            out, one is made automatically from the title.
//   detail       optional    The intro paragraph(s) on the project page.
//                            Use a string, OR an array of strings for
//                            multiple paragraphs. Falls back to "description".
//   stats        optional    A list of impact numbers shown as big tiles:
//                               [{ value: "50,000+", label: "Meals served" }]
//   sections     optional    The main content blocks of the page. A list of:
//                               { heading: "The Story", body: "..." }
//                            "body" can be a string OR an array of strings
//                            (each becomes its own paragraph).
//   gallery      optional    A list of extra photos:
//                               [{ image: "./assets/a.jpg", alt: "..." }]
//
// TIP: keep red for the Donate button only — projects use green & blue.
// --------------------------------------------------------------------------

window.PROJECTS = [
  {
    id: "seva",
    title: "Seva",
    category: "Relief & Food",
    description:
      "Food, clothes, and daily essentials for those in need — including food for 1,500+ people during COVID-19.",
    detail: [
      "Seva is our frontline relief programme, providing cooked meals, dry rations, clothing, and daily essentials to families facing hardship.",
      "During the COVID-19 lockdown, our volunteers reached 1,500+ people who had no other source of support. Today the programme continues year-round, responding quickly wherever help is needed most.",
    ],
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    alt: "Volunteers distributing food and essentials to families",
    accent: "blue",
    size: "large",
    stat: "50,000+ meals served",
    highlights: [
      "50,000+ meals distributed to date",
      "Fed 1,500+ people during COVID-19",
      "Clothes and daily essentials provided",
    ],
    featured: true,
    stats: [
      { value: "50,000+", label: "Meals distributed" },
      { value: "1,500+", label: "People fed during COVID-19" },
      { value: "365", label: "Days a year active" },
    ],
    sections: [
      {
        heading: "Why it matters",
        body: "No one should go to bed hungry. Seva ensures that families in crisis — daily-wage workers, the elderly, and the homeless — have access to nutritious food and basic dignity when they need it most.",
      },
      {
        heading: "How it works",
        body: [
          "Volunteers prepare and pack fresh meals every day from community kitchens.",
          "Dry-ration kits and clothing are distributed directly to families and shelters across the city.",
          "During emergencies, we scale up rapidly to reach those cut off from other support.",
        ],
      },
      {
        heading: "How you can help",
        body: "₹350 feeds a family for a week. You can donate, sponsor a community kitchen, or volunteer your time for daily distribution drives.",
      },
    ],
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
        alt: "Meals being packed for distribution",
      },
      {
        image:
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
        alt: "Volunteer handing food to a family",
      },
    ],
  },
  {
    id: "bachpanshala",
    title: "Bachpanshala",
    category: "Education",
    description:
      "Education and care for underprivileged children, giving them a brighter start in life.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da280a25?w=600&q=80",
    alt: "Underprivileged children learning in a classroom",
    link: "#",
    accent: "green",
    size: "tall",
  },
  {
    id: "jeev",
    title: "Jeev",
    category: "Animal Welfare",
    description: "Supporting and rescuing animals in need of care.",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&q=80",
    alt: "Rescued dog being cared for by a volunteer",
    link: "#",
    accent: "green",
    size: "small",
    stat: "50+ animals fed daily",
  },
  {
    id: "udaan",
    title: "Udaan",
    category: "Women Empowerment",
    description:
      "Empowering women with skills, opportunities, and financial independence.",
    image: "./assets/udaan-campaign.jpg",
    alt: "Women learning new skills together",
    link: "#",
    accent: "blue",
    size: "small",
    stat: "900+ girls empowered",
  },
  {
    id: "prakriti",
    title: "Prakriti",
    category: "Environment",
    description:
      "Environmental conservation through clean-up drives and plantation.",
    image: "./assets/praktri.jpg",
    alt: "Volunteers planting trees during a plantation drive",
    link: "#",
    accent: "green",
    size: "wide",
    stat: "20,000+ trees planted",
  },
  {
    id: "vikas",
    title: "Vikas",
    category: "Youth & Skills",
    description:
      "Helping youth grow through internships and hands-on skill-building.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    alt: "Young people collaborating on a project",
    link: "#",
    accent: "blue",
    size: "wide",
  },

  // ----------------------------------------------------------------------
  // TEMPLATE — copy this block, remove the // in front of each line,
  // move it above this comment, and fill in your project.
  // ----------------------------------------------------------------------
  // {
  //   id: "project-name",         // optional clean URL name
  //   title: "Project Name",
  //   category: "Short Label",
  //   description: "One or two sentences shown on the tile.",
  //   image: "./assets/your-photo.jpg",
  //   alt: "Describe the photo",
  //   accent: "green",            // "green" or "blue"
  //   size: "small",              // "large" | "wide" | "tall" | "small"
  //   stat: "1,000+ people helped",
  //   highlights: ["Point one", "Point two", "Point three"],
  //   featured: false,
  //
  //   // ----- Detail page content (project.html) -----
  //   detail: ["First paragraph.", "Second paragraph."],
  //   stats: [
  //     { value: "1,000+", label: "People helped" },
  //     { value: "12", label: "Villages reached" },
  //   ],
  //   sections: [
  //     { heading: "Why it matters", body: "A short paragraph." },
  //     { heading: "How it works", body: ["Point one.", "Point two."] },
  //   ],
  //   gallery: [
  //     { image: "./assets/photo-1.jpg", alt: "Describe it" },
  //     { image: "./assets/photo-2.jpg", alt: "Describe it" },
  //   ],
  // },
];

// --------------------------------------------------------------------------
// Shared helper: turns a project into its URL name (used by the tiles and
// the project detail page). You don't need to edit this.
// --------------------------------------------------------------------------
window.projectSlug = function (project) {
  if (project && project.id) return String(project.id);
  return String((project && project.title) || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// ==========================================================================
// SOCIAL IMPACT STORIES — index.html #stories + stories.html
// ==========================================================================
//
// HOW TO ADD A STORY
//   1. Copy the TEMPLATE at the bottom of this list.
//   2. Paste above the template and fill in the fields.
//
// FIELD GUIDE
//   title        (required)  Story headline.
//   description  (required)  Short summary (homepage card + listing).
//   image        (required)  Photo path or URL.
//   alt          (required)  Describe the image for screen readers.
//   body         optional    Full story on the detail page (string or array).
//   id           optional    URL slug — auto-generated from title if omitted.
//   featured     optional    true — spotlight on the homepage Social Impact card.
// --------------------------------------------------------------------------

window.STORIES = [
  {
    id: "neetu-richa",
    title: "Neetu & Richa — Udaan Campaign",
    description:
      "From uncertainty to opportunity — their story of learning and growth.",
    image: "./assets/stories/udaan-campaign.jpg",
    alt: "Neetu and Richa smiling during the Udaan campaign",
    featured: true,
    body: [
      "Neetu and Richa joined our Udaan campaign when access to learning felt out of reach. Through community support and dedicated mentors, they found stability, confidence, and a path forward.",
      "Today they are not only learning — they are inspiring others in their neighbourhood to believe that opportunity is possible.",
    ],
  },

  // ----------------------------------------------------------------------
  // TEMPLATE — copy, uncomment, fill in, and add above this comment.
  // ----------------------------------------------------------------------
  // {
  //   id: "story-slug",
  //   title: "Story Title",
  //   description: "One or two sentences for the card summary.",
  //   image: "./assets/stories/your-photo.jpg",
  //   alt: "Describe the photo",
  //   featured: false,
  //   body: "Optional longer story text for the detail page.",
  // },
];

window.storySlug = function (story) {
  if (story && story.id) return String(story.id);
  return String((story && story.title) || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// ==========================================================================
// MOBILE SECTION NAV — breadcrumbs on index.html (max-width: 900px)
// ==========================================================================
//
// Edit this list to change which sections appear in the sticky mobile bar.
//   id      must match a section id on the page (or "top" for home/hero)
//   label   short text shown in the breadcrumb pill
// --------------------------------------------------------------------------

window.SECTION_NAV = [
    {id: "top", label: "Home"},
    {id: "about", label: "About"},
    {id: "mission", label: "Mission"},
    {id: "projects", label: "Projects"},
    {id: "impact", label: "Impact"},
    {id: "awards", label: "Awards"},
    {id: "donate-form", label: "Donate"},
    {id: "testimonials", label: "Voices"},
    {id: "faq", label: "FAQ"},
    {id: "contact", label: "Contact"},
];

// ==========================================================================
// HOW IT WORKS — Impact journey (index.html #journey)
// ==========================================================================
//
// Edit this block to update the "How It Works" section on the homepage.
//
// FIELD GUIDE
//   eyebrow     optional    Small label above the heading.
//   heading     (required)  Section title.
//   intro       (required)  Opening paragraph.
//   hook        optional    Short attention line shown as a badge.
//   cta         optional    { label, href } — button at the bottom.
//   steps       (required)  List of journey steps (see below).
//
// STEP FIELDS
//   num         (required)  Step number, e.g. "01"
//   title       (required)  Step heading.
//   body        (required)  Short description.
//   tagline     optional    Micro-label above title, e.g. "Your starting point"
//   accent      optional    "red", "blue", "green", or "yellow"
//   icon        optional    "donate", "act", "change", or "future"
//   featured    optional    true — spotlight card (best for step 1)
// --------------------------------------------------------------------------

window.JOURNEY = {
    eyebrow: "How It Works",
    heading: "Your gift becomes real change — in four steps",
    intro: "No black boxes. No guesswork. Follow exactly how your support travels from you to the communities we serve.",
    hook: "Simple path. Lasting impact.",
    cta: {label: "Start your impact today", href: "#donate-form"},
    steps: [
        {
            num: "01",
            title: "You Donate",
            tagline: "Your starting point",
            body: "Your contribution fuels real programmes on the ground — meals, education, care, and more.",
            accent: "red",
            icon: "donate",
            featured: true,
        },
        {
            num: "02",
            title: "We Act",
            tagline: "On the ground",
            body: "Our teams and volunteers deliver aid, education, and healthcare directly where it's needed.",
            accent: "blue",
            icon: "act",
        },
        {
            num: "03",
            title: "Lives Change",
            tagline: "Immediate difference",
            body: "Families gain access, opportunity, and dignity — you see the human outcome of your gift.",
            accent: "green",
            icon: "change",
        },
        {
            num: "04",
            title: "Better Future",
            tagline: "Generational impact",
            body: "Communities grow stronger, generation after generation — the ripple keeps spreading.",
            accent: "yellow",
            icon: "future",
        },
    ],
};

// ==========================================================================
// WHO WE ARE — Mission, Vision & Values (index.html #about)
// ==========================================================================
//
// Edit this block to update the "Who We Are" section on the homepage.
//
// FIELD GUIDE
//   eyebrow     optional    Small label above the heading.
//   heading     (required)  Section title.
//   intro       (required)  Opening paragraph.
//   hook        optional    Short attention line shown as a badge.
//   pillars     (required)  List of Mission, Vision, Values (see below).
//
// PILLAR FIELDS
//   id          optional    Anchor id for nav links, e.g. "mission"
//   label       (required)  "Mission", "Vision", or "Values"
//   tagline     optional    Short line above the label, e.g. "What we do daily"
//   body        (required)  Main text (string or array of strings)
//   points      optional    Bullet list — use for Values
//   accent      optional    "green", "blue", or "yellow" (default: "green")
//   featured    optional    true — larger spotlight card (best for Mission)
// --------------------------------------------------------------------------

window.ABOUT = {
    eyebrow: "Who We Are",
    heading: "Rooted in compassion, growing through action",
    intro: "Since 2020, InAmigos has partnered with local communities to address the root causes of poverty — with transparency, dignity, and collaboration at the centre of everything we do.",
    hook: "Purpose-led. People-first. Impact-driven.",
    pillars: [
        {
            id: "mission",
            label: "Mission",
            tagline: "What we do every day",
            body: "We commit to creating lasting social impact by addressing critical societal issues through a network of dedicated professionals and volunteers.",
            accent: "green",
            featured: true,
        },
        {
            id: "vision",
            label: "Vision",
            tagline: "Where we're heading",
            body: "A world where every person has access to opportunity, care, and hope — and no one is left behind.",
            accent: "blue",
        },
        {
            id: "values",
            label: "Values",
            tagline: "How we show up",
            body: "The principles that guide every programme, partnership, and rupee spent.",
            points: [
                "Transparency — open reporting on every rupee",
                "Dignity — respect for every life we serve",
                "Collaboration — communities lead, we support",
            ],
            accent: "yellow",
        },
    ],
};

// ==========================================================================
// AWARDS & ACHIEVEMENTS CONTENT
// ==========================================================================
//
// HOW TO ADD AN AWARD
//   1. Copy the TEMPLATE block at the bottom of this list.
//   2. Paste it inside the list below and remove the // in front of each line.
//   3. Fill in the fields and save.
//
// FIELD GUIDE
//   year     (required)  Year or date, e.g. "2024".
//   title    (required)  Name of the award or milestone.
//   issuer   optional    Who gave it / where it's from.
//   detail   optional    A short sentence of extra context.
//   image    (required)  Photo path, e.g. "./assets/awards/photo.jpg"
//   alt      (required)  Describe the award photo for screen readers.
//   file     optional    Certificate/file for Download (defaults to image).
//   viewUrl  optional    Link for View button (defaults to image).
//   accent   optional    "green" or "blue" (default: "green")
//   featured optional    true — accent spotlight styling (same card size as others)
// --------------------------------------------------------------------------

window.AWARDS = [
    {
        year: "17 December 2025",
        title: "Top 5 NGO of Year 2025",
        issuer: "Brand Honchos",
        detail: "Hon'ble Mayor Delhi at Hyatt Centric, New Delhi",
        image: "./assets/awards/top-ngo-2025.jpg",
        alt: "InAmigos team receiving Top 5 NGO of the Year 2025 award",
        accent: "green",
        featured: true,
    },
    {
        year: "12 December 2025",
        title: "Finalist in Indian Social Impact Awards",
        issuer: "Indian Social Impact Awards",
        detail: "Reached the finals at SPJIMR, a 40+ year old Tier-1 business school.",
        image: "./assets/awards/social-impact-2025.jpg",
        alt: "InAmigos at the Indian Social Impact Awards ceremony",
        accent: "blue",
    },

    // ----------------------------------------------------------------------
    // TEMPLATE — copy this block, remove the // in front of each line,
    // move it above this comment, and fill in your award.
    // ----------------------------------------------------------------------
    // {
    //   year: "2025",
    //   title: "Award or Milestone Name",
    //   issuer: "Who awarded it",
    //   detail: "A short sentence of context.",
    //   image: "./assets/awards/your-photo.jpg",
    //   alt: "Describe the award photo",
    //   file: "./assets/awards/your-certificate.pdf",
    //   viewUrl: "./assets/awards/your-photo.jpg",
    //   accent: "green",
    //   featured: false,
    // },
];

// ==========================================================================
// FAQ CONTENT
// ==========================================================================
//
// HOW TO ADD A QUESTION
//   1. Copy the TEMPLATE block at the bottom of this list.
//   2. Paste it inside the list and remove the // in front of each line.
//   3. Fill in the question and answer, then save.
//
// FIELD GUIDE
//   q  (required)  The question.
//   a  (required)  The answer.
// --------------------------------------------------------------------------

window.FAQS = [
    {
      q: "How can I volunteer with InAmigos?",
      a: "We welcome volunteers for teaching, animal care, plantation drives, relief work, and events. Reach out through the Contact Us section and our team will help you find the right fit.",
  },
    {
        q: "How is my donation used?",
        a: "98% of every donation goes directly to our programmes — food, education, healthcare, and the environment. The remaining 2% covers essential operations. We report openly on how funds are spent.",
    },
    {
        q: "Will I get a tax exemption receipt?",
        a: "Yes. InAmigos is registered under Section 8 of the Companies Act and donations are eligible for 80G tax exemption. You'll receive a receipt by email after donating.",
    },
    {
        q: "Can I set up a monthly donation?",
        a: "Absolutely. On the donation card you can choose 'Monthly' to give a recurring amount. You can pause or cancel your monthly giving anytime — no questions asked.",
    },
    
    

    // ----------------------------------------------------------------------
    // TEMPLATE — copy this block, remove the // in front of each line,
    // move it above this comment, and fill in your question.
    // ----------------------------------------------------------------------
    // {
    //   q: "Your question here?",
    //   a: "Your answer here.",
    // },
];

// ==========================================================================
// CONTACT & LICENSES — index.html #contact
// ==========================================================================
//
// Edit CONTACT for the heading and contact details.
// Edit LICENSES to add or update certificate proof cards.
//
// LICENSE FIELDS
//   title     (required)  Certificate name.
//   issuer    optional    Issuing authority.
//   number    optional    Registration / certificate number.
//   year      optional    Year issued or valid from.
//   accent    optional    "green" or "blue"
//   featured  optional    true — spotlight card styling
// --------------------------------------------------------------------------

window.CONTACT = {
    eyebrow: "Get in Touch",
    heading: "Contact Us",
    intro: "Reach our team for donations, volunteering, partnerships, or general enquiries. We're here to help.",
    hook: "Registered. Certified. Accountable.",
    address: [
        "Ward No. 5, Gram Post, Sipat Ujwal Nagar,",
        "Bilaspur, Chhattisgarh",
        "Pincode: 495555",
    ],
    email: "inamigosfoundation@gmail.com",
    phone: "+91 626 730 9902",
    licensesHeading: "Licenses & Certifications",
    licensesIntro:
        "Official registrations and credentials — proof that InAmigos operates with full transparency and compliance.",
};

window.LICENSES = [
    {
        title: "Section 8 Company Registration",
        issuer: "Ministry of Corporate Affairs, Govt. of India",
        number: "Section 8 — Non-profit company",
        year: "2020",
        accent: "blue",
        featured: true,
    },
    {
        title: "80G Tax Exemption Certificate",
        issuer: "Income Tax Department, Govt. of India",
        number: "Donations eligible for tax deduction",
        year: "2021",
        accent: "green",
    },
    {
        title: "12A Registration",
        issuer: "Income Tax Department, Govt. of India",
        number: "Income tax exemption for the organisation",
        year: "2021",
        accent: "blue",
    },
    {
        title: "CSR-1 Registration",
        issuer: "Ministry of Corporate Affairs, Govt. of India",
        number: "Corporate Social Responsibility registration",
        year: "2022",
        accent: "green",
    },
    {
        title: "IAF ISO 9001:2015 Certified",
        issuer: "International Accreditation Forum",
        number: "Quality management system certification",
        year: "2023",
        accent: "blue",
    },
    {
        title: "NGO DARPAN Registration",
        issuer: "NITI Aayam, Govt. of India",
        number: "National NGO portal registration",
        year: "2021",
        accent: "green",
    },

    // ----------------------------------------------------------------------
    // TEMPLATE — copy, uncomment, fill in, and add to the list above.
    // ----------------------------------------------------------------------
    // {
    //   title: "Certificate Name",
    //   issuer: "Issuing authority",
    //   number: "Registration number",
    //   year: "2024",
    //   accent: "green",
    //   featured: false,
    // },
];

// ==========================================================================
// TESTIMONIALS CONTENT
// ==========================================================================
//
// HOW TO ADD A TESTIMONIAL
//   1. Copy the TEMPLATE block at the bottom of this list.
//   2. Paste it inside the list and remove the // in front of each line.
//   3. Fill in the fields and save.
//
// FIELD GUIDE
//   quote   (required)  What the person said.
//   name    (required)  Person's name.
//   role    optional    Their role, e.g. "Volunteer" or "Beneficiary".
//   avatar      optional    Photo path or URL. If omitted, initials are shown.
//   video       optional    Link to a video, e.g. YouTube or Instagram URL.
//   videoLabel  optional    Button text (default: "Watch video").
//   accent      optional    "green" or "blue" (default: "green").
// --------------------------------------------------------------------------

window.TESTIMONIALS = [
    {
        quote: "InAmigos helped me to develop communication, time management, research, content writing, reasoning skills",
        name: "Emedio Akwaniba",
        role: "Virtual Intern",
        accent: "green",
        video: "https://www.instagram.com/inamigos/reel/DZutVbmEmYs/",
        videoLabel: "Watch Emedio's story",
    },
    {
        quote: "InAmigos helped me to go from fieldwork to real world impact",
        name: "Unnamed",
        role: "Virtual Intern",
        accent: "blue",
        video: "https://www.instagram.com/inamigos/reel/DQMc_koCPGz/",
        videoLabel: "Watch story",
    },
    {
        quote: "InAmigos helped me to have an insightful experience, productive and meaningful",
        name: "Pari Nagpal",
        role: "Volunteer - Fund Raising",
        accent: "green",
        video: "https://www.instagram.com/inamigos/reel/DB9MngNvVOo/",
        videoLabel: "Watch Pari's story",
    },
    {
        quote: "InAmigos helped me grow as person and learned a lot.",
        name: "Sagarika Jaiswal",
        role: "Community Management Intern",
        video: "https://www.instagram.com/inamigos/reel/CUU_Nh6oz32/",
        videoLabel: "Watch Sagarika's story",

        accent: "blue",
    },

    // ----------------------------------------------------------------------
    // TEMPLATE — copy this block, remove the // in front of each line,
    // move it above this comment, and fill in your testimonial.
    // ----------------------------------------------------------------------
    // {
    //   quote: "What the person said about InAmigos.",
    //   name: "Person Name",
    //   role: "Their role",
    //   avatar: "./assets/person.jpg",
    //   video: "https://www.youtube.com/watch?v=VIDEO_ID",
    //   videoLabel: "Watch their story",
    //   accent: "green",            // "green" or "blue"
    // },
];
