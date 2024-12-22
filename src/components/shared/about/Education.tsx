import { experiences } from '../../../lib/data';
import AboutItems from './AboutItems';

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
