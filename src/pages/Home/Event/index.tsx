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
import ThemeImage from '../components/ThemeImage';

function Watch() {
  return (
    <Section>
      <SectionTitle
        title="社区活动"
        description={
          <>
            圆友社区致力于为圆锥角膜患者打造一个温暖、有爱的互动平台。通过健康讲座、经验分享和趣味活动，大家可以交流治疗心得、获取专业知识、互相支持，一起面对挑战，共享希望与成长。
            <a href="/events">
              现在报名
            </a>{'或'}
            <a href="https://pan.baidu.com/s/11kOe4PkROegmfhfZurjzrA?pwd=m2rf">
              回顾往期活动
            </a>
            。
          </>
        }
      />
      <div className={styles.videos}>
        <div className={styles.videoContainer}>
          <ThemeImage
            lightSrc="/img/homepage/knowledge.png"
            darkSrc="/img/homepage/knowledge.png"
            className={styles.cardImage}
            alt="科普讲座"
          />
          <div className={styles.videoInfo}>
            <h4>科普讲座</h4>
            <p>圆友社区定期举办科普讲座，由专业医生为大家讲解圆锥角膜相关知识，解答疑问，分享最新治疗进展。让我们一起学习、提升健康意识！</p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <ThemeImage
              lightSrc="/img/homepage/share.png"
              darkSrc="/img/homepage/share.png"
              className={styles.cardImage}
              alt="圆友分享"
            />
          <div className={styles.videoInfo}>
            <h4>圆友分享</h4>
            <p>圆友分享是一个温暖的交流时刻，大家通过讲述自己的经历和感悟，相互鼓励、传递希望。在这里，我们用真心点亮彼此，共同成长！</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Watch;
