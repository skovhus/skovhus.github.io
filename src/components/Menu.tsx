import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import NextLink from 'next/link'

import { BurgerIcon } from './BurgerIcon'

const MenuContainer = styled.div`
  user-select: none;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: var(--background-context-color);
`

const MenuContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const StyledLink = styled.a`
  color: white;
  padding: 20px;
  box-shadow: none;
  cursor: pointer;
`

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : ''
  }, [isOpen])

  const Link = ({ href, label }: { href: string; label: string }) => (
    <NextLink aria-label={`View ${label.toLowerCase()} page`} href={href}>
      <StyledLink onClick={() => setIsOpen(false)}>{label}</StyledLink>
    </NextLink>
  )

  return (
    <>
      <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <MenuContainer>
          <MenuContent>
            <Link href="/#posts" label="Blog" />
            <Link href="/#talks" label="Talks" />
            <Link href="/#oss" label="Open source" />
            <Link href="/#music" label="Music" />
            <Link href="/cv" label="CV" />
          </MenuContent>
        </MenuContainer>
      )}
    </>
  )
}
