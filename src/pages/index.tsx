import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const exploreLinks = [
  {
    title: 'Mission',
    description: 'Why AssemBLYA exists, how we work, and what we optimize for.',
    to: '/docs/getting-started/mission',
    icon: 'fa-solid fa-compass',
  },
  {
    title: 'Roadmap',
    description: 'Drop types, cost goals, and the next production milestones.',
    to: '/docs/specifications/roadmap',
    icon: 'fa-solid fa-map',
  },
  {
    title: 'Competitors',
    description: 'Teardowns and field references from Steel Hornets, Nayavu, and more.',
    to: '/docs/competitors',
    icon: 'fa-solid fa-binoculars',
  },
  {
    title: 'Houdini',
    description: 'Garry Houdini drop documentation, imagery, and related notes.',
    to: '/docs/specifications/systems/houdini',
    icon: 'fa-solid fa-cube',
  },
];

const principles = [
  {
    title: 'Simpler',
    text: 'Fewer parts, clearer assembly, faster field repair.',
  },
  {
    title: 'More reliable',
    text: 'Every generation should fail less and hold up longer.',
  },
  {
    title: 'Easier to make',
    text: 'Designed for manufacturing scale, not one-off builds.',
  },
  {
    title: 'More affordable',
    text: 'Cost comes down as the platform gets better — not the other way around.',
  },
];

const platformItems = [
  {
    title: 'One modular platform',
    text: 'Replace many specialized drop systems with a shared belly-mounted architecture.',
  },
  {
    title: 'Multiple missions',
    text: 'From 1–2.5 kg presents to dual drops, gel systems, and infantry packages.',
  },
  {
    title: 'Bulk for units',
    text: 'Built for organizations and partners — standardized production, not retail kits.',
  },
];

function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/hero-drop.jpg');
  const missionImage = useBaseUrl('/img/mission-field.jpg');

  return (
    <Layout
      title="Modular payload delivery platform"
      description="AssemBLYA is a veterans-led modular payload delivery platform — simpler, more reliable, and more affordable with every generation.">
      <main className={styles.page}>
        <section className={styles.hero} aria-label="AssemBLYA introduction">
          <div
            className={styles.heroMedia}
            style={{backgroundImage: `url(${heroImage})`}}
            role="img"
            aria-label="AssemBLYA drop system mounted under an FPV platform"
          />
          <div className={styles.heroVeil} />
          <div className={styles.heroInner}>
            <p className={styles.brand}>{siteConfig.title}</p>
            <h1 className={styles.headline}>
              One modular platform.
              <br />
              Many missions.
            </h1>
            <p className={styles.lede}>
              Veterans-led engineering for payload delivery that gets simpler,
              tougher, and cheaper every generation.
            </p>
            <div className={styles.ctaRow}>
              <Link
                className={styles.ctaPrimary}
                to="/docs/getting-started/overview">
                Read the overview
              </Link>
              <Link
                className={styles.ctaSecondary}
                to="/docs/specifications/roadmap">
                See the roadmap
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.missionCopy}>
            <p className={styles.sectionEyebrow}>Why we build</p>
            <h2 className={styles.sectionTitle}>
              Better equipment saves lives and raises effectiveness.
            </h2>
            <p className={styles.sectionBody}>
              AssemBLYA is not a margin machine. It is a modular ecosystem aimed
              at units and partners who need reliable drop systems they can
              manufacture, repair, and scale.
            </p>
            <Link className={styles.textLink} to="/docs/getting-started/mission">
              Full mission <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.missionVisual}>
            <img
              src={missionImage}
              alt="Concept view of AssemBLYA modular payload platform"
              loading="lazy"
            />
          </div>
        </section>

        <section className={styles.explore}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>Start exploring</p>
            <h2 className={styles.sectionTitle}>Documentation built for builders</h2>
            <p className={styles.sectionBody}>
              Jump straight into mission context, roadmap, competitor references,
              or hardware notes.
            </p>
          </div>
          <div className={styles.exploreGrid}>
            {exploreLinks.map((item) => (
              <Link key={item.title} className={styles.exploreCard} to={item.to}>
                <span className={styles.exploreIcon} aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <span className={styles.exploreTitle}>{item.title}</span>
                <span className={styles.exploreDesc}>{item.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>Principles</p>
            <h2 className={styles.sectionTitle}>Every new version should be</h2>
          </div>
          <ul className={styles.principleList}>
            {principles.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.platform}>
          <div className={styles.platformIntro}>
            <p className={styles.sectionEyebrow}>Platform</p>
            <h2 className={styles.sectionTitle}>Built as an ecosystem, not a one-off drop</h2>
            <p className={styles.sectionBody}>
              Shared architecture under the drone belly. Sensors, servos, and
              3D parts that can grow into many payload configurations.
            </p>
          </div>
          <div className={styles.platformGrid}>
            {platformItems.map((item) => (
              <article key={item.title} className={styles.platformItem}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing}>
          <h2 className={styles.closingTitle}>Ready to dig in?</h2>
          <p className={styles.closingBody}>
            Start with the overview, or open the Ukrainian mission page if that
            is your preferred language.
          </p>
          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} to="/docs/getting-started">
              Getting started
            </Link>
            <Link
              className={styles.ctaSecondary}
              to="/docs/getting-started/ua">
              Українською
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
