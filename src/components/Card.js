import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #232931;
  border-radius: 7px;
  margin: 10px auto;
  max-width: 600px;

  &:hover {
    transition: 0.5s ease;
    background: #4c5158;
  }
`;

const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #232931;
`;

const CardBody = styled.div`
  padding: 0.75rem 1.25rem;
`;

function Card({ userId, id, title, body }) {
  return (
    <Container id={id}>
      {title && <CardHeader>{title}</CardHeader>}
      <CardBody>
        {userId && <h3>@{userId}</h3>}
        {body && <p>{body}</p>}
      </CardBody>
    </Container>
  );
}
export default Card;
