import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        AssemblyA is designed to be simple and intuitive for developers of all skill levels.
      </>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    description: (
      <>
        Find everything you need to get started and master AssemblyA through our detailed guides.
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    description: (
      <>
        Built on Docusaurus, providing a modern, fast, and SEO-friendly documentation site.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
