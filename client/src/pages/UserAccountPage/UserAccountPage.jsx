import { useEffect, useState } from 'react';
import { TaskApi } from '../../entities/TaskApi';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function UserAccountPage({ user }) {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col key={user.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card className="h-100">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">Мой аккаунт</h3>
              </Card.Header>

              <Card.Body>
                <Card.Title className="fs-6">
                  <h5>ID пользователя: {user.id}</h5>
                </Card.Title>
                <Card.Text>
                  {/* <strong>Название: </strong> <br />
                      {meetup.description.length > 50
                        ? `${meetup.description.substring(0, 50)}...`
                        : meetup.description}
                      <br /> */}
                  <strong>Имя пользователя:</strong> {user.username} <br />
                  {/* <strong>Участники:</strong> {meetup.registeredCount}/
                      {meetup.maxParticipants} */}
                  {/* <br /> */}
                  <strong>Email пользователя: </strong> {user.email} <br />
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center mt-3 mb-3"></div>
              <div className="d-flex justify-content-center mt-3 mb-3"></div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );

  // return <div>UserAccountPage</div>;
}
