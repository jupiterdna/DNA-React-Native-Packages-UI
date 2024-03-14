import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import img from "@site/static/img/dark-logo.png";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-blue-400 dark:bg-gray-700 text-white">
      <div className="p-4 py-12">
        <div className="flex flex-row items-center gap-x-12 max-w-[1400px] justify-center mx-auto">
          <div className="bg-white w-[320px] h-[320px] p-6 shrink-0 justify-center flex items-center">
            <img src={img} alt="logo" />
          </div>
          <div>
            <h1 className="text-5xl">Cross Platform UI Controls</h1>
            <h2 className="text-3xl mb-8">DNA React Native UI Packages</h2>
            <p className="text-lg leading-12">
              a comprehensive library designed to provide developers with a
              versatile set of cross-platform UI controls for building robust
              applications using React Native framework. Whether you're
              targeting iOS or Android, this collection offers an array of
              customizable components to streamline your development process and
              enhance user experience.
            </p>
            <Link
              className="button button--secondary mt-8 button--lg !text-gray-600"
              to="/docs/getting-started/introduction"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
  // return (
  //   <header className={clsx("hero hero--primary", styles.heroBanner)}>
  //     <div className="container">
  //       <Heading as="h1" className="hero__title">
  //         {/* {siteConfig.title} */}
  //         Cross Platform
  //       </Heading>
  //       <p className="hero__subtitle">{siteConfig.tagline}</p>
  //       <div className={styles.buttons}>
  //         <Link
  //           className="button button--secondary button--lg"
  //           to="/docs/getting-started/introduction"
  //         >
  //           Get Started
  //         </Link>
  //       </div>
  //     </div>
  //   </header>
  // );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
