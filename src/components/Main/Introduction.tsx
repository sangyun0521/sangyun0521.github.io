import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { Link } from 'gatsby'

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
`
const Element = styled.div`
  font-size: 20px;
  font-weigth: 400;
  padding: 5px 35px;
`

const Section = styled.div`
  padding: 25px 0px;
`

const Head = styled.div` 
  font-size: 25px;
  font-weight: 700;
`



const Introduction: FunctionComponent = function () {
  return (
    <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Software Engineer Sangyun Lee</Title>
        </div>
        <Section>
          <Sentence>Data기반 AI를 활용해 편리한 사회를 만드는 개발자</Sentence>
          <Sentence>부족한 것을 공부하는 개발자</Sentence>
          <Sentence>사람들이 필요로 하는 서비스를 개발하는 개발자</Sentence>
          <Sentence>기술 스텍을 한정 짓지 않고 필요한게 있으면 배우면서 개발하는 것을 좋아합니다!</Sentence>
        </Section>
        <Section>
            <Head>🎓 Education</Head>
            <Element>Chung-Ang University, College of Software</Element>
            <Element>Bachelor's of Computer Science and Engineering</Element>
            <Element>2018.03 ~ 2024.02</Element>
        </Section>
        <Section>
            <Head>💻 Experiences</Head>
            <Element> VLLAB Undergraduate Research Intern </Element>
            <Element> University MakeUs </Element>
        </Section>
        <Section>
            <Head>🛠️ Tech Stacks</Head>
            <Element>Java, Python, C, SQL, SpringBoot, Flutter, PyTorch</Element>
        </Section>
        <Section>
            <Head>
                <Link to='/projects'>To Projects</Link>
            </Head>
        </Section>
    </Wrapper>
   

  )
}

export default Introduction