import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Our Mission",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Our mission is to give computer science students realistic software
        development experience, while supporting open-source projects and
        helping researchers build the tools they need to achieve their goals.
      </>
    ),
  },
  {
    title: "Our Projects",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        We are currently accepting project requests. You can submit your request
        via this{" "}
        <a href="https://forms.gle/QwJYztXK5VrXG6K38" target="_blank">
          Google Form
        </a>
        . You can check out our current projects{" "}
        <Link to="/docs/about">here</Link>.
      </>
    ),
  },
  {
    title: "Project Requests",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We will prioritize requests that:
        <ul>
          <li>Come from Saint Louis University</li>
          <li>Focus on tools that help with specific research goals</li>
          <li>Will help researchers obtain specific preliminary results</li>
        </ul>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
