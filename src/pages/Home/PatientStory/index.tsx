/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import styles from './styles.module.css';

function Native() {
  return (
    <Section>
      <SectionTitle
        title="圆友故事"
        description={
          <>
            在圆友社区，每一位患者、家属和志愿者都有属于自己的故事。这些故事或许平凡，却充满力量；或许低谷，却伴随着希望。从确诊时的迷茫，到求医路上的坚持，再到与社区互助的温暖连接，每一个瞬间都值得被记住。
            <a href="/patient-story/2019/11/27/%E5%9C%86%E9%94%A5%E8%A7%92%E8%86%9C%E8%B5%B0%E8%BF%9B%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E2%80%94%E2%80%94%E5%9C%86%E5%8F%8B%E7%A4%BE%E5%8C%BA%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%9A%84%E7%9C%9F%E6%83%85%E8%87%AA%E8%BF%B0">了解更多</a>。
          </>
        }
      />
      <ThemeImage
        lightSrc="/img/homepage/patient-story.png"
        darkSrc="/img/homepage/patient-story-dark.png"
        className={styles.flyoutIllustration}
        alt="圆友故事"
      />
    </Section>
  );
}

export default Native;
