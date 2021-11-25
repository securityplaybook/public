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
    title: 'Veiledning til sikkerhetsaktiviteter',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Det at teamene gjennomfører enkelte sikkerhetsaktiviteter er avgjørende for sikkerheten i virksomheten vår. Vi har veiledninger for ulike aktiviteter å styrke sikkerheten i ditt team. <a href="docs-veiledning-aktiviteter/veiledning-aktiviteter-intro/">Trykk her</a> for å få praktisk hjelp til å gjøre løsningen din sikker.
      </>
    ),
  },
  {
    title: 'Det skal være lett å gjøre rett',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Vi har en rekke sikkerhetsfunksjoner og . <a href="docs-risiko/risiko-intro/">Trykk her</a> for å lese mer om hva som forventes av teamet rundt risikostyring.
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
