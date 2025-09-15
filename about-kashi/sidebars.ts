import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars : SidebarsConfig = {
  aboutKashiSidebar: [
    {
      type: 'category',
      label: 'About Kashi',
      collapsed: false,
      items: [
        'overview',
        'history',
        {
          type: 'category',
          label: 'Culture',
          items: ['cultural-heritage'],
        },
        {
          type: 'category',
          label: 'Geography',
          items: ['geography-location'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
