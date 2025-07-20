import comp from "E:/code/vue/learn-docs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749693611000,\"contributors\":[{\"name\":\"wangn\",\"username\":\"wangn\",\"email\":\"wangningf@taiji.com.cn\",\"commits\":1,\"url\":\"https://github.com/wangn\"}],\"changelog\":[{\"hash\":\"2634d11326531f5900669348b856ff4bd30b5f3b\",\"time\":1749693611000,\"email\":\"wangningf@taiji.com.cn\",\"author\":\"wangn\",\"message\":\"init\"}]},\"filePathRelative\":\"get-started.md\"}")
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
