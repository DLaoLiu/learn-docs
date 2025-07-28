export const themeData = JSON.parse("{\"logo\":\"/images/favicon.ico\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"Web3\",\"prefix\":\"/interview-questions/web3/\",\"children\":[{\"text\":\"区块链概念简介\",\"link\":\"/interview-questions/web3/区块链概念简介\"}]},{\"text\":\"Java\",\"prefix\":\"/interview-questions/java/\",\"children\":[{\"text\":\"大数据场景下性能优化总结\",\"link\":\"/interview-questions/java/大数据场景下性能优化总结\"},{\"text\":\"事务相关面试题详解\",\"link\":\"/interview-questions/java/事务相关面试题详解\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
