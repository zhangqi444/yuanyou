/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type users from '../../showcase.json';
import IconExternalLink from '../theme/Icon/ExternalLink';
import ThemedImage from '@theme/ThemedImage';

const renderApp = (app, i) => <AppBox app={app} key={`app-${app.name}-${i}`} />;

function Section({
  children,
  background = 'light',
}: React.PropsWithChildren<{
  background?: 'light' | 'dark';
}>) {
  return <section className={`Section ${background}`}>{children}</section>;
}

const AppBox = ({app}) => {
  const imgSource = useBaseUrl(
    app.icon.startsWith('http') ? app.icon : 'img/showcase/' + app.icon
  );

  return (
    <div className="showcase">
      <div className="iconBox">
        <img src={imgSource} alt={app.name} className="iconBackground" />
        <img src={imgSource} alt={app.name} className="icon" />
      </div>
      <div className="showcaseContent">
        <div>
          <h3>{app.name}</h3>
          {renderLinks(app)}
        </div>
        {app.infoLink && (
          <a
            className="articleButton"
            href={app.infoLink}
            target="_blank"
            title={app.infoTitle}>
            Learn more{' '}
            <IconExternalLink width={12} height={12} style={{opacity: 0.5}} />
          </a>
        )}
      </div>
    </div>
  );
};

const renderLinks = app => {
  const links = [
    app.linkAppStore ? (
      <a key="ios" href={app.linkAppStore} target="_blank">
        iOS
      </a>
    ) : null,
    app.linkPlayStore ? (
      <a key="android" href={app.linkPlayStore} target="_blank">
        Android
      </a>
    ) : null,
    app.linkDesktop ? (
      <a key="desktop" href={app.linkDesktop} target="_blank">
        Desktop
      </a>
    ) : null,
    app.linkMetaQuest ? (
      <a key="quest" href={app.linkMetaQuest} target="_blank">
        Meta&nbsp;Quest
      </a>
    ) : null,
  ]
    .filter(Boolean)
    .flatMap((link, i) =>
      i === 0 ? [link] : [<span key={i}> • </span>, link]
    );

  if (links.length === 0) {
    return <p />;
  }

  return <p className="showcaseLinks">{links}</p>;
};

const randomizeApps = apps =>
  [...apps].filter(app => !app.group).sort(() => 0.5 - Math.random());

const Showcase = () => {
  const {siteConfig} = useDocusaurusContext();
  const {hospital, school, organization, volunteer} = siteConfig
    .customFields.users as typeof users;
  const [pinnedRandomizedApps, setPinnedRandomizedApps] = useState([]);
  const [randomizedApps, setRandomizedApps] = useState([]);

  useEffect(() => {
    // setRandomizedApps(randomizeApps(others.filter(app => !app.pinned)));
    // setPinnedRandomizedApps(randomizeApps(others.filter(app => app.pinned)));
  }, []);

  return (
    <Layout
      title="Showcase"
      description="看看谁在帮助我们共建圆友社区!">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            谁在帮助我们共建<span>圆友社区</span>?
          </h1>
          <p>
            圆友社区的成长离不开志愿者们无私地奉献，也得到了社会各界的广泛支持与关注，他们为社区提供了专业的指导、丰富了各类内容资源，给患者们带去了无尽的温暖与关怀。
            感谢我们的志愿者团队，以及来自以下医院的医务工作者和社会机构的工作人员对圆友社区的长期帮助。
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <div style={{display: 'flex', alignItems: 'center' }}>
            <h2 className="withLogo">
              <ThemedImage
                alt="Volunteer logo"
              sources={{
                light: useBaseUrl('/img/homepage/volunteer.svg'),
                dark: useBaseUrl('/img/homepage/volunteer.svg'),
                }}
              />
            </h2>
            <h1 style={{margin: '0px'}}>志愿者</h1>
          </div>
          <div className="logos">{volunteer.map(renderApp)}</div>
        </div>
        <div className="showcaseSection">
          <div style={{display: 'flex', alignItems: 'center' }}>
            <h2 className="withLogo">
              <ThemedImage
                alt="Hospital logo"
              sources={{
                light: useBaseUrl('/img/homepage/hospital.svg'),
                dark: useBaseUrl('/img/homepage/hospital.svg'),
                }}
              />
            </h2>
            <h1 style={{margin: '0px'}}>医院</h1>
          </div>
          <div className="logos">{hospital.map(renderApp)}</div>
        </div>
        <div className="showcaseSection">
          <div style={{display: 'flex', alignItems: 'center' }}>
            <h2 className="withLogo">
              <ThemedImage
                alt="School logo"
                sources={{
                  light: useBaseUrl('/img/homepage/school.svg'),
                  dark: useBaseUrl('/img/homepage/school.svg'),
                }}
              />
            </h2>
            <h1 style={{margin: '0px'}}>学校</h1>
          </div>
          <div className="logos">{school.map(renderApp)}</div>
        </div>
        <div className="showcaseSection">
          <div style={{display: 'flex', alignItems: 'center' }}>
            <h2 className="withLogo">
              <ThemedImage
                alt="Org logo"
                sources={{
                  light: useBaseUrl('/img/homepage/organization.svg'),
                  dark: useBaseUrl('/img/homepage/organization.svg'),
                }}
              />
            </h2>
            <h1 style={{margin: '0px'}}>机构</h1>
          </div>
          <div className="logos">{organization.map(renderApp)}</div>
        </div>
      </Section>
      <Section background="dark">
        <div className="sectionContainer footerContainer">
          <a
            className="formButton"
            href="/docs/volunteer"
            target="_blank">
            申请加入志愿团队
          </a>
          <p>
            如果你也有志于为圆友社区贡献一分自己的力量，不要犹豫，加入我们吧！
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Showcase;
