import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "SacredKashi",
  tagline: "Walk the Cosmos on the Banks of the Ganga",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://sacredkashi.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sacredkashi", // Usually your GitHub org/user name.
  projectName: "sacredkashi", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "temples",
        path: "temples",
        routeBasePath: "temples",
        sidebarPath: require.resolve("./temples/templesSidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about-kashi",
        path: "about-kashi",
        routeBasePath: "about-kashi",
        sidebarPath: require.resolve("./about-kashi/sidebars.js"),
      },
    ],
  ],
  scripts: [
    {
      src: "/schema.js",
      async: true,
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: [
            "./src/css/main.css",
            "./src/css/layout.css",
            "./src/css/elements.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    metadata: [
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@yishnu_" },
      { name: "twitter:creator", content: "@yishnu_" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SacredKashi" },
      {
        name: "twitter:title",
        content: "SacredKashi - Walk the Cosmos on the Banks of the Ganga",
      },
      {
        name: "twitter:description",
        content:
          "Discover the temples, culture, and spiritual heritage of Kashi (Varanasi), one of the world's oldest living cities.",
      },
    ],
    navbar: {
      title: "SacredKashi",
      logo: {
        alt: "SacredKashi Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "templesSidebar",
          position: "left",
          label: "Temples",
          docsPluginId: "temples",
        },
        {
          type: "docSidebar",
          sidebarId: "aboutKashiSidebar",
          position: "left",
          label: "About Kashi",
          docsPluginId: "about-kashi",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SacredKashi. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
