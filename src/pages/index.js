import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className={styles.background}>
        <div className="container">
          <div className={styles.title}>
            {siteConfig.title}
          </div>
          <p className={styles.bigp}>{siteConfig.tagline}</p>
          <div className={styles.buttons}></div>
          <br/>
          <p className={styles.p}> Hello! My name is Ealynn Hsu and this is my UI/UX portfolio. I'm a current fourth-year computer science and piano performance major.
            I've been passionate about the arts ever since I was a child, dabbling in everything from piano to violin, to theater and ballet,
            and of course, traditional art. Starting in high school, I thought a way I could explore my love of art and technology was through
            interface design. I recommend checking out some of the links above to learn more about what I've done thus far and projects I want
            to explore in the future. Thanks for visiting!</p>
          <Link
            className="button button--secondary button--lg"
            to="/blog/affordances_and_signifiers_1"
          >
            My Blog Posts
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Ealynn's UI Portfolio"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
