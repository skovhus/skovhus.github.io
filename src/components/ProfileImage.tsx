import React from 'react'
import NextImage from 'next/image'
import styled from '@emotion/styled'

import { rhythm } from '../libs/typography'

export const PROFILE_IMAGE_WIDTH = 70

const ImageContainer = styled.div`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${PROFILE_IMAGE_WIDTH}px;
  height: ${PROFILE_IMAGE_WIDTH}px;
  position: relative;
  flex-shrink: 0;
`

const RoundedImage = styled(NextImage)`
  border-radius: 100%;
`

export default function ProfileImage() {
  return (
    <ImageContainer>
      {/* Type instantiation is excessively deep and possibly infinite.
       // @ts-ignore*/}
      <RoundedImage
        src="/skovhus.jpg"
        alt={'Kenneth Skovhus'}
        layout="fill"
        objectFit="cover"
      />
    </ImageContainer>
  )
}
