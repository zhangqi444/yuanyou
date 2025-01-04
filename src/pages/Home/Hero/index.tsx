/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';
import ThemeImage from '../components/ThemeImage';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div className={styles.gridBackground}>
          <ThemeImage
            lightSrc="/img/homepage/cover.png"
            darkSrc="/img/homepage/cover.png"
            className={styles.flyoutIllustration}
            alt="圆友故事"
          />
        </div>
      </div>
      <div className={styles.content}>
        <img style={{width: '112px', height: '112px'}} src="/img/yuanyou_logo.jpeg" alt="圆友社区 Logo" />
        <h1 className={styles.title}>圆友社区</h1>
        <h2 className={styles.subtitle}>圆锥角膜患者自助互助公益平台</h2>
        <div className={styles.buttonContainer}>
          <a href="/knowledge/圆锥角膜" className={styles.primaryButton}>
            了解圆锥
          </a>
          <a href="/docs/volunteer" className={styles.secondaryButton}>
            我要分享
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
