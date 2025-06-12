import { CodeTabs } from "/Users/laoliu/Desktop/code/laoliu/go-learn-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.81_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_307dbd153b2469da54d98dd86e37efeb/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/laoliu/Desktop/code/laoliu/go-learn-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.81_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_307dbd153b2469da54d98dd86e37efeb/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/laoliu/Desktop/code/laoliu/go-learn-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.81_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_307dbd153b2469da54d98dd86e37efeb/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
