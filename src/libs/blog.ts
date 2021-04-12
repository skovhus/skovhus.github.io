import matter from 'gray-matter'
import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'
import readingTime from 'reading-time'

const postsDirectory = join(process.cwd(), 'src', 'content', 'markdown', 'blog')

export type Post = {
  slug: string
  frontmatter: {
    date: string
    isoDate: string
    description: string
    devToLink?: string
    featuredImage?: string
    title: string
  }
  excerpt: string | undefined
  content: string
  timeToRead: number
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}/index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content, excerpt } = matter(fileContents, { excerpt: true })
  const isoDate = data.date
  const date = format(parseISO(isoDate), 'MMMM dd, yyyy')

  // FIXME: static validation
  const frontmatter: any = { ...data, date, isoDate }

  // if (!excerpt) {
  //   throw new Error(`excerpt not found for ${slug}`)
  // }
  //

  const { description, title } = frontmatter

  if (!description || !title) {
    throw new Error(`missing description or title on post ${slug}`)
  }

  return {
    slug: realSlug,
    frontmatter,
    content,
    excerpt,
    timeToRead: Math.round(readingTime(content).minutes),
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      post1.frontmatter.isoDate > post2.frontmatter.isoDate ? -1 : 1
    )
  return posts
}
