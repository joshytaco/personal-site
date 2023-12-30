import Link from 'next/link';
import { draftMode } from 'next/headers';

import Date from '../date';
import CoverImage from './cover-image';
import MoreStories from './more-stories';

import { getAllPosts } from '@/lib/api';

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
    <section>
      <CoverImage title={title} slug={slug} url={coverImage.url} />
      <div className="flex w-full flex-col md:flex-row gap-8 lg:gap-x-8 p-6">
        <div className="flex flex-1 flex-col gap-4 justify-between">
          <h3 className="text-4xl font-bold leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="flex items-center">
            <p className="text-lg">{author.name}&nbsp;|&nbsp;</p>
            <div className="text-lg">
              <Date dateString={date} />
            </div>
          </div>
          <p className="text-lg leading-relaxed">{excerpt}</p>
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
  console.log(morePosts);

  return (
    <div className="container mx-auto px-5 my-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="font-bold text-5xl">Blog</h1>
          <p className="text-xl pr-10">
            This is a journal of my latest thoughts. I don't post regularly and
            I don't stick to any one topic. This is primarily for my own writing
            practice, so keep your expectations low.
          </p>
        </div>
        <div className="flex flex-1 border border-black shadow-2xl overflow-hidden">
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
        </div>
      </div>

      {morePosts.length > 1 && <MoreStories morePosts={morePosts} />}
    </div>
  );
}
