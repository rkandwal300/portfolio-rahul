import { ArrowLeft, SquareArrowOutUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../../../lib/data';
import { cn } from '../../../lib/utils';

export default function PostDetail() {
  const params = useParams();
  const singleBlog = posts.find((post) => post.id === params.blogId);
  return (
    <section className="flex flex-col gap-4 mt-8 pb-16 grow ">
      <div className="flex justify-between py-2">
        <Link
          to="/blog"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-light"
        >
          <ArrowLeft size={16} />
          <span>back to log</span>
        </Link>
        <Link
          to={singleBlog?.link ?? ''}
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-light"
        >
          <SquareArrowOutUpRight size={16} />
          <span>Open</span>
        </Link>
      </div>
      <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
        <div id="wrap">
          <iframe
            id="scaled-frame"
            title={singleBlog?.title}
            loading="lazy"
            className="object-cover"
            src={singleBlog?.link}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              transformOrigin: 'top left',
            }}
          />
        </div>
      </div>
      <div className="flex flex-col tracking-wider">
        <h2
          className={cn(
            'font-calistoga title',
            length ? 'text-2xl' : 'text-5xl'
          )}
        >
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
