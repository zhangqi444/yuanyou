/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Community() {
  const {siteConfig} = useDocusaurusContext();
  const apps = Object.values(siteConfig.customFields.users)
    .flat()
    .filter(app => app.pinned);

  return (
    <Section>
      <SectionTitle title="圆友自助，社会支持" />
      <div className={styles.featureContainer}>
        <div>
          <p>
            回想我们走过的路，都是因为曾经的无助和迷茫，我们想要帮助更多的人，少一些焦虑和绝望，多一份力量和方向。
          </p>
          <p>
            到2020年初，我们已经：{' '}
          </p>
          <p>
            <ul>
              <li>连接了超过20000名圆锥角膜患者；</li>
              <li>发布了130多篇原创医学科普文章；</li>
              <li>有效阅读量突破100万次；</li>
              <li>举办了90多场线下分享会和沙龙活动；</li>
              <li>合作了20多家知名医院和医疗机构，包括复旦大学附属眼耳鼻喉科医院、北京同仁医院、厦门大学附属眼科中心等。</li>
            </ul>
          </p>
            
          <p>
            我们还推出了公益救助项目，协助报道圆锥角膜患者的真实故事。我们的服务范围也在逐步扩大，逐渐覆盖到角膜移植、角膜接触镜等领域。
          </p>
          <p>
            一路走来，我们看到过迷茫，也看到过重燃的希望。我们知道，这件事情值得去做，也希望有更多的人加入我们，一起帮助更多的人，让温暖延续。
          </p>
        </div>
        <div>
          <p>
            圆友社区的成长也得到了社会各界的广泛支持，无数医务工作者志愿为社区提供专业指导、丰富资源，给患者们带去了温暖与关怀。感谢以下医院和医疗机构对社区的长期帮助。
          </p>
          <ul className="AppList">
            {apps.map((app, i) => {
              const imgSource = !app.icon.startsWith('http')
                ? useBaseUrl('img/showcase/' + app.icon)
                : app.icon;
              return (
                <li key={i} className="item">
                  {app.infoLink ? (
                    <a href={app.infoLink}>
                      <img src={imgSource} alt={app.name} />
                    </a>
                  ) : (
                    <img src={imgSource} alt={app.name} />
                  )}
                </li>
              );
            })}
          </ul>
          <p>
            and <a href={useBaseUrl(`showcase`)}>many more</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Community;
