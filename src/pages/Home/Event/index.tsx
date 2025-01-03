/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Watch() {
  return (
    <Section>
      <SectionTitle
        title="社区活动"
        description={
          <>
            圆友社区致力于为圆锥角膜患者打造一个温暖、有爱的互动平台。通过健康讲座、经验分享和趣味活动，大家可以交流治疗心得、获取专业知识、互相支持，一起面对挑战，共享希望与成长。
            <a href="/events">
              了解更多
            </a>
            。
          </>
        }
      />
      <div className={styles.videos}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/NCAY0HIfrwc"
            title="Mobile Innovation with React Native, ComponentKit, and Litho"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>科普讲座</h4>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/wUDeLT6WXnQ"
            title="Explain Like I'm 5: React Native"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>圆友分享</h4>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Watch;
