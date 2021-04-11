import styled from '@emotion/styled'
import { rhythm } from '../libs/typography'

export const PageWidthContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: 0 ${rhythm(3 / 4)};

  @media print {
    max-width: 100%;
  }
`
