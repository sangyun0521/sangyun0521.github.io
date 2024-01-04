import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Template from 'components/Common/Template'

const PageWrapper = styled.div`
  margin: 20px 100px;
`
const Title = styled.div`
  text-align : center;
`

const Block = styled.div`
  display: flex;
  margin: 40px 20px;
`

const Subtitle = styled.div`
  width: 25%;
  font-size: 20px;
  font-weight: 600;
`

const ContentsWrapper = styled.div`
  flex-grow: 1;
  font-size: 20px;
`

const TitleGroup = styled.div`
  margin: 0px 0px 30px 0px;
`

const ContentsGroup = styled.div`
  margin: 0px 0px 30px 20px;
`

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin: 20px 10px;
`

const DivisionLine = styled.div`
  border-top: 1px solid white;
  margin: 30px 0px;
`

const Text = styled.div`
  margin: 0px 0px 5px 0px;
`

const Italic  = styled.div`
  font-style: italic;
  font-size: 20px;
`
const Bold = styled.div`
  font-size : 25px;
  font-weight: 1000;
`

const AboutPage: FunctionComponent = function () {
  return (
        <Template>
          <PageWrapper>
            <Title>
              <Name>Sangyun Lee</Name>
              <p>99sansan@naver.com</p>
              <a href="https://github.com/99kenny">https://github.com/99kenny</a>
              <DivisionLine />
            </Title>
            <Block>
              <Subtitle>INTERESTS</Subtitle>
              <ContentsWrapper>
                Computer Vision, Deep Learning
              </ContentsWrapper>
            </Block>
            <Block>
              <Subtitle>EDUCATION</Subtitle>
              <ContentsWrapper>
                  <TitleGroup>
                  <Contents>
                    <Bold>Chung-Ang University</Bold>
                    <Italic>Mar.2018 - Feb.2024</Italic>
                  </Contents>
                  <Contents>
                    <Italic>Undergraduate</Italic>
                    <Italic>Seoul, Korea</Italic>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>• Bachelor of Computer Science and Engineering</Text>
                  </Contents>
                  <Contents>
                    <Text>• Total GPA 3.8 / 4.5</Text>
                  </Contents>
                  <Contents>
                    <Text>• Major GPA 4.08 / 4.5</Text>
                  </Contents>
                </ContentsGroup>
               </ContentsWrapper>
            </Block>
            <Block>
              <Subtitle>EXPERIENCE</Subtitle>
              <ContentsWrapper>
                <TitleGroup>
                  <Contents>
                    <Bold>Vision and Learning Laboratory, Chung-Ang University</Bold>
                    <Italic>Jan.2023 - Dec.2023</Italic>
                  </Contents>
                  <Contents>
                    <Italic>Undergraduate Research Intern (Advisor: Professor Eunwoo Kim)</Italic>
                    <Italic>Seoul, Korea</Italic>
                  </Contents>
                </TitleGroup>
                <TitleGroup>
                  <Contents>
                    <Bold>6th Logistic Support Group, ROK Army</Bold>
                    <Italic>May.2020 - Nov.2023</Italic>
                  </Contents>
                  <Contents>
                    <Italic>Unit Supply Sergeant</Italic>
                    <Italic>Namyangju, Korea</Italic>
                  </Contents>
                </TitleGroup>
              </ContentsWrapper>
            </Block>
            <Block>
              <Subtitle>PROJECTS</Subtitle>
              <ContentsWrapper>
                <TitleGroup>
                  <Contents>
                    <Bold>IGRIM</Bold>
                    <Italic>Mar.2023 - May. 2023</Italic>
                  </Contents>
                  <Contents>
                    <Italic>Pytorch, SpringBoot, Flutter, Google Cloud</Italic>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>• Application that creates illustration for a fairy tale book based on user-written story</Text>
                  </Contents>
                  <Contents>
                    <Text>• Fine-tuned Stable Diffusion model with DreamBooth</Text>
                  </Contents>
                  <Contents>
                    <Text>• Served Stable Diffusion model on Google Cloud</Text>
                  </Contents>
                </ContentsGroup>
                <TitleGroup>
                  <Contents>
                    <Bold>JUBGING</Bold>
                    <Italic>Sep.2022 - Dec. 2022</Italic>
                  </Contents>
                  <Contents>
                    <Italic>SpringBoot, Android, Arduino, Aws</Italic>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>• Android applications for plogging activity (picking up litter while jogging)</Text>
                  </Contents>
                  <Contents>
                    <Text>• Developed smart trash can that opens through bluetooth connection and send measured weights of the litter</Text>
                  </Contents>
                  <Contents>
                    <Text>• Developed backend APIs, frontend UIs</Text>
                  </Contents>
                </ContentsGroup>
                <TitleGroup>
                  <Contents>
                    <Bold>Chung-Ang University Alumni Network</Bold>
                    <Italic>May.2022 - Dec. 2022</Italic>
                  </Contents>
                  <Contents>
                    <Italic>SpringBoot</Italic>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>• Web service for alumni of Chung-Ang University, College of Software</Text>
                  </Contents>
                  <Contents>
                    <Text>• Developed backend APIs</Text>
                  </Contents>
                </ContentsGroup>
              </ContentsWrapper>
            </Block>
            <Block>
              <Subtitle>EXTRA CURRICULAR </Subtitle>
              <ContentsWrapper>
                <TitleGroup>
                  <Contents>
                    <Bold>University MakeUs</Bold>
                    <Italic>Mar.2022 - Aug. 2022</Italic>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>• Server, SpringBoot study</Text>
                  </Contents>
                  <Contents>
                    <Text>• Project Leader for SpringBoot project</Text>
                  </Contents>
                </ContentsGroup>
              </ContentsWrapper>
            </Block>
            <Block>
              <Subtitle>AWARDS & HONORS</Subtitle>
              <ContentsWrapper>
                <TitleGroup>
                  <Contents>
                    <Bold>Department Secondary Honor Scholarship</Bold>
                    <Italic>Chung-Ang University, 2023 Spring (top 10% of class)</Italic>
                  </Contents>
                </TitleGroup>
                <TitleGroup>
                  <Contents>
                    <Bold>Department Honor Scholarship</Bold>
                    <Italic>Chung-Ang University, 2023 Fall (top 1 of class)</Italic>
                  </Contents>
                </TitleGroup>
              </ContentsWrapper>
            </Block>
            <Block>
              <Subtitle>COMPETENCES</Subtitle>
              <ContentsWrapper>
                <TitleGroup>
                  <Contents>
                    <Bold>Languages</Bold>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>•- Native in Korean</Text>
                  </Contents>
                  <Contents>
                    <Text>• IBT TOEFL: 102 (Reading: 29, Listening: 28, Speaking: 24, Writing: 21)</Text>
                  </Contents>
                  <Contents>
                    <Text>• TOEIC: 945</Text>
                  </Contents>
                </ContentsGroup>
                <TitleGroup>
                  <Contents>
                    <Bold>Techniques</Bold>
                  </Contents>
                </TitleGroup>
                <ContentsGroup>
                  <Contents>
                    <Text>• Python, Java, C, SQL, Pytorch, SpringBoot, Flutter, Arduino</Text>
                  </Contents>
                </ContentsGroup>
              </ContentsWrapper>
            </Block>
          </PageWrapper>
        </Template>
  )
}

export default AboutPage