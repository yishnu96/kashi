import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  templesSidebar: [
    {
      type: "doc",
      id: "about-kashi-temples",
      label: "Overview",
    },
    {
      type: "category",
      label: "Aditya Temples",
      items: require('./aditya-temples/adityaSidebar.ts').adityaSidebar[0].items.map(item => `aditya-temples/${item}`),
    },
    {
      type: "category",
      label: "Bhairav Temples",
      items: require('./bhairav-temples/bhairavSidebar.ts').bhairavSidebar[0].items.map(item => `bhairav-temples/${item}`),
    },
  ],
};

module.exports = sidebars;
