import utilStyles from "@/styles/utils.module.css";
import { Inter } from 'next/font/google'
import Layout, { siteTitle } from '@/components/layout'
import Head from 'next/head'
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import formatDate from "@/utils/formatDate";

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  allPostsData: Array<IPostData>;
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Rafli. I’m a Backend Developer and a Computer Science Student.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem}`} key={id}>
              <Link className="underline-from-center hover:no-underline bg-clip-text bg-gradient-to-r text-transparent from-[#F55C7A] to-[#F6BC66]" href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {formatDate(date)}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData: IPostData[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}