export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"嗨,这是我的Web3学习笔记\",\"description\":\"这是我的Web3学习笔记，记录了我在Web3领域的学习和探索。\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}]],\"locales\":{\"/zh/\":{\"lang\":\"中文\"},\"/\":{\"lang\":\"English\"}}}")

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
