import React from 'react'

const ExternalLink = ({
  children,
  noUnderline = false,
  href,
}: {
  children: JSX.Element | string
  noUnderline?: boolean
  href: string
}) => (
  <a
    target="_blank"
    rel="nofollow noopener noreferrer"
    href={href}
    style={{
      boxShadow: noUnderline ? 'none' : 'default',
    }}
  >
    {children}
  </a>
)

export default ExternalLink
