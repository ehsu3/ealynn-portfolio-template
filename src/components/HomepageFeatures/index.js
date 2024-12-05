import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer',
    Svg: require('@site/static/img/computer.svg').default,
    description: (
      <>
        I've been pursuing a CS degree for three years thus far, giving me a 
        developer's mindset when I approach design & code.
      </>
    ),
  },
  {
    title: 'Artist',
    Svg: require('@site/static/img/music.svg').default,
    description: (
      <>
        I've been a pianist for over a decade and hobbyist artist in my free time.
        Creating art from ideas has always been a passion!
      </>
    ),
  },
  {
    title: 'Designer',
    Svg: require('@site/static/img/journal.svg').default,
    description: (
      <>
        Though I only started designing in university, I value the aesthetics of
        good website design and aim to show that in my works.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
