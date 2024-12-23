import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../../../lib/data';
import { cn } from '../../../lib/utils';

export default function PostDetail() {
  const params = useParams();
  const singleBlog = posts.find((post) => post.id === params.blogId);
  return (
    <section className="flex flex-col gap-4 mt-8 pb-16 grow ">
      <Link
        to="/blog"
        className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-light"
      >
        <ArrowLeft size={16} />
        <span>back to log</span>
      </Link>
      <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
        <img
          alt={singleBlog?.title}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="object-cover"
          sizes="100vw"
          src={singleBlog?.link}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            color: 'transparent',
          }}
        />
      </div>
      <div className="flex flex-col">
        <h2 className={cn('font-calistoga', length ? 'text-2xl' : 'text-5xl')}>
          {singleBlog?.title}
        </h2>
        <p className="text-xs mt-1.5">{singleBlog?.date}</p>
        <p className="text-sm text-muted-foreground mt-4">
          {singleBlog?.description}
        </p>
      </div>
    </section>
  );
}
