/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import users from './showcase.json';
import { Options } from '@docusaurus/plugin-content-blog';

const copyright = `Copyright © ${new Date().getFullYear()} 圆友社区 版权所有`;

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/zhangqi444/yuanyou',
};

const commonBlogOptions: Options = {
  blogSidebarCount: 'ALL',
  blogSidebarTitle: '全部文章',
  onInlineAuthors: 'ignore',
  authorsMapPath: '../authors.yml',
  // Ignore for now due to old posts
  onUntruncatedBlogPosts: 'ignore',
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

const config: Config = {
  future: {
    // Make Docusaurus build faster - enabled by default
    // See https://github.com/facebook/docusaurus/issues/10556
    // See https://github.com/zhangqi444/yuanyou/pull/4268
    // See https://docusaurus.io/blog/releases/3.6
    experimental_faster: (process.env.DOCUSAURUS_FASTER ?? 'true') === 'true',
  },

  title: '圆友社区',
  tagline: '圆锥角膜患者自助互助公益平台',
  organizationName: 'zhangqi444',
  projectName: 'yuanyou',
  url: 'https://www.yuanzhuijiaomo.org',
  baseUrl: '/',
  clientModules: [
    require.resolve('./modules/jumpToFragment.js'),
  ],
  trailingSlash: false, // because trailing slashes can break some existing relative links
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {
      src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
      defer: true,
    },
    {src: 'https://snack.expo.dev/embed.js', defer: true},
    {src: 'https://platform.twitter.com/widgets.js', async: true},
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  customFields: {
    users,
    facebookAppId: '1677033832619985',
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  onBrokenLinks: 'throw',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars'),
          editCurrentVersion: true,
          ...commonDocsOptions,
        },
        blog: {
          path: 'blog',
          ...commonBlogOptions,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
          ],
        },
        // TODO: GA is deprecated, remove once we're sure data is streaming in GA4 via gtag.
        googleAnalytics: {
          trackingID: 'UA-41298772-2',
        },
        gtag: {
          trackingID: 'G-58L13S6BDP',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      "@docusaurus/plugin-content-blog",
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: "patientStory",
        routeBasePath: "patient-story",
        path: "./patient-story",
        ...commonBlogOptions,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: "events",
        routeBasePath: "events",
        path: "./events",
        ...commonBlogOptions,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: "news",
        routeBasePath: "news",
        path: "./news",
        ...commonBlogOptions,
      },
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'guide',
        path: 'guide',
        routeBasePath: '/guide',
        sidebarPath: require.resolve('./sidebarsGuide'),
        ...commonDocsOptions,
      },
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'knowledge',
        path: 'knowledge',
        routeBasePath: '/knowledge',
        sidebarPath: require.resolve('./sidebarsKnowledge'),
        ...commonDocsOptions,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // TODO: Add announcement bar
    // announcementBar: {
    //   id: 'new-architecture',
    //   content:
    //     'The New Architecture has arrived - <a target="_blank" rel="noopener noreferrer" href="/blog/2024/10/23/the-new-architecture-is-here">learn more</a>',
    //   backgroundColor: '#20232a',
    //   textColor: '#fff',
    //   isCloseable: false,
    // },
    prism: {
      defaultLanguage: 'jsx',
      theme: require('./core/PrismTheme'),
      additionalLanguages: [
        'diff',
        'bash',
        'json',
        'java',
        'kotlin',
        'objectivec',
        'swift',
        'groovy',
        'ruby',
        'flow',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-add-line',
          line: 'highlight-add-next-line',
          block: {start: 'highlight-add-start', end: 'highlight-add-end'},
        },
        {
          className: 'code-remove-line',
          line: 'highlight-remove-next-line',
          block: {
            start: 'highlight-remove-start',
            end: 'highlight-remove-end',
          },
        },
      ],
    },
    navbar: {
      title: '圆友社区',
      logo: {
        src: 'img/yuanyou_logo.jpeg',
        alt: '圆友社区',
      },
      style: 'dark',
      items: [
        {
          label: '新闻与活动',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              label: '新闻',
              to: '/news',
            },
            {
              label: '活动',
              to: '/events',
            },
            {
              label: '往期活动',
              href: 'https://pan.baidu.com/s/11kOe4PkROegmfhfZurjzrA?pwd=m2rf',
            },
          ],
        },
        {
          label: '资料汇总',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              label: '圆科普',
              to: '/knowledge/圆锥角膜',
            },
            {
              to: '/guide/周兴涛、徐建江、陈世豪、姚玉峰等角膜病名医汇总【长三角篇】',
              label: '就医指南',
            },
            {
              to: '/patient-story/2019/11/27/圆锥角膜走进我的生活——圆友社区创始人的真情自述',
              label: '圆友故事',
            },
            {
              label: '博客',
              to: '/blog',
            },
          ],
        },
        {
          label: '其它',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              label: '我们的纲领',
              to: 'docs/guide',
            },
            {
              label: '光荣榜',
              to: 'showcase',
            },
            {
              label: '志愿者申请',
              to: 'docs/volunteer',
            },
            {
              label: '联系我们',
              to: 'docs/contact',
            },
            {
              label: '关于我们',
              to: 'docs/about',
            },
            {
              label: '圆友自助40字总纲',
              type: 'doc',
              docId: 'guide',
            },
          ],
        },
        {
          href: 'https://github.com/zhangqi444/yuanyou',
          'aria-label': 'GitHub repository',
          position: 'right',
          className: 'navbar-github-link',
        },
      ],
    },
    image: 'img/logo-share.png',
    footer: {
      style: 'dark',
      links: [
        {
          title: '新闻与活动',
          items: [
            {
              label: '新闻',
              to: '/news',
            },
            {
              label: '活动',
              to: '/events',
            },
            {
              label: '往期活动',
              href: 'https://pan.baidu.com/s/11kOe4PkROegmfhfZurjzrA?pwd=m2rf',
            },
          ],
        },
        {
          title: '资料汇总',
          items: [
            {
              label: '圆科普',
              to: '/knowledge/圆锥角膜',
            },
            {
              to: '/guide/周兴涛、徐建江、陈世豪、姚玉峰等角膜病名医汇总【长三角篇】',
              label: '就医指南',
            },
            {
              to: '/patient-story/2019/11/27/圆锥角膜走进我的生活——圆友社区创始人的真情自述',
              label: '圆友故事',
            },
            {
              to: '/blog',
              label: '博客',
              position: 'right',
            },
          ],
        },
        {
          title: '联系我们',
          items: [
            {
              label: '微信公众号',
              to: 'docs/contact',
            },
            {
              label: '微信',
              to: 'docs/contact',
            },
            {
              label: '知乎',
              href: 'https://www.zhihu.com/people/yuan-zhui-jiao-mo-bing-you-hui',
            },
            {
              label: '邮箱',
              to: 'docs/contact',
            },
            {
              label: 'QQ',
              to: 'docs/contact',
            },
          ],
        },
        {
          title: '其它',
          items: [
            {
              label: '我们的纲领',
              to: 'docs/guide',
            },
            {
              label: '光荣榜',
              to: 'showcase',
            },
            {
              label: '志愿者申请',
              to: 'docs/volunteer',
            },
            {
              label: '关于我们',
              to: 'docs/about',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: 'The National Keratoconus Foundation (NKCF) ',
              href: 'https://nkcf.org/',
            },
          ],
        },
      ],
      logo: {
        alt: '圆友社区 Logo',
        src: 'img/yuanyou_logo.jpeg',
        href: 'https://yuanzhuijiaomo.org/',
      },
      copyright,
    },
    algolia: {
      appId: 'GTMG1F5XQ1',
      apiKey: 'b331aecafa12d74ba40741706c70a1a5',
      indexName: 'yuanyou',
      contextualSearch: true,
    },
    metadata: [
      {
        property: 'og:image',
        content: 'https://yuanzhuijiaomo.org/img/logo-share.png',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
      {
        name: 'twitter:image',
        content: 'https://yuanzhuijiaomo.org/img/logo-share.png',
      },
      {name: 'twitter:site', content: '@yuanzhuijiaomo'},
    ],
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
