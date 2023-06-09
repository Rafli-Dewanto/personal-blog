import { FC, ReactNode } from "react";
import styles from "./layout.module.css"
import utilStyles from '@/styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Rafli Dewanto';
export const siteTitle = 'Rafli\'s Blog';

interface ILayoutProps {
    children: ReactNode;
    home?: boolean 
}

const Layout: FC<ILayoutProps> = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile-2.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt="profile picture"
                        />
                        <h1 className={`${utilStyles.heading2Xl} bg-clip-text bg-gradient-to-r text-transparent from-[#F55C7A] to-[#F6BC66]`}>{name}</h1>
                    </>
                ) : (
                    null
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link className="underline-from-center bg-clip-text bg-gradient-to-r text-transparent from-[#F55C7A] to-[#F6BC66]" href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
};

export default Layout;
