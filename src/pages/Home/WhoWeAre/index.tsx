/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <SectionTitle
        title="我们是谁"
        description="圆友社区成立于2017年底，起初是一个圆锥角膜患者自发组织的小社群。面对这种罕见且难治的疾病，我们明白确诊和求医的艰难，以及患者和家属的无助与焦虑。虽然我们不是医生，但我们可以通过分享信息和互相鼓励，帮彼此少走弯路、多一份力量。就这样，我们从一群普通人开始，用点滴善意织起了一张互助的网络。"
      />
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          我们相信，每个小小的善举，都能带来改变。<strong>圆友，就是你、我、他！</strong>
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
