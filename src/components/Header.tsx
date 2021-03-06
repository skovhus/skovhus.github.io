import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import ProfileImage from './ProfileImage'
import { Menu } from './Menu'
import { useWindowSize } from '../utils/useWindowSize'
import { PageWidthContainer } from './PageContainer'

const StyledHeader = styled.header`
  background: var(--background-context-image);
  padding: 10px 0;
`

const Title = styled.h1`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
  color: white;
`

const MobileTitle = styled.h1`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  color: white;
`

const StyledNav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  height: 80px;
`

const BackArrow = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  margin-left: 10px;
`

const HeaderLink = ({
  children,
  to,
  style = {},
}: {
  children: React.ReactNode
  to: string
  style?: React.CSSProperties
}) => (
  <Link
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      color: 'inherit',
      ...style,
    }}
    to={to}
  >
    {children}
  </Link>
)

type Props = {
  showIntro: boolean
}

export default function Header({ showIntro }: Props) {
  const windowSize = useWindowSize()

  const intro =
    windowSize.width >= 600 ? (
      <>
        <ProfileImage />
        <Title>
          Kenneth Skovhus. 👋
          <br />
          Software developer based in Copenhagen.
        </Title>
      </>
    ) : (
      <>
        <ProfileImage />
        <MobileTitle>Kenneth Skovhus 👋</MobileTitle>
      </>
    )

  return (
    <StyledHeader>
      <PageWidthContainer>
        <StyledNav>
          <HeaderLink
            to={'/'}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {showIntro ? intro : <BackArrow />}
          </HeaderLink>
          <div style={{ flexGrow: 1 }} />
          <Menu />
        </StyledNav>
      </PageWidthContainer>
    </StyledHeader>
  )
}
