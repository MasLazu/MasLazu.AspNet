import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Framework Components",
    img: require("@site/static/img/framework-components.png").default,
    description: (
      <>
        Core building blocks implementing Ports and Adapters (Hexagonal
        Architecture) with Domain, Application, EfCore, and Endpoint layers for
        clean, testable applications.
      </>
    ),
  },
  {
    title: "Modules & Utilities",
    img: require("@site/static/img/modules-&-utilities.png").default,
    description: (
      <>
        Pre-built modules for authentication and verification, plus standalone
        utilities like EmailSender with multi-provider support and beautiful
        templates.
      </>
    ),
  },
  {
    title: "Deployment Flexibility",
    img: require("@site/static/img/deployment-flexibility.png").default,
    description: (
      <>
        Start as modular monolith, evolve to microservices. Technology agnostic
        with high testability and .NET 9 features including FastEndpoints
        integration.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
