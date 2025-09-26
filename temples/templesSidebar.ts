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
      link: {
        type: "doc",
        id: "aditya-temples/intro",
      },
      items:
        require("./aditya-temples/adityaSidebar.ts").adityaSidebar[0].items.map(
          (item) => `aditya-temples/${item}`
        ),
    },
    {
      type: "category",
      label: "Bhairavas of Kashi",
      link: {
        type: "doc",
        id: "bhairav-temples/intro",
      },
      items:
        require("./bhairav-temples/bhairavSidebar.ts").bhairavSidebar[0].items.map(
          (item) => `bhairav-temples/${item}`
        ),
    },
    {
      type: "category",
      label: "Devi Temples",
      items:
        require("./devi-temples/deviSidebar.ts").deviSidebar[0].items.map(
          (item) => `devi-temples/${item}`
        ),
    },
    {
      type: "category",
      label: "Shiva Temples",
      items: (
        require("./shiva-temples/shivaSidebar.ts").shivaSidebar[0].items.map(
          (item) => {
            if (typeof item === 'string') {
              return `shiva-temples/${item}`;
            } else { // It's a category
              return {
                ...item,
                items: item.items.map(subItem => `shiva-temples/${subItem}`),
              };
            }
          }
        )
      ),
    },
    {
      type: "category",
      label: "Vinayak Temples",
      items:
        require("./vinayak-temples/vinayakSidebar.ts").vinayakSidebar[0].items.map(
          (item) => `vinayak-temples/${item}`
        ),
    },
    {
      type: "category",
      label: "Vishnu Temples",
      items:
        require("./vishnu-temples/vishnuSidebar.ts").vishnuSidebar[0].items.map(
          (item) => `vishnu-temples/${item}`
        ),
    },
  ],
};

module.exports = sidebars;
