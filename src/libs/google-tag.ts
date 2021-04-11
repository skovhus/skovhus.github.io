export const GA_TRACKING_ID = 'UA-142422573-1'

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
