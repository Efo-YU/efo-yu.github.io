import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressOptions = {
  srcDir: "md",
  title: "Efo's Sandbox",
  description: "Efo's random thoughts, stories, and little discoveries.",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    socialLinks: [{ icon: "github", link: "https://github.com/Efo-YU" }],
  },
};

const vitePressSidebarOptions = {
  documentRootPath: "/md",
  collapsed: false,
  capitalizeFirst: true,
};

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);
