import React from 'react'
import { Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
const CardImage = React.lazy(() => import('../components/CardImage'))
const Header = React.lazy(() => import('../components/Header'))

const devTools = [
  {
    src: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
    title: 'React',
    description:
      'Deep understanding of React and able to deploy production-ready applications to the Cloud.',
    buttonText: 'React Projects',
    buttonVariant: 'primary',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=react',
    border: 'primary',
    external: true,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
    title: 'Vue',
    description:
      'High-level understanding of Vue, able to participate in development of new features.',
    buttonText: 'Vue Projects',
    buttonVariant: 'success',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=vue',
    border: 'success',
    external: true,
  },
  {
    title: 'JavaScript',
    description:
      'Understanding of ES6+ features and their tradeoffs. Knowledgeable about asynchronous JavaScript.',
    buttonText: 'JS Projects',
    buttonVariant: 'warning',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=javascript',
    border: 'warning',
    external: true,
  },
]

const certifications = [
  {
    src: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
    title: 'AWS Solutions Architect',
    description:
      'Familiar with the available toolset provided by AWS and the best practices for deployment.',
    buttonText: 'View Certification',
    buttonVariant: 'warning',
    buttonLink:
      'https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-09-21&ci=AWS00577397',
    border: 'warning',
    external: true,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
    title: 'AWS Developer',
    description: 'Understands the developer suite of products offered by AWS.',
    buttonText: 'View Certification',
    buttonVariant: 'warning',
    buttonLink:
      'https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-11-15&ci=AWS00577397',
    border: 'warning',
    external: true,
  },
  {
    src: "",
    title: 'Azure Administrator',
    description: 'Studying to become a certified Azure Administrator! Come back soon to view certification!',
    buttonText: 'Coming Soon',
    buttonVariant: 'primary',
    buttonLink: '/',
    border: 'primary',
    external: false
  }
]

const ShadedContentContainer = styled.main`
  padding: 3rem 0;
  background: #F8f8f8;
`;

const ContentContainer = styled.main`
  padding: 3rem 0;
`;

const MainContent = styled.div`
  max-width: 1024px;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin: 0px auto;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <div>
      <Helmet>
        <title>otte.io</title>
        <meta name="description" content="otte.io welcome" />
      </Helmet>
      <Header
        title="Ben Otte"
        tagline="Seeking new opportunities! Frontend web developer who is certified in AWS Cloud Services. Currently a Site Reliability Engineer at General Electric."
      ></Header>
      <ContentContainer>
        <MainContent>
          <h3>Front End</h3>
          <p>
            Experienced in front-end development frameworks with expertise in
            JavaScript, HTML5, CSS3, and React.js. Check out some projects on my{' '}
            <a href="https://github.com/ahtee">GitHub</a>.
          </p>
          <FlexRow>
            {devTools.map((tool, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <CardImage
                  src={tool.src}
                  title={tool.title}
                  description={tool.description}
                  buttonText={tool.buttonText}
                  buttonVariant={tool.buttonVariant}
                  buttonLink={tool.buttonLink}
                  border={tool.border}
                  external={tool.external}
                />
              </Col>
            ))}
          </FlexRow>
        </MainContent>
      </ContentContainer>
      <ShadedContentContainer>
        <MainContent>
          <h3>Cloud</h3>
          <p>Knowledgeable about Cloud platforms, site reliability, DevOps tools, configuration management, monitoring, resource management, templating, and more...</p>
          <FlexRow>
            {certifications.map((cert, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <CardImage
                  src={cert.src}
                  title={cert.title}
                  description={cert.description}
                  buttonText={cert.buttonText}
                  buttonVariant={cert.buttonVariant}
                  buttonLink={cert.buttonLink}
                  border={cert.border}
                  external={cert.external}
                />
              </Col>
            ))}
          </FlexRow>
        </MainContent>
      </ShadedContentContainer>
    </div>
  )
}
export default Home
