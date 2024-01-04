import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  display: flex;
  padding: 100px 25px;
  justify-content : center;
  width: 100%; 
  color: white;
  background-color: #000000;

  font-size: 35px;
`

const Intro = styled.div`
  background-color: #222222;
  font-size: 16px;
  margin: 20px 20px;
  padding: 10px 10px;
`

const ContentWrapper = styled.div`
  display: flex;
`
const Content = styled.div`
  width: 300px;

`

const List = styled.div`
    width: 100%;
`


const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
        Posts
    </HeaderWrapper>
  )
}

export default Header

