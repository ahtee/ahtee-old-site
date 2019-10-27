import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import Loading from './Loading'
import ErrorFallback from './ErrorFallback'
import MediaSection from './MediaSection'
import { Row, Col } from 'react-bootstrap'

const historicalMoments = [
  {
    title: 'Computer Information Technology',
    description:
      'Attended Northern Kentucky University first in August of 2010.',
  },
  {
    title: 'Frontend Web Developer',
    description:
      'Upon graduation, I accepted a role as a Web Developer working on features for an AngularJS application in Covington, KY. I worked there for a year until accepting a Site Reliability role at General Electric.',
  },
]

function Timeline() {
  return (
    <Row>
      <Col>
        <ErrorBoundary fallback={ErrorFallback}>
          <React.Suspense fallback={<Loading />}>
            <ul className="list-unstyled">
              {historicalMoments.map(moment => (
                <MediaSection
                  title={moment.title}
                  description={moment.description}
                />
              ))}
            </ul>
          </React.Suspense>
        </ErrorBoundary>
      </Col>
    </Row>
  )
}
export default Timeline
