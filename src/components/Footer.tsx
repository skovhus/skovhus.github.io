import React from 'react'
import styled from '@emotion/styled'

import ExternalLink from './ExternalLink'

const StyledFooter = styled.footer`
  text-align: center;
  color: white;
  font-size: 10px;
  padding: 30px;
  background: var(--background-context-image) center center;

  @media print {
    display: none;
  }
}
`

const SvgIcon = styled.svg`
  height: 30px;
  fill: #eee;
  padding-right: 15px;

  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  transition-duration: 0.5s;
  transition-property: fill transform;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    fill: #fff;
  }

  &:hover,
  :focus,
  :active {
    transform: translateY(-4px);
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        {/* Icons from https://simpleicons.org/ */}

        <ExternalLink href="https://github.com/skovhus" noUnderline>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
          </SvgIcon>
        </ExternalLink>

        <ExternalLink href="https://twitter.com/kenneth_skovhus" noUnderline>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <path
              d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
              fillRule="nonzero"
            />
          </SvgIcon>
        </ExternalLink>

        <ExternalLink href="https://medium.com/@skovhus" noUnderline>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z" />
          </SvgIcon>
        </ExternalLink>

        <ExternalLink href="spotify:user:113185320" noUnderline>
          <SvgIcon role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </SvgIcon>
        </ExternalLink>

        <ExternalLink href="https://www.linkedin.com/in/skovhus" noUnderline>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <path
              d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
              fillRule="nonzero"
            />
          </SvgIcon>
        </ExternalLink>

        <ExternalLink href="mailto:kenneth.skovhus@gmail.com" noUnderline>
          <SvgIcon role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
          </SvgIcon>
        </ExternalLink>
      </div>
    </StyledFooter>
  )
}
