import AboutItems, { About } from './AboutItems';

const experiences: About[] = [
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
    organization: 'Holy Anger Senior Secondary School',
    role: 'Intermediate completed with Science Stream.',
    description: [],
    logo: 'https://holyangelschool.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-31-at-12.08-300x274.png',
    link: 'https://holyangelschool.org/',
  },
];

export default function Education() {
  return (
    <div className="rounded-lg border">
      <ul className="ml-10 border-l">
        {experiences.map((experience, index) => (
          <AboutItems key={'A-' + index} data={experience} />
        ))}
      </ul>
    </div>
  );
}
