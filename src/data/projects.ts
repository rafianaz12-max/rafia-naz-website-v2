import { WebProject, MechanicalProject, Project } from "@/types";

export const webProjects: WebProject[] = [
{
  kind: "web",
  slug: "university-of-sargodha-ai",
  title: "University of Sargodha AI Assistant",
  shortDescription:
    "An intelligent AI powered assistant designed to help students quickly find accurate University of Sargodha information.",
  description:
    "University of Sargodha AI Assistant is an intelligent university information platform built to make academic information easier to access. The assistant helps students find answers related to admissions, programs, fee structures, university policies, and other institutional information through a conversational AI interface. The system combines structured university data, document-based knowledge retrieval, and AI-generated responses to provide a faster alternative to manually searching through lengthy prospectuses and websites.",
  category: "AI",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Google Gemini API",
    "Vercel",
  ],
  features: [
    "AI-powered conversational assistant for University of Sargodha information",
    "Document based knowledge system using university prospectus data",
    "Answers related to admissions, programs, fees, and university policies",
    "Intelligent search and contextual response generation",
    "Clean and responsive chatbot interface",
    "Deployed online for easy public access",
  ],
  developmentProcess: [
    "Collected and structured university information from official prospectuses and fee structure documents",
    "Processed large university documents into searchable knowledge chunks for efficient information retrieval",
    "Built a Next.js conversational interface focused on simple and fast student interaction",
    "Integrated AI capabilities to generate natural language answers based on relevant university information",
    "Optimized the application for deployment and public accessibility through Vercel",
  ],
  challenges: [
    "Processing large university prospectus documents containing hundreds of pages of information",
    "Ensuring AI responses remain relevant to official university information",
    "Handling API limitations and deployment challenges with AI related dependencies",
    "Making complex academic information easy for students to access through simple questions",
  ],
  solutions: [
    "Converted large documents into structured knowledge chunks to improve information retrieval",
    "Implemented local search and ranking mechanisms to identify the most relevant information before generating responses",
    "Designed fallback behavior for cases where information could not be confidently verified",
    "Created a simple chatbot interface so users can access complex university information without navigating multiple documents",
  ],
  conclusion:
    "University of Sargodha AI Assistant transforms lengthy institutional documents into an accessible conversational experience. The project demonstrates how AI and knowledge retrieval can improve student access to academic information while reducing the time spent searching through prospectuses and university resources.",
  githubUrl: "https://github.com/rafianaz12-max/rag_chatbot",
  liveUrl: "https://university-of-sargodha-ai.vercel.app/",
  bannerImage: "/images/projects/web/uos-chatbot.png",
  gallery: [
    "/images/projects/web/uos-chatbot.png",
  ],
  featured: true,
},
{
  kind: "web",
  slug: "flowlab-ai",
  title: "FlowLab AI",
  shortDescription:
    "An interactive virtual Fluid Mechanics laboratory designed to help engineering students understand experiments through digital simulation and AI.",
  description:
    "FlowLab AI is a virtual Fluid Mechanics laboratory built to make engineering experiments more accessible and interactive. The platform provides a digital environment where students can explore fundamental Fluid Mechanics concepts and laboratory experiments without relying entirely on physical equipment. It combines engineering education, interactive simulations, structured experiment workflows, and AI-assisted learning into a modern web-based laboratory experience.",
  category: "AI",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AI Integration",
    "Vercel",
  ],
  features: [
    "Virtual Fluid Mechanics laboratory environment",
    "Interactive engineering experiment modules",
    "Reynolds experiment learning module",
    "Bernoulli principle experiment",
    "Venturi meter experiment",
    "Pipe flow analysis",
    "Pump performance experiments",
    "Structured theory, procedure, and result-based learning experience",
    "Responsive interface designed for engineering students",
  ],
  developmentProcess: [
    "Identified the core Fluid Mechanics laboratory experiments that could be transformed into a digital learning experience",
    "Designed the application architecture around individual experiment modules for better scalability",
    "Created structured educational content combining theory, experimental procedure, calculations, and results",
    "Built a responsive web interface focused on making technical engineering concepts easier to explore",
    "Integrated AI-oriented learning concepts to create a more intelligent and interactive laboratory experience",
  ],
  challenges: [
    "Translating physical laboratory experiments into understandable digital interactions",
    "Presenting complex Fluid Mechanics concepts without making the interface overwhelming",
    "Balancing engineering accuracy with a beginner-friendly user experience",
    "Organizing multiple experiments within one consistent virtual laboratory system",
  ],
  solutions: [
    "Separated every experiment into clear learning stages including theory, apparatus, procedure, and results",
    "Designed reusable experiment components to maintain consistency across the laboratory",
    "Focused on intuitive navigation and visual learning instead of dense technical documentation",
    "Built the platform with a modular architecture so additional engineering experiments can be added in the future",
  ],
  conclusion:
    "FlowLab AI demonstrates how modern web technologies and AI can enhance engineering education by bringing traditional Fluid Mechanics laboratory experiments into a digital environment. The project creates a foundation for accessible, interactive, and scalable virtual engineering laboratories.",
  githubUrl: "https://github.com/rafianaz12-max/flowlab-ai",
  liveUrl: "https://flowlab-ai-beta.vercel.app/",
  bannerImage: "/images/projects/web/flowlab.png",
  gallery: [
    "/images/projects/web/flowlab.png",
  ],
  featured: true,
},
  {
    kind: "web",
    slug: "learn-ai-stack",
    title: "Learn AI Stack",
    shortDescription:
      "A modern AI learning platform introducing beginners to AI concepts, tools, and prompts.",
    description:
      "Learn AI Stack is a structured learning platform built for people who want to start their Artificial Intelligence journey without getting lost across scattered tutorials. It organizes programming, Git & GitHub, TypeScript, React, Next.js, deployment, AI tools, prompt engineering, and APIs into one clear, sequential roadmap.",
    category: "AI",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Structured beginner-to-professional AI learning roadmap",
      "Step-by-step installation guides for every tool",
      "Curated learning resources and useful commands",
      "Clean, responsive, distraction-free reading interface",
    ],
    developmentProcess: [
      "Mapped out the full AI learning journey — from programming fundamentals to prompt engineering — before writing any UI",
      "Built the roadmap as structured content data, decoupled from the presentation layer",
      "Implemented a responsive Next.js layout with clear navigation between About, Roadmap, and Installation sections",
    ],
    challenges: [
      "Condensing a very broad subject (AI + full-stack fundamentals) into a roadmap that doesn't overwhelm beginners",
      "Keeping installation instructions accurate across different tools and platforms",
    ],
    solutions: [
      "Broke the roadmap into clearly scoped stages so learners only see what's relevant to their current step",
      "Wrote installation guides as reusable content blocks that can be updated independently of the UI",
    ],
    conclusion:
      "Learn AI Stack turned a personal struggle — figuring out where to start with AI — into a resource that gives other beginners a clear, one-page roadmap instead of dozens of scattered tabs.",
    githubUrl: "https://github.com/rafianaz12-max/ai",
    liveUrl: "https://learn-ai-stack-rosy.vercel.app/",
    bannerImage: "/images/projects/web/learn-ai-stack.png",
    gallery: ["/images/projects/web/learn-ai-stack.png"],
    featured: true,
  },
  {
    kind: "web",
    slug: "launchcraft-lite",
    title: "LaunchCraft Lite",
    shortDescription:
      "A landing page generator that exports production-ready Next.js code for startups.",
    description:
      "LaunchCraft Lite lets founders enter their startup details, pick an industry, and customize a theme to instantly generate a polished startup landing page — then export it as production-ready Next.js code instead of a locked-in template.",
    category: "Web App",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Guided generator flow: startup details → industry → theme",
      "Live preview before export",
      "Exports clean, production-ready Next.js code",
      "Reusable, themeable UI component set",
    ],
    developmentProcess: [
      "Designed a component library of landing-page sections (hero, features, CTA) that could be recombined per theme",
      "Built a generator form that maps user input directly onto the component props",
      "Added a live preview pane so changes reflect instantly before export",
    ],
    challenges: [
      "Keeping generated code clean and readable rather than a tangle of conditional JSX",
      "Designing a theming system flexible enough for multiple industries without becoming generic",
    ],
    solutions: [
      "Separated content (from the generator form) from layout (fixed, well-structured components), so output code stays readable",
      "Used a small set of intentional design tokens per theme instead of unlimited customization",
    ],
    conclusion:
      "LaunchCraft Lite reflects how I think about frontend tooling: give people a fast starting point, but hand them real, ownable code — not a black box.",
    githubUrl: "https://github.com/rafianaz12-max/launchcraft-lite",
    liveUrl: "https://launchcraft-lite.vercel.app/",
    bannerImage: "/images/projects/web/launchcraft-lite.png",
    gallery: ["/images/projects/web/launchcraft-lite.png"],
    featured: true,
  },
  {
    kind: "web",
    slug: "earth-dashboard",
    title: "Earth Dashboard",
    shortDescription:
      "An interactive dashboard exploring every country's population, flags, and statistics.",
    description:
      "Earth Dashboard is an interactive country explorer built on the REST Countries API, presenting population, capitals, languages, currencies, and cultural information for every country in a clean, searchable, sortable interface.",
    category: "Dashboard",
    technologies: ["Next.js", "TypeScript", "REST Countries API", "Tailwind CSS"],
    features: [
      "Live global statistics: total countries, population, continents",
      "Search by name, capital, or region",
      "Sort A–Z, Z–A, or by population (high/low)",
      "Filter by continent and other criteria",
    ],
    developmentProcess: [
      "Integrated the REST Countries API and normalized inconsistent country data into a single shape",
      "Built client-side search, sort, and filter logic optimized to stay responsive with 250 country records",
      "Designed a card-based grid layout that scales from mobile to desktop",
    ],
    challenges: [
      "Handling inconsistent or missing fields across 250 countries' worth of API data",
      "Keeping search and sort fast without introducing lag on lower-end devices",
    ],
    solutions: [
      "Wrote defensive data-normalization utilities so missing fields degrade gracefully instead of breaking the UI",
      "Debounced search input and memoized sorted/filtered results to keep interactions smooth",
    ],
    conclusion:
      "Earth Dashboard was a practical exercise in taming a large, messy real-world API into something genuinely pleasant to browse.",
    githubUrl: "https://github.com/rafianaz12-max/earth-dashboard",
    liveUrl: "https://earth-dashboard-plum.vercel.app/",
    bannerImage: "/images/projects/web/earth-dashboard.png",
    gallery: ["/images/projects/web/earth-dashboard.png"],
    featured: true,
  },
  {
    kind: "web",
    slug: "mechanical-engineering-ai-solutions",
    title: "Mechanical Engineering with AI Solutions",
    shortDescription:
      "An AI-powered platform giving mechanical engineering students and professionals guidance and tools.",
    description:
      "This platform explores how Artificial Intelligence is transforming mechanical engineering — enabling engineers to analyze machine data, predict failures before they occur, optimize maintenance schedules, and improve energy efficiency instead of relying solely on traditional inspection.",
    category: "AI",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    features: [
      "Engineering learning resources organized by topic",
      "AI-assisted guidance for common engineering problems",
      "User-friendly dashboard layout",
      "Fully responsive, modern UI/UX",
    ],
    developmentProcess: [
      "Researched real predictive-maintenance and AI-in-engineering use cases as the content foundation",
      "Structured the site around Problem → Objectives → AI Solution → Workflow → Advantages/Disadvantages",
      "Built a component-driven dashboard layout with a sticky section navigator",
    ],
    challenges: [
      "Explaining AI concepts to an engineering audience without oversimplifying or overusing jargon",
      "Presenting both advantages and disadvantages honestly rather than one-sidedly",
    ],
    solutions: [
      "Grounded every AI concept in a concrete mechanical engineering scenario (e.g. predicting bearing failure from vibration data)",
      "Dedicated an explicit 'Disadvantages' section so the platform reads as balanced, not promotional",
    ],
    conclusion:
      "This project is the clearest expression of my own path: using AI not to replace engineering judgment, but to extend it.",
    githubUrl: "https://github.com/rafianaz12-max/ai-solution",
    liveUrl: "https://ai-solution-xi.vercel.app/",
    bannerImage: "/images/projects/web/mech-ai-solutions.png",
    gallery: ["/images/projects/web/mech-ai-solutions.png"],
    featured: true,
  },
  {
    kind: "web",
    slug: "what-is-ai",
    title: "What is AI?",
    shortDescription:
      "An educational site tracing AI's history, layers, present-day use, and future — with an honest look at its limits.",
    description:
      "A field-notes-style educational website that traces Artificial Intelligence from its origins to the horizon: what it's built out of layer by layer, where it already lives in daily life, where it's headed next, and an honest account of what it still gets wrong.",
    category: "AI",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    features: [
      "AI history and evolution timeline",
      "Layer-by-layer breakdown of how AI systems are built",
      "Real-world present-day applications",
      "Balanced pros & cons section",
    ],
    developmentProcess: [
      "Outlined the narrative arc first — Background → History → Layers → Present → Future → Pros & Cons — before building any component",
      "Built each section as an independently scrollable, linkable part of a single long-form page",
      "Focused typography and spacing on long-form readability rather than dense dashboard density",
    ],
    challenges: [
      "Covering a huge topic (all of AI) without the page becoming either shallow or overwhelming",
      "Designing a long-form layout that still feels premium, not like a plain blog post",
    ],
    solutions: [
      "Used a strict 'origin to horizon' narrative structure to keep scope disciplined section by section",
      "Applied consistent typographic hierarchy and generous whitespace to make a long page feel curated, not cluttered",
    ],
    conclusion:
      "Writing 'What is AI?' clarified my own understanding of the field — the best way to learn a subject is to try explaining it clearly to someone else.",
    githubUrl: "https://github.com/rafianaz12-max/projec-2",
    liveUrl: "https://projec-2.vercel.app/",
    bannerImage: "/images/projects/web/what-is-ai.png",
    gallery: ["/images/projects/web/what-is-ai.png"],
    featured: false,
  },
];

export const mechanicalProjects: MechanicalProject[] = [
  {
    kind: "mechanical",
    slug: "pc-controlled-robotic-arm",
    title: "PC Controlled Robotic Arm",
    shortDescription:
      "A 4-DOF robotic arm controlled through a GUI, performing precise pick-and-place operations.",
    description:
      "A four-degree of freedom robotic arm designed using Arduino Uno and SG90 servo motors. The system is controlled through a graphical user interface and performs precise pick-and-place operations while demonstrating basic robotic automation concepts.",
    category: "Robotics",
    toolsUsed: [
      "Arduino Uno",
      "SG90 Servo Motors",
      "Servo Shield",
      "Embedded Programming",
      "GUI Control Software",
    ],
    objectives: [
      "Design a 4-DOF robotic arm capable of controlled, repeatable motion",
      "Enable precise pick-and-place operation via real-time PC control",
      "Demonstrate core principles of robotic automation on accessible hardware",
    ],
    methodology: [
      "Designed the mechanical linkage for 4 degrees of freedom (base rotation, shoulder, elbow, gripper)",
      "Mounted SG90 servo motors at each joint, driven through a servo shield for stable multi-channel control",
      "Programmed the Arduino Uno to interpret serial commands from a PC-based GUI and translate them into servo angles",
      "Tuned servo response and joint limits through iterative testing to ensure smooth, controlled movement",
    ],
    workingPrinciple:
      "The GUI sends positional commands over a serial connection to the Arduino Uno, which converts each command into PWM signals for the corresponding SG90 servo motor. Each of the 4 joints responds independently, allowing coordinated arm movement for pick-and-place tasks while the gripper servo handles object grasping and release.",
    specifications: [
      { label: "Degrees of Freedom", value: "4 (Base, Shoulder, Elbow, Gripper)" },
      { label: "Microcontroller", value: "Arduino Uno" },
      { label: "Actuators", value: "SG90 Micro Servo Motors" },
      { label: "Control Interface", value: "PC-based GUI over serial communication" },
    ],
    outcomes: [
      "Achieved smooth, repeatable pick-and-place motion across all 4 joints",
      "Validated real-time PC-to-microcontroller control via serial communication",
      "Built a reusable foundation for more advanced robotic automation projects",
    ],
    conclusion:
      "This project translated robotic automation theory into a working, controllable physical system — reinforcing how embedded control and mechanical design have to be tuned together, not separately.",
    bannerImage: "/images/projects/mechanical/robotic-arm.png",
    gallery: ["/images/projects/mechanical/robotic-arm.png"],
    featured: true,
  },
  {
    kind: "mechanical",
    slug: "temperature-data-logger",
    title: "4-Channel Temperature Data Logger",
    shortDescription:
      "A 4-channel thermocouple-based temperature monitoring and data logging system.",
    description:
      "A temperature monitoring system capable of recording data from four independent channels using K-Type thermocouples. The project demonstrates accurate temperature acquisition, monitoring, and data logging for engineering applications.",
    category: "Instrumentation",
    toolsUsed: [
      "K-Type Thermocouples",
      "Digital Multimeter",
      "Arduino",
      "Data Logging Software",
    ],
    objectives: [
      "Acquire accurate temperature readings from four independent measurement points simultaneously",
      "Log temperature data over time for trend analysis",
      "Validate thermocouple readings against a calibrated digital multimeter",
    ],
    methodology: [
      "Connected four K-Type thermocouples to independent measurement channels",
      "Used an Arduino-based acquisition circuit to sample each channel at a fixed interval",
      "Cross-validated thermocouple output against digital multimeter readings for accuracy",
      "Logged timestamped readings from all four channels for later analysis",
    ],
    workingPrinciple:
      "Each K-Type thermocouple generates a small voltage proportional to the temperature difference between its measurement junction and a reference junction. The Arduino samples this voltage across all four channels in sequence, converts it to a temperature value, and logs each reading with a timestamp for trend analysis.",
    specifications: [
      { label: "Channels", value: "4 independent thermocouple inputs" },
      { label: "Sensor Type", value: "K-Type Thermocouple" },
      { label: "Acquisition", value: "Arduino-based sampling" },
      { label: "Validation", value: "Cross-checked with digital multimeter" },
    ],
    outcomes: [
      "Successfully logged synchronized temperature data across 4 channels",
      "Confirmed measurement accuracy against multimeter reference readings",
      "Produced a reusable data-logging framework applicable to other sensor types",
    ],
    conclusion:
      "Building this logger reinforced how much of good instrumentation is about validation — a reading is only useful once you've checked it against a trusted reference.",
    bannerImage: "/images/projects/mechanical/temp-data-logger.jpg",
    gallery: ["/images/projects/mechanical/temp-data-logger.jpg"],
    featured: false,
  },
];

export const allProjects: Project[] = [...webProjects, ...mechanicalProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getFeaturedWebProjects(): WebProject[] {
  return webProjects.filter((project) => project.featured);
}

export const webProjectCategories = ["All", "AI", "Web App", "Dashboard"] as const;
