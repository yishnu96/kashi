import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars : SidebarsConfig = {
  templesSidebar: [
    {
      type: 'category',
      label: 'Temples of Kashi',
      collapsed: false,
      items: [
        'intro',
        'vishwanath-temple',
        {
          type: 'category',
          label: 'Famous Temples',
          items: ['famous-temples-overview'],
        },
        {
          type: 'category',
          label: 'Ghats',
          items: ['ghats-overview'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
