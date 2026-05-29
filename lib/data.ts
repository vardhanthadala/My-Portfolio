import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'vardhan.thadala23@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Vardhan, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/Vardhan',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/vardhanthadala' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/vardhanthadala' },
    { name: 'leetcode', url: 'https://leetcode.com/u/thadalavardhangoud/' },
    { name: 'geeksforgeeks', url: 'https://www.geeksforgeeks.org/profile/thadalavarzmr6?tab=activity' },
];

export const MY_STACK = {
    frontend: [
     
      
       
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
       
    ],

    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'FastAPI',
            icon: '/logo/fastapi.svg',
        },
        {
            name: 'REST APIs',
            icon: '/logo/api.svg',
        },
    ],

    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
    name: 'Vector DB',
    icon: '/logo/vector-db.svg',
},
    ],

   genai: [
    {
        name: 'HuggingFace',
        icon: '/logo/huggingface.svg',
    },
    {
        name: 'LangChain',
        icon: '/logo/langchain.svg',
    },
    {
        name: 'LangGraph',
        icon: '/logo/langgraph.svg',
    },
    {
        name: 'AI Agents',
        icon: '/logo/ai-agent.svg',
    },
    {
        name: 'Agentic AI',
        icon: '/logo/agentic-ai.svg',
    },
    {
        name: 'RAG Systems',
        icon: '/logo/rag.svg',
    },
    {
        name: 'AI Integrations',
        icon: '/logo/ai.svg',
    },
    {
        name: 'Prompt Engineering',
        icon: '/logo/prompt.svg',
    },
],

    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'Nyoraa',
    slug: 'nyoraa',
    techStack: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'Three.js',
      'Swiper.js',
      'jQuery',
      'Vercel',
    ],
    thumbnail: '/projects/thumbnail/nyoraa.jpg',
    longThumbnail: '/projects/long/nyoraa.jpg',
    images: [
      '/projects/images/nyoraa-1.png',
      '/projects/images/nyoraa-2.png',
      '/projects/images/nyoraa-3.png',
    ],
    liveUrl: 'https://nyoraa-2-0.vercel.app/',
    year: 2026,
    description: `
      Nyoraa is a premium branding and creative agency website focused on immersive storytelling, bold visual interactions, and smooth animations. The platform was designed to create a high-end digital experience with modern layouts, interactive sections, and visually engaging transitions. <br/><br/>

      Key Features:
      <ul>
        <li>🎨 Modern agency-style branding website with immersive layouts</li>
        <li>⚡ Smooth animations and transitions using GSAP & Framer Motion</li>
        <li>🖼️ Interactive galleries and animated visual sections</li>
        <li>📱 Fully responsive experience across all devices</li>
        <li>🌐 Optimized performance with Next.js and Vercel deployment</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Implemented advanced animations and scroll-based interactions using GSAP</li>
        <li>Integrated Three.js for interactive visual experiences</li>
        <li>Built reusable UI components with scalable architecture</li>
        <li>Optimized animations and rendering performance for smoother UX</li>
      </ul>
    `,
    role: `
      Full-Stack Developer & Designer <br/>
      Owned the complete development and creative implementation:
      <ul>
        <li>✅ Developed the frontend architecture using Next.js and React 19</li>
        <li>🎨 Designed immersive UI sections and interactive layouts</li>
        <li>⚡ Implemented smooth transitions and motion effects using GSAP & Framer Motion</li>
        <li>🧩 Integrated Three.js visual elements for premium interactions</li>
        <li>🚀 Deployed and optimized the application on Vercel</li>
      </ul>
    `,
  },

  {
    title: 'Welth',
    slug: 'welth',
    techStack: [
      'Next.js',
      'React 19',
      'Tailwind CSS',
      'Shadcn UI',
      'Supabase',
      'Prisma',
      'Clerk',
      'Inngest',
      'ArcJet',
      'Vercel',
    ],
    thumbnail: '/projects/thumbnail/welth.jpg',
    longThumbnail: '/projects/long/welth.jpg',
    images: [
      '/projects/images/welth-1.png',
      '/projects/images/welth-2.png',
      '/projects/images/welth-3.png',
    ],
    liveUrl: 'https://welth-red.vercel.app/',
    year: 2025,
    description: `
      Welth is an AI-powered personal finance management platform designed to help users track expenses, monitor budgets, and gain intelligent financial insights. The application combines automation, AI receipt scanning, recurring transaction handling, and data visualization into a secure and modern user experience. <br/><br/>

      Key Features:
      <ul>
        <li>🤖 AI-powered receipt scanning with automatic expense categorization</li>
        <li>📊 Real-time expense and income tracking dashboards</li>
        <li>📅 Automated recurring transactions using background jobs</li>
        <li>📧 AI-generated monthly financial summaries via email</li>
        <li>🔐 Secure APIs with bot protection and rate limiting</li>
        <li>📈 Interactive analytics and spending charts</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Integrated AI workflows for receipt analysis and insights</li>
        <li>Implemented secure authentication and session management using Clerk</li>
        <li>Built scalable backend architecture with Supabase and Prisma</li>
        <li>Configured background task automation using Inngest</li>
        <li>Secured APIs with ArcJet protection and rate limiting</li>
      </ul>
    `,
    role: `
      Full-Stack Developer <br/>
      Responsible for the end-to-end product development:
      <ul>
        <li>✅ Built frontend interfaces using Next.js, Tailwind CSS, and Shadcn UI</li>
        <li>🧠 Integrated AI-powered finance and receipt scanning features</li>
        <li>🔐 Implemented authentication and secure session handling with Clerk</li>
        <li>⚙️ Developed backend workflows with Supabase, Prisma, and Inngest</li>
        <li>📊 Created responsive dashboards and financial visualization components</li>
        <li>🚀 Managed deployment and optimization on Vercel</li>
      </ul>
    `,
  },

  {
    title: 'MEDIMEET',
    slug: 'medimeet',
    techStack: [
      'Next.js',
      'React.js',
      'Neon DB',
      'PostgreSQL',
      'Tailwind CSS',
      'Shadcn UI',
      'Vonage API',
      'Vercel',
    ],
    thumbnail: '/projects/thumbnail/medimeet.jpg',
    longThumbnail: '/projects/long/medimeet.jpg',
    images: [
      '/projects/images/medimeet-1.png',
      '/projects/images/medimeet-2.png',
      '/projects/images/medimeet-3.png',
    ],
    liveUrl: 'https://medimeet-self.vercel.app/',
    year: 2025,
    description: `
      MEDIMEET is a global doctor appointment and virtual consultation platform that enables patients to connect with healthcare professionals remotely. The application streamlines appointment booking, doctor availability management, video consultations, and administrative verification workflows in a modern and secure environment. <br/><br/>

      Key Features:
      <ul>
        <li>👨‍⚕️ Role-based dashboards for doctors and patients</li>
        <li>📅 Real-time appointment scheduling and availability management</li>
        <li>💳 Credit-based consultation booking system</li>
        <li>🎥 Integrated video consultations using Vonage API</li>
        <li>🛡️ Admin approval system for doctor verification</li>
        <li>📱 Fully responsive and accessible UI experience</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Implemented real-time booking and appointment workflows</li>
        <li>Integrated secure video consultation capabilities with Vonage API</li>
        <li>Built scalable cloud database architecture using Neon PostgreSQL</li>
        <li>Developed responsive UI components with Tailwind CSS and Shadcn UI</li>
        <li>Optimized application performance and deployment using Vercel</li>
      </ul>
    `,
    role: `
      Full-Stack Developer <br/>
      Managed complete application development and integrations:
      <ul>
        <li>✅ Built responsive frontend interfaces using Next.js and React</li>
        <li>🎨 Designed modern healthcare-focused UI systems</li>
        <li>📅 Developed dynamic appointment and scheduling workflows</li>
        <li>🎥 Integrated Vonage API for virtual consultations</li>
        <li>🗄️ Managed backend data handling with Neon PostgreSQL</li>
        <li>🚀 Configured deployment and application optimization on Vercel</li>
      </ul>
    `,
  },

  {
    title: 'Role-Based AI Chatbot',
    slug: 'role-based-ai-chatbot',
    techStack: [
      'FastAPI',
      'Streamlit',
      'LLaMA 3',
      'Ollama',
      'ChromaDB',
      'SentenceTransformers',
      'Python',
      'RAG',
    ],
    thumbnail: '/projects/thumbnail/role-based-chatbot.jpg',
    longThumbnail: '/projects/long/role-based-chatbot.jpg',
    images: [
      '/projects/images/role-based-chatbot-1.png',
      '/projects/images/role-based-chatbot-2.png',
      '/projects/images/role-based-chatbot-3.png',
    ],
    sourceCode: 'https://github.com/vardhanthadala/role_based_aichatbot',
    year: 2025,
    description: `
      A secure AI-powered internal chatbot system built using Retrieval-Augmented Generation (RAG) and Role-Based Access Control (RBAC). The platform enables organizations to provide department-specific information access while ensuring security, scalability, and contextual accuracy across teams like HR, Finance, Marketing, and Engineering. <br/><br/>

      Key Features:
      <ul>
        <li>🤖 LLaMA 3 powered conversational AI using Ollama</li>
        <li>🔐 Role-Based Access Control for department-level security</li>
        <li>📄 Context-aware retrieval using ChromaDB vector search</li>
        <li>💬 Interactive Streamlit chat interface with session persistence</li>
        <li>⚡ FastAPI backend for scalable API handling</li>
        <li>🧠 RAG architecture for accurate and contextual responses</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Implemented vector similarity search using ChromaDB</li>
        <li>Developed secure role-filtered retrieval pipelines</li>
        <li>Integrated LLaMA 3 locally using Ollama</li>
        <li>Built document embedding workflows with SentenceTransformers</li>
        <li>Created responsive Streamlit-based conversational interfaces</li>
      </ul>
    `,
    role: `
      AI & Backend Developer <br/>
      Led the architecture and implementation of the complete system:
      <ul>
        <li>✅ Designed and implemented RAG-based AI architecture</li>
        <li>🔐 Built secure role-based retrieval and filtering logic</li>
        <li>⚡ Developed backend APIs using FastAPI</li>
        <li>💬 Created interactive frontend interfaces using Streamlit</li>
        <li>🧠 Integrated LLaMA 3 and vector embedding workflows</li>
        <li>📄 Structured and embedded department-wise knowledge bases</li>
      </ul>
    `,
  },
];

export const MY_EXPERIENCE = [
    {
        title: 'Junior Full Stack Developer',
        company: 'Dexze',
        duration: 'Apr 2026 - Present',
    },
    {
        title: 'Full Stack Developer Intern (MERN)',
        company: 'HanviTec Solutions',
        duration: 'Nov 2025 - Mar 2026',
    },
    {
        title: 'Gen AI Intern',
        company: 'SyncAI',
        duration: 'Jun 2025 - Nov 2025',
    },
];
