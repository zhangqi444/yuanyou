import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  contributing: [
    {
      type: 'category',
      label: 'Contributing to React Native',
      collapsed: false,
      collapsible: true,
      items: [
        'overview',
      ],
    },
  ],
} satisfies SidebarsConfig;
