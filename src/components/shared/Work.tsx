import { workExperience } from '../../lib/data';
import AboutItems from './AboutItems';

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
