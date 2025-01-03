/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';

import Layout from '@theme/Layout';

import Home from './Home';

const Index = () => {
  return (
    <Layout
      description="中国第一个圆锥角膜患者社区"
      wrapperClassName="homepage">
      <Head>
        <title>圆友社区 · 圆锥角膜患者自助互助公益平台</title>
        <meta
          property="og:title"
          content="圆友社区 · 圆锥角膜患者自助互助公益平台"
        />
        <meta
          property="twitter:title"
          content="圆友社区 · 圆锥角膜患者自助互助公益平台"
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
