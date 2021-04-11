import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(prism)
    .use(html)
    .process(markdown)

  // FIXME: gatsby-remark-smartypants ?
  // FIXME: gatsby-remark-external-links _target blank
  return result.toString()
}
