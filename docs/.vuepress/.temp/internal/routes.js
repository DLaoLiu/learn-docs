export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/interview-questions/web3/%E5%8C%BA%E5%9D%97%E9%93%BE%E6%A6%82%E5%BF%B5%E7%AE%80%E4%BB%8B.html", { loader: () => import(/* webpackChunkName: "interview-questions_web3_区块链概念简介.html" */"E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/interview-questions/web3/区块链概念简介.html.js"), meta: {"title":"Web3区块链技术学习指南"} }],
  ["/interview-questions/java/%E4%BA%8B%E5%8A%A1%E7%9B%B8%E5%85%B3%E9%9D%A2%E8%AF%95%E9%A2%98%E8%AF%A6%E8%A7%A3.html", { loader: () => import(/* webpackChunkName: "interview-questions_java_事务相关面试题详解.html" */"E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/interview-questions/java/事务相关面试题详解.html.js"), meta: {"title":"事务相关面试题详解"} }],
  ["/interview-questions/java/%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%9C%BA%E6%99%AF%E4%B8%8B%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%80%BB%E7%BB%93.html", { loader: () => import(/* webpackChunkName: "interview-questions_java_大数据场景下性能优化总结.html" */"E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/interview-questions/java/大数据场景下性能优化总结.html.js"), meta: {"title":"大数据场景下的性能优化实践"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
