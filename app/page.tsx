import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>homepage</h1>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Page;
