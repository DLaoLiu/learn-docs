import comp from "E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/ladder.svg\",\"actions\":[{\"text\":\"开始\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"入门指导\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Go\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on writing.\"},{\"title\":\"Solidity\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Web3\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":\"HardHat\",\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":\"Chai\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"MIT Licensed | Copyright © 2025-present VuePress Community\"},\"git\":{\"updatedTime\":1749981369000,\"contributors\":[{\"name\":\"wangn\",\"username\":\"wangn\",\"email\":\"wangningf@taiji.com.cn\",\"commits\":1,\"url\":\"https://github.com/wangn\"},{\"name\":\"老六\",\"username\":\"\",\"email\":\"w18211132506@mail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"f99d7540197fbd5187b741849277ed0254b5ce99\",\"time\":1749981369000,\"email\":\"w18211132506@mail.com\",\"author\":\"老六\",\"message\":\"1、增加Web3-区块链相关面试题。\"},{\"hash\":\"99f260fcd3ce0e4e8f7315bb6c1ed3fcbad6c5c9\",\"time\":1749696804000,\"email\":\"w18211132506@mail.com\",\"author\":\"老六\",\"message\":\"错别字修改\"},{\"hash\":\"2634d11326531f5900669348b856ff4bd30b5f3b\",\"time\":1749693611000,\"email\":\"wangningf@taiji.com.cn\",\"author\":\"wangn\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
