import Link from 'next/link';
import { draftMode } from 'next/headers';

import Date from '../date';
import CoverImage from './cover-image';
import Avatar from './avatar';
import MoreStories from './more-stories';

import { getAllPosts } from '@/lib/api';
import { CMS_NAME, CMS_URL } from '@/lib/constants';

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-start pt-16 pb-16 md:pb-12 gap-5">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog
      </h1>
    </section>
  );
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section className="mb-5">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="flex w-full flex-col md:flex-row gap-8 md:gap-x-16 lg:gap-x-8 mb-2">
        <div className="flex flex-1 flex-col gap-4 md:gap-8 justify-between">
          <h3 className="text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed">{excerpt}</p>
        </div>
        <div className="flex flex-1 flex-col gap-4 md:gap-8 justify-between">
          {author && <Avatar name={author.name} picture={author.picture} />}
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 1 && <MoreStories morePosts={morePosts} />}
    </div>
  );
}
