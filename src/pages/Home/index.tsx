/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import PatientStory from './PatientStory';
import Knowledge from './Knowledge';
import Event from './Event';
import Community from './Community';
import CallToAction from './CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <PatientStory />
      <Knowledge />
      <Event />
      <Community />
      <CallToAction />
    </>
  );
}
