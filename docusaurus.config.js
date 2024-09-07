// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My UI Portfolio",
  tagline: "Showcasing My Work and Thoughts",
  favicon: "img/favicon.ico",

  url: "https://your-domain.com", // Replace with your actual domain
  baseUrl: "/",

  organizationName: "ehsu3", // Replace with your GitHub org/user name
  projectName: "my-ui-portfolio", // Replace with your repo/project name

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
        title: "My UI Portfolio",
        logo: {
          alt: "My UI Portfolio Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/about-me", label: "About Me", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "right" },
          {
            href: "https://github.com/your-org/my-ui-portfolio",
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
                href: "https://github.com/your-org/my-ui-portfolio",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My UI Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
