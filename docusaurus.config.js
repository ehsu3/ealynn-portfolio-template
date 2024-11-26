// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ealynn's UI Portfolio",
  tagline: "A Look Into my 2024 Fall Portfolio",
  favicon: "img/logo.png",

  url: "https://ehsu3.github.io/", // Replace with your actual domain
  baseUrl: "/ealynn-portfolio-template/",

  organizationName: "ehsu3", // Replace with your GitHub org/user name
  projectName: "ealynn-portfolio-template", // Replace with your repo/project name
  deploymentBranch: "main",
  trailingSlash: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs if not needed
        blog: {
          showReadingTime: true,
          // Add any additional blog configuration if needed
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Ealynn's UI Portfolio",
        logo: {
          alt: "Ealynn's UI Portfolio Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/about-me", label: "About Me", position: "right" },
          { to: "/projects", label: "Projects", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/", label: "|", position: "right" },
          { to: "/contact", label: "Contact", position: "right" },
          {
            href: "https://github.com/ehsu3/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [{ label: "About Me", to: "/about-me" }],
          },
          {
            title: "Projects",
            items: [{ label: "Projects", to: "/projects" }],
          },
          {
            title: "Blog",
            items: [{ label: "Blog", to: "/blog" }],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ehsu3",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ealynn's Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
