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
// MOBILE SECTION NAV — breadcrumbs on index.html (max-width: 900px)
// ==========================================================================
//
// Edit this list to change which sections appear in the sticky mobile bar.
//   id      must match a section id on the page (or "top" for home/hero)
//   label   short text shown in the breadcrumb pill
// --------------------------------------------------------------------------

window.SECTION_NAV = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "projects", label: "Projects" },
  { id: "impact", label: "Impact" },
  { id: "awards", label: "Awards" },
  { id: "get-involved", label: "Donate" },
  { id: "testimonials", label: "Voices" },
  { id: "faq", label: "FAQ" },
];

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
  intro:
    "Since 2020, InAmigos has partnered with local communities to address the root causes of poverty — with transparency, dignity, and collaboration at the centre of everything we do.",
  hook: "Purpose-led. People-first. Impact-driven.",
  pillars: [
    {
      id: "mission",
      label: "Mission",
      tagline: "What we do every day",
      body:
        "We commit to creating lasting social impact by addressing critical societal issues through a network of dedicated professionals and volunteers.",
      accent: "green",
      featured: true,
    },
    {
      id: "vision",
      label: "Vision",
      tagline: "Where we're heading",
      body:
        "A world where every person has access to opportunity, care, and hope — and no one is left behind.",
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
//   accent   optional    "green" or "blue" (default: "green")
//   featured optional    true — larger spotlight card (use for your top honour)
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
        detail:
            "Reached the finals at SPJIMR, a 40+ year old Tier-1 business school.",
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
    //   accent: "green",            // "green" or "blue"
    //   featured: false,           // true for a large spotlight card
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
  {
    q: "How can I volunteer with InAmigos?",
    a: "We welcome volunteers for teaching, animal care, plantation drives, relief work, and events. Reach out through the Contact Us section and our team will help you find the right fit.",
  },
  {
    q: "Do you accept donations other than money?",
    a: "Yes. Through our Seva programme we accept food, clothes, books, and daily essentials. Please contact us to arrange a drop-off or pick-up.",
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
//   avatar  optional    Photo path or URL. If omitted, initials are shown.
//   accent  optional    "green" or "blue" (default: "green").
// --------------------------------------------------------------------------

window.TESTIMONIALS = [
  {
    quote:
      "InAmigos gave my daughter the chance to go to school. Bachpanshala changed the future of our whole family.",
    name: "Sunita Devi",
    role: "Parent, Bachpanshala",
    accent: "green",
  },
  {
    quote:
      "During the lockdown, the Seva team brought food to our doorstep when we had nothing. I will never forget that kindness.",
    name: "Ramesh Kumar",
    role: "Beneficiary, Seva",
    accent: "blue",
  },
  {
    quote:
      "Volunteering with Prakriti taught me that small actions truly add up. We've planted thousands of trees together.",
    name: "Aarav Mehta",
    role: "Volunteer",
    accent: "green",
  },
  {
    quote:
      "I donate monthly because I can see exactly where my money goes. The transparency is what keeps me giving.",
    name: "Priya Sharma",
    role: "Monthly Donor",
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
  //   accent: "green",            // "green" or "blue"
  // },
];
