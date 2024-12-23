import { About, Post, Project } from './types';

export const experiences: About[] = [
  {
    duration: 'July 2020 - July 2024',
    organization: 'Doon Group of Institutions',
    role: 'Graduation in B.Tech with Computer science and Technologies.',
    description: ['Graduated with a Minor in Mathematics.'],
    logo: 'https://tse3.mm.bing.net/th?id=OIP.qfL-w2ofb9xyY4npcN887gHaHa&pid=Api&P=0&h=180',
    link: 'https://dooninstitute.in/',
    badges: ['Top Performer', 'Final Year Project'],
  },
  {
    duration: 'Apr 2018 - Jun 2020',
    organization: 'Holy Angel Senior Secondary School',
    role: 'Intermediate completed with Science Stream.',
    description: [],
    logo: 'https://holyangelschool.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-31-at-12.08-300x274.png',
    link: 'https://holyangelschool.org/',
  },
];

export const workExperience: About[] = [
  {
    duration: 'Aug 2023 - Present (12.5 months)',
    organization: 'Vyapardost',
    role: 'Junior Full Stack Web Developer',
    description: [
      'Played a key role in developing a digital procurement platform aimed at streamlining the procurement process for organizations.',
      'Built the frontend UI using Next.js and integrated it with a Nest.js backend, ensuring a seamless and intuitive user experience.',
      "Contributed to backend logic design, database management, and testing, ensuring the platform's stability and efficiency.",
      'Handled complex workflows and maintained data integrity across the system.',
      'Collaborated closely with mentors and team members to deliver a solution that automates requisition approvals, RFQ generation, and order management, significantly enhancing operational efficiency.',
    ],
    badges: [
      'NestJS',
      'Next.js',
      'MongoDB',
      'API',
      'UI/UX',
      'Redux',
      'Git',
      'GitHub',
      'Problem Solving',
    ],
    logo: '/vyapardost.png',
    link: 'https://www.vyapardost.com/',
  },
  {
    duration: 'June 2023 - Aug 2023 (3 months)',
    organization: 'Bixlash',
    role: 'Full Stack Developer',
    description: [
      'Worked in a service-based company that created websites for clients based on their requirements.',
      'Collaborated with clients to understand their needs and delivered custom solutions.',
    ],
    badges: [
      'Full Stack Development',
      'Client Collaboration',
      'Custom Solutions',
    ],
    logo: 'https://bixlash.com/wp-content/uploads/2024/08/logo-1280x389.png',
    link: 'https://bixlash.com/',
  },
];

export const projects: Project[] = [
  {
    title: 'Try Casuals',
    description:
      'Building a full Stack custom E-commerce using React typescript with api Integration  where customers can buy  products. Products and  customer details and cart details  are  stored in database. Customer  can  sign in or log in if the React typescript is used with tailwind CSS for   frontend   libraries used  are  Axios , formic   etc cart details , user details  , product details etc. are stored in backend in. Backend created in nest js with mongo db database.',
    skills: [
      'React JS',
      'TypeScript',
      'tailwind CSS',
      'Redux toolkit',
      'Formik',
      'yup validation',
      'Authentication',
      'Solid principles',
      'nest JS',
      'MongoDB',
      'Aggrigation',
      'razorpay',
      'Dependency Injection',
      "REST API's",
      'JWT',
      'Problem Solving',
    ],
    githubLink:
      'https://github.com/rkandwal300/E-Commerce-Typescript-Functional',
    image: '/trycasuals.png',
    link: 'https://my-easycart.netlify.app/products',
  },
  {
    title: 'X- todo',
    description:
      'Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes.',
    skills: ['React JS', 'TypeScript', 'tailwind CSS', 'Redux toolkit'],
    image: '/xtodo.png',
    githubLink: 'https://github.com/rkandwal300/TODO_List_Typescript',
    link: 'https://xtodo-list1.netlify.app/',
  },
  {
    title: 'Video Clone',
    description:
      'Building a custom Youtube clone using React javascript with Tailwind CSS using custom apis , apis used in categories search video play etc. To connect Youtube  api to  frontend which is created by react.js and tailwind css. You can search any videos and play.',
    skills: ['React JS', 'TypeScript', 'tailwind CSS', 'youtube APIs'],
    image: '/youtubeClone.png',
    githubLink: 'https://github.com/rkandwal300/youtube-clone',
    link: 'https://youtube-rkandwal300.netlify.app/',
  },
  {
    title: 'Portfolio v1',
    description:
      'Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes.',
    skills: ['React JS', 'TypeScript', 'tailwind CSS', 'Redux toolkit'],
    image: '/portfolio_v1.png',
    githubLink: 'https://github.com/rkandwal300/Portfolio',
    link: 'https://rahul-portfolio-react.netlify.app/',
  },
  {
    title: 'Movies Recommendation Application',
    description:
      'Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes.',
    skills: ['React JS', 'TypeScript', 'tailwind CSS', 'Redux toolkit'],
    githubLink: 'https://github.com/rkandwal300/My_TV_Show',
    image: '/my_tv_shows.png',
    link: 'https://zippy-horse-16dd7c.netlify.app/',
  },
];

export const posts: Post[] = [
  {
    id: 'post-title5',
    title: 'Try Casuals',
    description:
      'Building a full Stack custom E-commerce using React typescript with api Integration  where customers can buy  products. Products and  customer details and cart details  are  stored in database. Customer  can  sign in or log in if the React typescript is used with tailwind CSS for   frontend   libraries used  are  Axios , formic   etc cart details , user details  , product details etc. are stored in backend in. Backend created in nest js with mongo db database.',
    link: '/trycasuals.png',
    date: 'October 21, 2023',
  },
  {
    id: 'post-title4',
    title: 'X- todo',
    description:
      'Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes.',
    link: '/xtodo.png',
    date: 'September 21, 2024',
  },
  {
    id: 'post-title3',
    title: 'Video Clone',
    description:
      'Building a custom Youtube clone using React javascript with Tailwind CSS using custom apis , apis used in categories search video play etc. To connect Youtube  api to  frontend which is created by react.js and tailwind css. You can search any videos and play.',
    link: '/youtubeClone.png',
    date: 'September 11, 2024',
  },
  {
    id: 'post-title2',
    title: 'Portfolio v1',
    description:
      'Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes.',
    link: '/portfolio_v1.png',
    date: 'September 5, 2024',
  },
  {
    id: 'post-title1',
    title: 'Movies Recommendation Application',
    description:
      'Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes.',
    date: 'September 1, 2024',
    link: '/my_tv_shows.png',
  },
];
