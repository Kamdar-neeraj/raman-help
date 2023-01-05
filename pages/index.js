import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import About from "./about";
import Link from "next/link";
import Login from "./login";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <div>
          <Image
            src="/images/sidebar-1.jpg"
            width={200}
            height={300}
            alt="image"
          />
          <ul>
            <li>
              <Link href={{ pathname: "/login" }}>login</Link>
            </li>
            <li>
              <Link href={{ pathname: "/about" }}>about</Link>
            </li>
            <li>
              <Link href={{ pathname: "/firstPost" }}>FirstPost</Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/blog/[slug]",
                  query: { slug: "123" },
                }}
              >
                My Blog Post
              </Link>
            </li>
          </ul>

          <div>
            {" "}
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/post/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
