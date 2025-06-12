import { CodeTabs } from "D:/code/go-learn-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.81_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+b_2ucf222zwuew7gnqlh22cjjuwe/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/code/go-learn-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.81_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+b_2ucf222zwuew7gnqlh22cjjuwe/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/code/go-learn-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.81_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+b_2ucf222zwuew7gnqlh22cjjuwe/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
