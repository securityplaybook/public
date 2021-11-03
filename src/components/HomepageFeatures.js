import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Sikkerhet er teamets ansvar',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Teamet er selv ansvarlig for sikkerheten i sin egen løsning. <a href="docs/intro/">Trykk her</a> for å lese mer om ansvaret teamet har innenfor sikkerhet, og hvilke forventninger som stilles til deg.
      </>
    ),
  },
  {
    title: 'Vi skal jobbe risikobasert',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Det å ha kontroll på risikoer i og rundt egen løsning er avgjørende for sikkerheten vår. <a href="docs-risiko/risiko-intro/">Trykk her</a> for å lese mer om hva som forventes av teamet rundt risikostyring.
      </>
    ),
  },
  {
    title: 'Det skal være lett å gjøre rett',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Vi har veiledninger for å styrke sikkerheten i ditt team. Det er også mange sikkerhetstjenester som lett kan tas i bruk av teamet. <a href="docs-beste-praksis/beste-praksis-intro/">Trykk her</a> for å få praktisk hjelp til å gjøre løsningen din sikker.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
