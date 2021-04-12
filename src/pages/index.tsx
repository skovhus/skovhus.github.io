import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import Discography from '../components/Discography'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { TALKS } from '../content/talks'
import { rhythm } from '../libs/typography'
import { getAllPosts, Post } from '../libs/blog'

const Heading = styled.h1`
  font-size: 2rem;
  margin-top: 5rem;
`

const NegativeHeadingSpacingHack = styled.div`
  margin-top: -1rem;
`

const HeadingSpacingHack = styled.div`
  margin-top: 3rem;
`

const LinkEntity = ({
  description,
  linkTo,
  subTitle,
  title,
}: {
  subTitle: string
  description: string
  linkTo: string
  title: string
}) => {
  const linkElement = linkTo.startsWith('http') ? (
    <ExternalLink href={linkTo} noUnderline>
      {title}
    </ExternalLink>
  ) : (
    <Link href={linkTo}>
      <a style={{ boxShadow: `none` }}>{title}</a>
    </Link>
  )

  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
          lineHeight: 1.4,
        }}
      >
        {linkElement}
      </h3>
      <small>{subTitle}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

type Props = { posts: Post[] }

export default function Index({ posts }: Props) {
  return (
    <Layout showHeaderIntro>
      <SEO />
      <p style={{ marginTop: '2rem' }}>
        I have been messing around with computers and music for as long as I remember.
        Building meaningful products together with talented people is my passion. I love
        mentoring, sharing knowledge, and excel in working full-stack with web
        technologies. MSc in Computer Science from the Technical University of Denmark.
      </p>
      <p>
        This is my portfolio where I gather random bits and pieces. I hope you find
        something useful in my attempt to fight digital sharecropping.
      </p>

      <NegativeHeadingSpacingHack />
      <Heading id="posts">I occasionally blog</Heading>
      <NegativeHeadingSpacingHack />
      {posts.map(post => {
        const { frontmatter, slug, timeToRead } = post
        const { date, description, title } = frontmatter

        return (
          <LinkEntity
            description={description}
            key={slug}
            linkTo={`/blog/${slug}`}
            subTitle={`${date} • ${timeToRead} minute read`}
            title={title}
          />
        )
      })}

      <Heading id="talks">I enjoy giving talks</Heading>
      <NegativeHeadingSpacingHack />
      {TALKS.map(talk => (
        <LinkEntity {...talk} key={talk.title} />
      ))}

      <Heading id="oss">I contribute to open source</Heading>
      <p>
        I&apos;m a strong advocate for giving back to the open source software community,
        that I depend on to do my job and projects.
      </p>
      <p>Highlights:</p>
      <ul>
        <li>
          <ExternalLink href="https://github.com/skovhus/jest-codemods">
            skovhus/jest-codemods
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/skovhus/css-modules-flow-types">
            skovhus/css-modules-flow-types
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://hatch.sh/">hatch.sh</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/mads-hartmann/bash-language-server">
            bash-language-server
          </ExternalLink>
          {` `}+ bash extensions for code editors
        </li>
        <li>
          <ExternalLink href="https://github.com/facebook/jest">jest</ExternalLink>
        </li>
      </ul>

      <Heading id="music">I play &amp; record music</Heading>
      <HeadingSpacingHack />
      <Discography />
    </Layout>
  )
}
