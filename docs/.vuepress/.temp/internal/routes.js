export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/laoliu/Desktop/code/laoliu/go-learn-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/laoliu/Desktop/code/laoliu/go-learn-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/interview-questions/web3/%E5%8C%BA%E5%9D%97%E9%93%BE%E6%A6%82%E5%BF%B5%E7%AE%80%E4%BB%8B.html", { loader: () => import(/* webpackChunkName: "interview-questions_web3_区块链概念简介.html" */"/Users/laoliu/Desktop/code/laoliu/go-learn-docs/docs/.vuepress/.temp/pages/interview-questions/web3/区块链概念简介.html.js"), meta: {"title":"Web3区块链技术学习指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/laoliu/Desktop/code/laoliu/go-learn-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
