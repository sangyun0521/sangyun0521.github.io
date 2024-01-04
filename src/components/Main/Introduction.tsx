import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  margin: 50px auto;
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`

const Sentence = styled.div`
  font-size: 20px;
  font-weigth: 400;
  line-height: 1.8;
`

const Element = styled.div`
  font-size: 15px;
  font-weigth: 400;
  padding: 5px 35px;
  line-height: 1.8;
  display: inline
`

const Section = styled.div`
  padding: 20px 0px;
`


const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage
}) {
  return (
    <Wrapper>
        <ProfileImage profileImage={profileImage}/>
        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Software Engineer Sangyun Lee</Title>
        </div>
        <Section>
          <Sentence>I aspire to become a Software Engineer who : </Sentence>
          <Element>  1. Creates a convinient world by utilizing data-driven AI, Software</Element><br/>
          <Element>  2. Is always eager to learn and improve where there's room</Element><br/>
          <Element>  3. Develops services that meet the needs of people</Element><br/>
          <Sentence>I enjoy learning and developing without limiting my tech stack. </Sentence> 
          <Sentence> If something is needed, I like to learn it on the go!</Sentence>
        </Section>
    </Wrapper>
  )
}

export default Introduction