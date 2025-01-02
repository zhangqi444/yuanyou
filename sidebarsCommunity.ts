import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  community: [
    {
      type: 'category',
      label: '社区',
      collapsed: false,
      collapsible: false,
      items: ['overview'],
    },
  ],
} satisfies SidebarsConfig;
