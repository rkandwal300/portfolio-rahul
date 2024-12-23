import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../../../lib/data';
import { cn } from '../../../lib/utils';
import { Separator } from '../../ui/separator';
import PostItem from './PostItem';

export default function PostsList({ length }: { readonly length?: number }) {
  return (
    <section className="flex flex-col gap-8 py-6">
      <div className="flex justify-between items-center">
        <h2 className={cn('font-calistoga', length ? 'text-2xl' : 'text-5xl')}>
          recent posts
        </h2>
        <Link
          to="/blog"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-light"
        >
          <span>view more</span>
          <ArrowRight size={16} />
        </Link>
      </div>
      <ul className="flex flex-col border rounded-xl">
        {posts.slice(0, length ?? posts.length).map((post, index) => (
          <>
            <PostItem key={post.id + index} data={post} />
            {(length ?? posts.length) - 1 > index && (
              <Separator className="my-4 border w-full" />
            )}
          </>
        ))}
      </ul>
    </section>
  );
}
