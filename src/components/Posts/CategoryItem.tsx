import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'


const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: 20px;
  color: grey;
  margin: 10px 10px;
  text-decoration: underline;
`

const CategoryItem: FunctionComponent<string> = function ({category}) {
  return (
    <PostItemWrapper>
      {category}
    </PostItemWrapper>
  )
}

export default CategoryItem