/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import ThemeImage from '../components/ThemeImage';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Framework() {
  return (
    <Section>
      <SectionTitle
        title="科普资讯"
        description={
          <>
            科普资讯是我们传递知识与力量的重要方式。无论是疾病的基础认知，还是治疗和护理的实用建议，每一篇内容都承载着我们的用心。它们或许简单，却能解答疑惑；或许平凡，却能点燃希望。我们相信，每一次知识的传递，都是助力健康生活的重要一步。
            <a href="/knowledge/圆锥角膜">了解更多</a>。
          </>
        }
      />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <ThemeImage
            lightSrc="/img/homepage/learn-keratoconus.png"
            darkSrc="/img/homepage/learn-keratoconus.png"
            className={styles.cardImage}
            alt="Learn about keratoconus"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>了解圆锥</h4>
            <p className={styles.cardDescription}>
              圆锥角膜是一种罕见但严重的眼科疾病，主要表现为角膜逐渐变薄并向外突出，形成锥形。它通常在青春期或青年期发病，发病率大约为1/2000。
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <ThemeImage
            lightSrc="/img/homepage/keratoconus-treatment.png"
            darkSrc="/img/homepage/keratoconus-treatment.png"
            className={styles.cardImage}
            alt="Keratoconus treatment"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
              治疗方法
            </h4>
            <p className={styles.cardDescription}>
              圆锥角膜的治疗包括硬性透气接触镜（RGP）、角膜交联术（CXL）、角膜环植入术和角膜移植，根据病情选择适合方案。
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <ThemeImage
            lightSrc="/img/homepage/eye-health.png"
            darkSrc="/img/homepage/eye-health.png"
            className={styles.cardImage}
            alt="Keratoconus prevention"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>预防手段</h4>
            <p className={styles.cardDescription}>
              预防圆锥角膜可以从日常习惯做起，比如尽量不揉眼睛、及时处理眼部过敏问题、定期检查眼睛健康，家族中有相关病史的更要提早关注和护理！</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Framework;
