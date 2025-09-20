import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/installation", "getting-started/first-api"],
    },
    {
      type: "category",
      label: "Framework",
      collapsed: false,
      items: [
        "framework/overview",
        "framework/domain",
        "framework/application",
        "framework/efcore",
      ],
    },
    {
      type: "category",
      label: "Modules",
      collapsed: false,
      items: [
        "modules/overview",
        "modules/authentication-core",
        "modules/authentication-password",
        "modules/authorization-core",
        "modules/verification",
      ],
    },
    {
      type: "category",
      label: "Utilities",
      collapsed: false,
      items: ["utilities/overview", "utilities/emailsender"],
    },
    {
      type: "category",
      label: "Examples",
      collapsed: false,
      items: ["examples/overview"],
    },
  ],
};

export default sidebars;
