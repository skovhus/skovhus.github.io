import React from 'react'
import Helmet from 'react-helmet' // FIXME: migrate to next/head (https://github.com/leerob/gatsby-to-nextjs/pull/1/files)
import { useRouter } from 'next/router'

type Props = {
  description?: string
  image?: string
  meta: { name: string; content: string }[]
  pageTitle?: string
}

const siteMetadata = {
  siteUrl: `https://skovhus.github.io`,
  description:
    'Portfolio, blog, talks, discography, and a collection of random bits and pieces by full-stack engineer Kenneth Skovhus.',
  title: 'Kenneth Skovhus',
}

export default function SEO({ description, image, meta, pageTitle }: Props) {
  const router = useRouter()
  const metaDescription = description || siteMetadata.description

  const { siteUrl, title: siteTitle } = siteMetadata
  const metaImageSrc = image || '/public/skovhus.jpg'
  const url = `${siteUrl}${router.pathname || '/'}`

  // FIXME: validate meta images
  //  if (!metaImageSrc.startsWith('https')) {
  //    throw new Error(`Invalid metaImageSrc ${metaImageSrc}`)
  //  }

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImageSrc,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: metaImageSrc,
        },

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@kenneth_skovhus`,
        },
        {
          name: `twitter:creator`,
          content: '@kenneth_skovhus',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: metaImageSrc,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
