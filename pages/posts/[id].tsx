import Layout from "@/components/layout";
import { GetStaticPropsContext } from 'next';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from "next/head";
import utilStyles from '@/styles/utils.module.css'
import formatDate from '@/utils/formatDate';

interface IPostData {
    id: string;
    title: string;
    date: Date;
    contentHtml: string;
    mdContent: string;
}

interface IPostProps {
    postData: IPostData
}

export default function Post({ postData }: IPostProps) {
    const formattedDate = formatDate(postData.date.toLocaleString());
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={`${utilStyles.headingXl} bg-clip-text bg-gradient-to-r text-transparent from-[#F55C7A] to-[#F6BC66]`}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <time>{formattedDate}</time>
                </div>
                <div className="mt-10 list-disc post-container" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { id } = context.params as IParams;
    const postData = await getPostData(id as string)
    return {
        props: {
            postData,
        },
    };
}

