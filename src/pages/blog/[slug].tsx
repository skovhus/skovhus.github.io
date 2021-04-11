// FIXME blog navigation

import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { getPostBySlug, getAllPosts, Post } from '../../libs/blog'

import BlogBio from '../../components/BlogBio'
import ExternalLink from '../../components/ExternalLink'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { rhythm, scale } from '../../libs/typography'
import { markdownToHtml } from '../../libs/markdown'

export const Title = styled.h1`
  margin-top: 3rem;
`

const Subtitle = styled.p`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const BlogNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const HorizontalLine = styled.hr`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
`

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content)

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

type Props = Post

export default function BlogPostTemplate({ slug, frontmatter, content }: Props) {
  //  const { previous, next, slug } = pageContext
  //  const { siteUrl } = data.site.siteMetadata
  const { date, description, devToLink, featuredImage, title } = frontmatter

  // post.timeToRead
  const featuredImageSrc = ''

  // const featuredImageSrc = featuredImage?.childImageSharp?.fixed
  //   ? `${siteUrl}${featuredImage.childImageSharp.fixed.src}`
  //   : undefined

  const twitterDiscussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://skovhus.github.io${slug}`
  )}`

  if (!description) {
    throw new Error('Expected blog description')
  }

  return (
    <Layout>
      <SEO description={description} image={featuredImageSrc} pageTitle={title} />

      <article>
        <Title>{title}</Title>
        <Subtitle>
          {date} • {0} minute read
        </Subtitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        Discuss this post <ExternalLink href={twitterDiscussUrl}>on Twitter</ExternalLink>
        {devToLink && (
          <>
            {' or '}
            <ExternalLink href={devToLink}>on DEV Community</ExternalLink>
          </>
        )}
        .
        <HorizontalLine />
      </article>

      <BlogBio />

      {/*
      <BlogNavigation>
      <li>
      {previous && (
        <Link href={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
        </Link>
        )}
        </li>
        <li>
          {next && (
            <Link href={next.fields.slug} rel="next">
              {next.frontmatter.title} →
              </Link>
          )}
          </li>
          </BlogNavigation>
          */}
    </Layout>
  )
}
