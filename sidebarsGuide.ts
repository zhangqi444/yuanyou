import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  guide: [
    {
      type: 'category',
      label: '就医指南',
      collapsed: false,
      collapsible: true,
      items: [
        '周兴涛、徐建江、陈世豪、姚玉峰等角膜病名医汇总【长三角篇】',
        '周跃华、李莹、洪晶、陈跃国、谢培英、李绍伟等角膜病名医汇总【北京篇】',
        '杨于力、熊洁、任胜卫、张婉婷、吴护平等角膜病名医汇总【重庆、河南、江苏、河北、福建篇】',
        '黄挺、袁进、谢立信、史伟云、高华、牟国营、曾庆延等角膜病名医汇总【广州、山东、武汉】',
      ],
    },
  ],
} satisfies SidebarsConfig;
