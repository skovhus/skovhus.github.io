import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from '../libs/typography'
import ProfileImage from './ProfileImage'

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

export default function BlogBio() {
  return (
    <Container>
      <ProfileImage />
      <p>
        Kenneth Skovhus is a full-stack engineer and music recording enthusiast from
        Copenhagen, Denmark.
        {` `}
        <a href={`https://twitter.com/kenneth_skovhus`}>Follow him on Twitter</a>
      </p>
    </Container>
  )
}
