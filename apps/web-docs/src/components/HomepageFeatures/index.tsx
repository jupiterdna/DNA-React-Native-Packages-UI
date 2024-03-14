import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "User Centric",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Prioritize the end-user experience in every aspect of application
        development. With a keen focus on user-centric design principles, these
        libraries empower developers to create intuitive, engaging, and
        accessible interfaces across platforms.
      </>
    ),
  },
  {
    title: "Customizable",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Emphasizes the flexibility and adaptability of your React Native control
        libraries, allowing developers to tailor the appearance and behavior of
        components to meet specific project requirements and design preferences.
      </>
    ),
  },
  {
    title: "Wide Vaiety of Controls",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extensive array of controls with our React Native library, offering a
        diverse selection to suit every need. From essential UI elements and
        advanced components such as charts and maps, and caters to a wide range
        of application requirements.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container py-8">
        <h2 className="text-center text-4xl">Why DNA React Native Packages?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
