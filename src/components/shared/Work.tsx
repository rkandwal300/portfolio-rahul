import AboutItems, { About } from './AboutItems';

const workExperience: About[] = [
  {
    duration: 'Aug 2023 - Present (12.5 months)',
    organization: 'Vyapardost',
    role: 'Full Stack Web Intern',
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
    duration: 'Apr 2023 - Aug 2023 (5 months)',
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
export default function Work() {
  return (
    <div className="rounded-lg border">
      <ul className="ml-10 border-l">
        {workExperience.map((experience, index) => (
          <AboutItems key={'w-' + index} data={experience} />
        ))}
      </ul>
    </div>
  );
}
