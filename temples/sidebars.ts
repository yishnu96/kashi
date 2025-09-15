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
      items: [
        "aditya-temples/intro-aditya",
        "aditya-temples/arun-aditya",
        "aditya-temples/drupad-aditya",
      ],
    },
    {
      type: "category",
      label: "Bhairav Temples",
      items: [
        "bhairav-temples/intro",
        "bhairav-temples/kaal-bhairav",
        "bhairav-temples/chand-bhairav",
      ],
    },
  ],
};

module.exports = sidebars;
