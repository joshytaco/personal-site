import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Josh Hooton',
  description: 'Personal site for Josh Hooton',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-8 flex flex-col lg:flex-row items-center divide-y lg:divide-x lg:divide-y-0 justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link
              href="/blog"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Blog
            </Link>
            <a
              href="https://github.com/joshytaco"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hootonjosh/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen bg-white text-black">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
