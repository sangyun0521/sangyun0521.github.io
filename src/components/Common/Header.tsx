import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: auto;
  padding: 25px 25px; 
  color: white;
  background-color: #29323c;
`

const MenuWrapper = styled.div`
  margin-left: auto;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  display: flex;
`

const Item = styled.div`
  margin: 0px 10px;
`

const TitleWrapper = styled.div`
  fonst-size: 25px;
  font-weight: 1000;
  text-align: center;
  line-height: 1.5
`


const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <TitleWrapper>Sangyun's Blog</TitleWrapper>
      <MenuWrapper>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>  
          <Link to="/projects">Projects</Link>
        </Item>
        <Item>
          <Link to="/posts">Posts</Link>
        </Item> 
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
