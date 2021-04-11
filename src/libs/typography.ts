import Typography from 'typography'
import baseTheme from 'typography-theme-wordpress-2016'

baseTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    '.gatsby-resp-image-figcaption': {
      textAlign: 'center',
      fontSize: '0.8rem',
    },
    ul: {
      marginLeft: '2rem !important',
    },
    blockquote: {
      fontSize: '1em',
    },
    a: {
      color: 'var(--color-accent)',
    },
    'mark,ins': {
      background: 'var(--color-accent)',
    },
    'h1,h2,h3,h4': {
      fontWeight: 300,
    },
    h2: {
      fontSize: '1.6rem',
    },
  }
}

delete baseTheme.googleFonts

const typography = new Typography(baseTheme)

export default typography
export const { rhythm } = typography
export const { scale } = typography
