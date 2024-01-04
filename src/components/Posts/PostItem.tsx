import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & {link: string}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: horizontal;
  border-style: solid;
  border-radius: 5px;
  border-color: gray;
  padding: 10px 10px;
  margin: 10px 10px;
`

const Title = styled.div`
  font-size: 20px;
  width: 50%;
`

const Date = styled.div`
  font-size: 20px;
  font-decoration: italic;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  category,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
        <Title>{title}</Title>
        <Date>{date}</Date>
    </PostItemWrapper>
  )
}

export default PostItem