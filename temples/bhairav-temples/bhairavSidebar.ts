import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebars : SidebarsConfig = {
  bhairavSidebar: [
    {
      type: "category",
      label: "Bhairav Temples",
      items: [
        "intro",
        "kaal-bhairav",
        "chand-bhairav",
      ],
    },
  ],
};

module.exports = sidebars;
