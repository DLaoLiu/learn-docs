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
  title: "嗨,准备好学习Go语言了吗?",
  description: "这个项目是go语法入门课程，请跟着我学习。",

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
      // {
      //   text: "Go",
      //   prefix: "/go/",
      //   children: [{}],
      // },
    ],
  }),

  bundler: viteBundler(),
});
