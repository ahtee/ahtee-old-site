import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Loading from '../components/Loading'
import me from '../images/me.jpg'
import Timeline from '../components/Timeline'
const CardImage = React.lazy(() => import('../components/CardImage'))
const Header = React.lazy(() => import('../components/Header'))
const HeaderImage = React.lazy(() => import('../components/HeaderImage'))

const devTools = [
  {
    src: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
    title: 'React',
    description:
      'Understands React and able to deploy production-ready applications to the Cloud.',
    buttonText: 'React Projects',
    buttonVariant: 'primary',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=react',
    border: 'primary',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
    title: 'Vue',
    description:
      'High-level understanding of Vue and able to participate in development of new features. Uses knowledge learned from using React.',
    buttonText: 'Vue Projects',
    buttonVariant: 'success',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=vue',
    border: 'success',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
    title: 'Amazon Web Services',
    description:
      'Achieved the AWS Certified Solutions Architect Associate certification. Familiar with the available toolset AWS has to offer and best practices for deployment.',
    buttonText: 'SA-A Certification',
    buttonVariant: 'warning',
    buttonLink: '/',
    border: 'warning',
  },
]

function Home() {
  return (
    <div>
      <Helmet>
        <title>otte.io</title>
        <meta name="description" content="otte.io welcome" />
      </Helmet>
      <Header
        title="Ben Otte"
        tagline="Frontend web developer, experienced and certified in AWS Cloud Services, JavaScript thinker, former musician, and always learning."
      >
        <React.Suspense fallback={<Loading />}>
          <HeaderImage src={me} alt="Ben Otte" width="200" height="270" />
        </React.Suspense>
      </Header>
      <Container>
        <h3>Development tools</h3>
        <Row>
          {devTools.map((tool, index) => (
            <Col md={4} sm={6} xs={12}>
              <CardImage
                key={index}
                src={tool.src}
                title={tool.title}
                description={tool.description}
                buttonText={tool.buttonText}
                buttonVariant={tool.buttonVariant}
                buttonLink={tool.buttonLink}
                border={tool.border}
              />
            </Col>
          ))}
        </Row>
        <h3>Career</h3>
        <Timeline />
      </Container>
    </div>
  )
}
export default Home
