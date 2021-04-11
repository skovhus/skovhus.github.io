module.exports = {
  siteMetadata: {
    siteUrl: `https://skovhus.github.io`,
    description:
      'Portfolio, blog, talks, discography, and a collection of random bits and pieces by full-stack engineer Kenneth Skovhus.',
    title: 'Kenneth Skovhus',
  },
  plugins: [
    // https://www.drewbolles.com/blog/how-to-easily-add-an-rss-feed-to-a-nextjs-site-without-writing-xml-templates

    `gatsby-plugin-feed`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kenneth Skovhus`,
        short_name: `Skovhus`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/skovhus.jpg`,
      },
    },
  ],
}
