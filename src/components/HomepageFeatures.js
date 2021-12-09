import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Forstå teamets sikkerhetsansvar',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Teamet er selv ansvarlig for sikkerheten i sin egen løsning. <a href="docs/intro/">Trykk her</a> for å lese mer om dette ansvaret, og hvilke forventninger som stilles til teamet.
      </>
    ),
  },
	{
    title: 'Veiledning til sikkerhetsarbeidet',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Det er utarbeidet veiledninger til hvordan teamet kan ivareta sikkerhetsansvaret. <a href="docs-veiledning-aktiviteter/veiledning-aktiviteter-intro/">Trykk her</a> for å se hva teamet ditt må gjøre, og hvordan.
      </>
    ),
  },
  {
    title: 'Hjelp til sikker programvareutvikling',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Security Champions-miljøet har utviklet praktiske veiledninger til hvordan du kan sette opp sikre løsninger. <a href="https://improved-train-2f244007.pages.github.io/">Trykk her</a> for å få hjelp til hvordan man utvikler sikker software.
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
