export interface Service {
  id: string;
  number: string;
  title: string;
  hook: string;
  intro: string;
  items: string[];
  exploreLabel: string;
}

export const services: Service[] = [
  {
    id: "service-strategic",
    number: "01",
    title: "Strategic Communications",
    hook: "Start with the bigger picture.",
    intro:
      "We connect communication to organisational objectives, audience needs and the outcomes that matter.",
    items: [
      "Corporate communication strategy",
      "Communication audits",
      "Stakeholder communication",
      "Institutional positioning",
      "Reputation management",
      "Strategic messaging",
      "Communication campaigns",
      "Crisis and issues communication",
    ],
    exploreLabel: "Explore Strategic Communications →",
  },
  {
    id: "service-pr",
    number: "02",
    title: "Public Relations & Media Relations",
    hook: "Build credibility. Shape the story.",
    intro:
      "We help organisations develop meaningful relationships with media, stakeholders and the public — and communicate with confidence when attention matters.",
    items: [
      "Public relations strategy",
      "Media relations and pitching",
      "Press releases and media statements",
      "Press conferences",
      "Interview preparation",
      "Thought leadership",
      "Executive profiling",
      "Reputation management",
      "Media monitoring and analysis",
    ],
    exploreLabel: "Explore PR & Media Relations →",
  },
  {
    id: "service-marketing",
    number: "03",
    title: "Marketing & Brand Communications",
    hook: "Make your value clear.",
    intro:
      "We help organisations articulate what they stand for and communicate it consistently across the channels where their audiences pay attention.",
    items: [
      "Brand strategy",
      "Integrated marketing communications",
      "Campaign development",
      "Content strategy",
      "Digital communications",
      "Social media strategy",
      "Corporate storytelling",
      "Audience engagement",
      "Email and digital marketing",
    ],
    exploreLabel: "Explore Marketing & Brand Communications →",
  },
  {
    id: "service-development",
    number: "04",
    title: "Development & Public Interest Communications",
    hook: "Make complex issues easier to understand — and easier to engage with.",
    intro:
      "This is communication for policies, programmes, communities and issues that affect the public. We translate development and social issues into communication that supports understanding, participation, informed decision-making and accountability.",
    items: [
      "Governance and public policy communication",
      "Behaviour change communication",
      "Civic engagement",
      "Development storytelling",
      "SDG and sustainable development communication",
      "Public education",
      "Social impact campaigns",
      "Community engagement",
      "Policy communication",
      "NGO and CSO communications",
    ],
    exploreLabel: "Explore Development Communications →",
  },
  {
    id: "service-events",
    number: "05",
    title: "Events & Experiential Communications",
    hook: "Make the event part of a bigger story.",
    intro:
      "An event shouldn't begin when guests arrive or end when they leave. We help organisations build the communication around an event — from positioning and publicity to engagement, coverage and post-event storytelling.",
    items: [
      "Event communication strategy",
      "Event branding",
      "Media and publicity",
      "Speaker and stakeholder profiling",
      "Sponsorship communications",
      "Digital campaigns",
      "Live event coverage",
      "Post-event communications",
      "Impact storytelling",
      "Event reports and documentation",
    ],
    exploreLabel: "Explore Events & Experiential Communications →",
  },
  {
    id: "service-content",
    number: "06",
    title: "Content & Media Production",
    hook: "Give the message something people can see, hear and remember.",
    intro:
      "We develop content that carries strategy into the real world — across digital platforms, media and other channels where audiences engage.",
    items: [
      "Corporate storytelling",
      "Video content",
      "Photography",
      "Social media content",
      "Articles and opinion pieces",
      "Interviews",
      "Podcasts",
      "Campaign creatives",
      "Educational content",
      "Documentary-style storytelling",
    ],
    exploreLabel: "Explore Content & Media Production →",
  },
];

export interface ProcessStep {
  step: string;
  label: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    label: "Understand",
    title: "UNDERSTAND",
    desc: "We examine the organisation, the issue, the audience and the environment surrounding the communication.",
  },
  {
    step: "2",
    label: "Clarify",
    title: "CLARIFY",
    desc: "We identify what needs to be understood and turn complexity into a message people can grasp.",
  },
  {
    step: "3",
    label: "Strategise",
    title: "STRATEGISE",
    desc: "We develop an approach aligned with organisational objectives — not simply the latest communication trend.",
  },
  {
    step: "4",
    label: "Engage",
    title: "ENGAGE",
    desc: "We connect the message with the audiences and stakeholders who matter to the outcome.",
  },
  {
    step: "5",
    label: "Measure",
    title: "MEASURE",
    desc: "We assess performance, learning and impact so that communication becomes more effective over time.",
  },
];

export const values = [
  {
    title: "STRATEGIC THINKING",
    desc: "We connect communication to the organisation's larger objectives.",
  },
  {
    title: "AUDIENCE UNDERSTANDING",
    desc: "We build around people, their needs, perceptions and behaviour — not assumptions.",
  },
  {
    title: "MEDIA INTELLIGENCE",
    desc: "We understand how stories move between traditional media, digital platforms and public conversations.",
  },
  {
    title: "PUBLIC INTEREST PERSPECTIVE",
    desc: "We consider trust, accountability, inclusion and public value alongside visibility.",
  },
  {
    title: "CREATIVE EXECUTION",
    desc: "We turn strategy into stories, campaigns, content and experiences that people can engage with.",
  },
];

export const sectors = [
  {
    title: "PUBLIC & DEVELOPMENT",
    items: [
      "Government institutions and MDAs",
      "NGOs and CSOs",
      "Development organisations",
      "Public-interest initiatives",
    ],
  },
  {
    title: "BUSINESS & CORPORATE",
    items: [
      "Corporate organisations",
      "Financial institutions",
      "Real estate companies",
      "Energy companies",
    ],
  },
  {
    title: "INNOVATION & INSTITUTIONS",
    items: [
      "Startups and technology companies",
      "Educational institutions",
      "Professional associations",
      "Social enterprises",
    ],
  },
  {
    title: "EVENTS & ENGAGEMENT",
    items: [
      "Events and conference organisers",
      "Public-facing initiatives",
      "Stakeholder-led programmes",
    ],
  },
];

export const tags = [
  "Governance",
  "Development",
  "Business",
  "Innovation",
  "Technology",
  "Sustainability",
  "Public Policy",
  "Social Impact",
  "Civic Engagement",
  "Behaviour Change",
];
