import { Link } from 'react-router-dom';
import { Post } from '../../../lib/types';

export default function PostItem({ data }: { readonly data: Post }) {
  return (
    <li>
      <Link to={data.id}>
        <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
          <div className="max-w-md md:max-w-lg">
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
              {data.description}
            </p>
          </div>
          <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
            {data.date}
          </p>
        </div>
      </Link>
    </li>
  );
}
