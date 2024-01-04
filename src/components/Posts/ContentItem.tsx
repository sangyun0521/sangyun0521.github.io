import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'


const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;
  background-color: #29323c;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const ContentItem: FunctionComponent<string> = function (category) {
  return (
    <PostItemWrapper>
        {categories}
    </PostItemWrapper>
  )
}

export default ContentItem