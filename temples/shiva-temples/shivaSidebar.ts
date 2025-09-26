import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  shivaSidebar: [
    {
      type: "category",
      label: "Shiva Temples",
      items: [
        "about-shiva",
        {
          type: "category",
          label: "Main Shiva Temples",
          items: require("./main-shiva-temples/main-shiva-temples-sidebar.ts").mainShivaSidebar[0].items.map(item => `main-shiva-temples/${item}`),
        },
        {
          type: "category",
          label: "A to D",
          items: require("./a-to-d/a-to-d-sidebar.ts").aToDSidebar[0].items.map(item => `a-to-d/${item}`),
        },
        {
          type: "category",
          label: "E to K",
          items: require("./e-to-k/e-to-k-sidebar.ts").eToKSidebar[0].items.map(item => `e-to-k/${item}`),
        },
        {
          type: "category",
          label: "L to R",
          items: require("./l-to-r/l-to-r-sidebar.ts").lToRSidebar[0].items.map(item => `l-to-r/${item}`),
        },
        {
          type: "category",
          label: "S to Y",
          items: require("./s-to-y/s-to-y-sidebar.ts").sToYSidebar[0].items.map(item => `s-to-y/${item}`),
        },
      ],
    },
  ],
};

module.exports = sidebars;