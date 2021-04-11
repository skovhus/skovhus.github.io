import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { rhythm } from '../libs/typography'

const SPACING = rhythm(2 / 4)

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: ${SPACING};
  align-items: stretch;
`

const Link = styled.a`
  color: inherit;
  display: flex;
  flex-direction: column;

  box-shadow: 0.8px 0.9px 3px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 1px 8px 20px rgba(0, 0, 0, 0.3);
  }
`

const InfoContainer = styled.div`
  padding: 0 ${SPACING} ${SPACING} ${SPACING};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 70%;
  border-top: 1px solid #eee;
`

const Title = styled.div`
  font-weight: bold;
  margin-top: ${SPACING};
  margin-bottom: ${SPACING};
`

const DISCOGRAPHY_DATA = [
  {
    linkTo: 'https://open.spotify.com/album/5m2T9VPMmzXIR3zXSkiVDz',
    title: 'Freddy and the Phantoms: "First Blood Universe" (2019)',
    subTitle: 'Engineering, co-production',
    image: '/discography/freddy-first-blood-universe.jpeg',
  },
  {
    linkTo: 'https://open.spotify.com/album/4ggXw0iv9LuhuQVYfxII9H',
    title: 'Go for Gold: "Canned Goods Never Say Die" (2018)',
    subTitle: 'Bass, engineering, mix, production',
    image: '/discography/go-for-gold-canned-goods.jpeg',
  },

  {
    linkTo: 'https://open.spotify.com/album/7dRSHYf2qgKGXyUaa2uTI1',
    title:
      'Go for Gold: "Kunst – How to Be Something for Others, While Being Completely Self​-​Absorbed" (2014)',
    subTitle: 'Bass, engineering',
    image: '/discography/go-for-gold-kunst.jpeg',
  },
  {
    linkTo: 'https://open.spotify.com/album/6Kkgu8GsxGKgBIwQ6XMrpm',
    title: 'Go for Gold: EP (2011)',
    subTitle: 'Bass, engineering, mix, production',
    image: '/discography/go-for-gold-ep.jpeg',
  },
  {
    linkTo: 'https://open.spotify.com/album/7Iyek8NrjlyGUJ5fTw0BOA',
    title: 'Freddy and the Phantoms: "Leaving the Landscape" (2010)',
    subTitle: 'Engineering, mix, production',
    image: '/discography/freddy-leaving-the-landscape.jpeg',
  },
  {
    linkTo: 'https://soundcloud.com/cleomalone/sets/fear-comes-with-imagination-ep-2008',
    title: 'Cleo Malone: "Fear Comes With Imagination" (2008)',
    subTitle: 'Bass, engineering',
    image: '/discography/cleo-malone-fear.jpeg',
  },
]

export default function Discography() {
  return (
    <Container>
      {DISCOGRAPHY_DATA.map(({ image, linkTo, subTitle, title }, idx) => (
        <Link href={linkTo} target="_blank" rel="nofollow noopener noreferrer" key={idx}>
          <Image alt={title} src={image} layout="responsive" width={0} height={0} />
          <InfoContainer>
            <Title>{title}</Title>
            <div>{subTitle}</div>
          </InfoContainer>
        </Link>
      ))}
    </Container>
  )
}
