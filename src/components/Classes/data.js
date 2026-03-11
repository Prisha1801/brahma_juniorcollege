// src/pages/Classes/data.js

// ─── Class IXth & Xth ─────────────────────────────────────────────────────────
export const nineTenData = {
  sidebarTitle: "Class IXth & Xth",
  heroKey: "nineTenHero",

  overview: {
    title: "Overview",
    heading: "Public School (Class 9th & 10th)",
    paragraphs: [
      "Brahma Valley Public School, a residential English-medium institution, is dedicated to building a strong foundation for students in Class 9 and 10. Our focus is on academic excellence, discipline, and holistic development, preparing students for board examinations and future academic success.",
      "With experienced faculty, modern classrooms, smart teaching tools, and a nurturing environment, we help students grow into confident and responsible individuals. Equal importance is given to academics, extracurricular activities, sports, and moral values, ensuring the overall growth of each child.",
    ],
    // intro & bullets: not used for this class
    image: null,
    imageAlt: "Overview",
  },

  coordinatorDesk: {
    title: "Coordinator Desk",
    coordinator: {
      name: "Mrs. Sunita S. Bhosale",
      designation: "Co - Ordinator",
      message: null, // null → card layout (image + name + designation)
      image: null,
    },
  },

  visionMission: {
    title: "Vision & Mission",
    // Use `classes` array for per-class headers (IXth/Xth style)
    classes: [
      {
        className: "Class IX",
        vision: [
          "To build a strong foundation of knowledge, discipline, and values for lifelong learning.",
          "To nurture curiosity and creativity in young minds.",
        ],
        mission: [
          "To provide quality education with equal focus on academics and character-building.",
          "To encourage participation in extracurricular and co-curricular activities.",
          "To develop self-confidence, respect, and responsibility among students.",
        ],
      },
      {
        className: "Class X",
        vision: [
          "To prepare students for board examinations with confidence and competence.",
          "To shape responsible individuals who value ethics and social responsibility.",
        ],
        mission: [
          "To strengthen academic foundations through structured learning and mentoring.",
          "To instil problem-solving, analytical thinking, and effective study habits.",
          "To guide students towards choosing suitable career paths after SSC.",
        ],
      },
    ],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Prof. Sunita S. Bhosale",  designation: null, image: null },
      { name: "Prof. Rushikesh S. Kannor", designation: null, image: null },
      { name: "Prof. Shital D. Mahajan",  designation: null, image: null },
      { name: "Prof. Puja R. Harendra",   designation: null, image: null },
      { name: "Prof. Aditi S. Thomare",   designation: null, image: null },
    ],
  },

  // No stream key → Stream tab will NOT appear in sidebar
};


// ─── Class XIth ───────────────────────────────────────────────────────────────
export const elevenData = {
  sidebarTitle: "Class XIth",
  heroKey: "elevenHero",

  overview: {
    title: "Overview",
    // intro + bullets layout (no heading)
    intro: "At Brahma Valley Junior College, Class 11 marks the beginning of higher secondary education, where students step into a world of specialized learning in Commerce and Science streams. Our focus is on providing:",
    bullets: [
      "A strong academic foundation in core subjects.",
      "Exposure to practical learning through labs, projects, and field activities.",
      "Guidance in identifying career goals and interests at an early stage.",
      "A balanced approach combining academics with extracurricular activities to ensure all-round development.",
    ],
    image: null,
    imageAlt: "Overview",
  },

  coordinatorDesk: {
    title: "Coordinator Desk",
    coordinator: {
      name: "Prof. Neha P. Ahire",
      designation: "Co - Ordinator",
      message: null, // null → card layout
      image: null,
    },
  },

  visionMission: {
    title: "Vision & Mission",
    // Use flat vision/mission (no per-class headers — XIth/XIIth style)
    vision: [
      "To guide students into advanced learning aligned with their chosen stream (Science, Commerce, Arts).",
      "To foster leadership, innovation, and independent thinking.",
    ],
    mission: [
      "To provide subject-focused learning with practical exposure.",
      "To build critical thinking, research, and analytical abilities.",
      "To encourage adaptability, teamwork, and participation in academic and cultural activities.",
    ],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Prof. Sujata A. Bhamare",     designation: "Lecturer", image: null },
      { name: "Prof. Sherya V. Deore",        designation: "Lecturer", image: null },
      { name: "Prof. Shital D. Mahajan",      designation: "Lecturer", image: null },
      { name: "Prof. Pallavi B. Suryavanshi", designation: "Lecturer", image: null },
    ],
  },

  stream: {
    title: "Stream",
    // groupLabel: null → no label shown above buttons
    groupLabel: null,
    streams: [
      { label: "Commerce", link: "/classes/eleven/commerce" },
      { label: "Science",  link: "/classes/eleven/science"  },
    ],
  },
};


// ─── Class XIIth ──────────────────────────────────────────────────────────────
export const twelveData = {
  sidebarTitle: "Class XIIth",
  heroKey: "twelveHero",

  overview: {
    title: "Overview",
    // intro + bullets + closing paragraph layout
    intro: "Class 12 is the crucial stage of preparation for higher studies and competitive exams. At Brahma Valley, we ensure students receive the right blend of advanced subject knowledge and exam-oriented guidance through:",
    bullets: [
      "Rigorous academic training aligned with board examinations.",
      "Special sessions for competitive exam preparation (CET, NEET, JEE, CA Foundation, etc.).",
      "Access to well-equipped laboratories, digital classrooms, and a rich library.",
      "Continuous mentoring and counselling to support students in making the right career choices.",
    ],
    closingParagraph: "With dedicated faculty and a student-focused approach, we empower learners to step confidently into their chosen fields of higher education and beyond.",
    image: null,
    imageAlt: "Overview",
  },

  coordinatorDesk: {
    title: "Coordinator Desk",
    coordinator: {
      name: "Prof. Dilip M. Shinde",
      designation: "Co - Ordinator",
      message: null, // null → card layout
      image: null,
    },
  },

  visionMission: {
    title: "Vision & Mission",
    vision: [
      "To prepare students for higher education, professional success, and global challenges.",
      "To empower students to become confident, ethical, and socially responsible young adults.",
    ],
    mission: [
      "To equip students with in-depth academic knowledge for board exams and competitive exams (NEET, JEE, CET, etc.).",
      "To develop leadership qualities and decision-making skills.",
      "To prepare students for a smooth transition into universities, professional courses, or careers.",
    ],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Prof. Sujata A. Bhamare",     designation: "Lecturer", image: null },
      { name: "Prof. Sherya V. Deore",        designation: "Lecturer", image: null },
      { name: "Prof. Shital D. Mahajan",      designation: "Lecturer", image: null },
      { name: "Prof. Pallavi B. Suryavanshi", designation: "Lecturer", image: null },
    ],
  },

  stream: {
    title: "Stream",
    groupLabel: null,
    streams: [
      { label: "Commerce", link: "/classes/twelve/commerce" },
      { label: "Science",  link: "/classes/twelve/science"  },
    ],
  },
};