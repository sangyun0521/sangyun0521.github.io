import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostListItemType } from 'types/PostItem.types'
import PostItem from 'components/Posts/PostItem' 
import CategoryItem from 'components/Posts/CategoryItem' 

type PostListProps = {
    posts: PostListItemType[]
}

const Intro = styled.div`
  background-color: #222222;
  font-size: 16px;
  margin: 20px 20px;
  padding: 10px 10px;
`

const ContentWrapper = styled.div`
  display: flex;
  margin: 20px 20px;
`
const Content = styled.div`
    width: 100%;
`

const List = styled.div`
    width: 300px;
`

const CategoryTitle = styled.div`
    font-size: 30px;
    font-weight: 900;
    margin: 10px 10px;
`

const PostList: FunctionComponent<PostListProps> = function ({
    posts,
}) {
  return (
    <div>
        <Intro> 
        ❗ 공부 지식 축적 및 공유<br/>
        - 공부한 내용을 정리해서 다른 사람에게 설명 할 수 있을 정도로 기록<br/>
        - 개발을 하며 공부한 내용<br/>
        - 논문을 읽으며 공부한 내용<br/>
        </Intro>
        <ContentWrapper>
            <List>
              <CategoryItem category="Papers">Papers</CategoryItem>
              <CategoryItem category="Machine Learning">Machine Learning</CategoryItem>
              <CategoryItem category="Computer Science">Computer Science</CategoryItem>
              <CategoryItem category="Web">Web</CategoryItem>
            </List>
            <Content>
              <CategoryTitle>Papers</CategoryTitle>
              {posts
                .filter((post) => post.node.frontmatter.category === "Paper")
                .map(
                  ({node: {id, fields: {slug}, frontmatter}}: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug}></PostItem>
                  ),
              )}
              <CategoryTitle>Machine Learning</CategoryTitle>
              {posts
                .filter((post) => post.node.frontmatter.category === "Machine Learning")
                .map(
                  ({node: {id, fields: {slug}, frontmatter}}: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug}></PostItem>
                  ),
              )}               
              <CategoryTitle>Computer Science</CategoryTitle>
              {posts
                .filter((post) => post.node.frontmatter.category === "Computer Science")
                .map(
                  ({node: {id, fields: {slug}, frontmatter}}: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug}></PostItem>
                  ),
              )}
              <CategoryTitle>Web</CategoryTitle>
              {posts
                .filter((post) => post.node.frontmatter.category === "Web")
                .map(
                  ({node: {id, fields: {slug}, frontmatter}}: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug}></PostItem>
                  ),
              )}
            </Content>
        </ContentWrapper>
    </div>
  )
}

export default PostList

