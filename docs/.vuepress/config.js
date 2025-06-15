import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/",
  hostname: "www.kinglet.com",
  locales: {
    "/zh/": {
      lang: "中文",
    },
    "/": {
      lang: "English",
    },
  },

  lang: "zh-CN",
  title: "嗨,这是我的Web3学习笔记",
  description: "这是我的Web3学习笔记，记录了我在Web3领域的学习和探索。",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],

  theme: defaultTheme({
    logo: "/images/favicon.ico",

    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "开始",
        link: "/get-started",
      },
      {
        text: "面试题",
        prefix: "/interview-questions",
        children: [{
          text: "Web3",
          prefix: "/interview-questions/web3/",
          children: [
            {
              text: "区块链概念简介",
              link: "/interview-questions/web3/区块链概念简介",
            }
          ],
        }],
      },
    ],
  }),

  bundler: viteBundler(),
});
