export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"嗨,准备好学习Go语言了吗?\",\"description\":\"这个项目是go语法入门课程，请跟着我学习。\",\"head\":[],\"locales\":{\"/zh/\":{\"lang\":\"中文\"},\"/\":{\"lang\":\"English\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
