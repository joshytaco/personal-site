import Link from 'next/link';

const Page = () => {
  return (
    <div className="container mx-auto px-5">
      <section className="flex-col md:flex-row flex items-center md:justify-between pt-16 pb-16 md:pb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          josh
        </h1>
        <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A statically generated site using{' '}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>
          .
        </h2>
      </section>
    </div>
  );
};

export default Page;
