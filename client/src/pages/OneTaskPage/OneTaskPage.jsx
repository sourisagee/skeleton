import { useEffect, useState } from 'react';
import { TaskApi } from '../../entities/TaskApi';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function OneTaskPage({ user, allTasks }) {
  const { taskId } = useParams();
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const getCurrentTask = async () => {
      const response = await TaskApi.getById(taskId);
      const taskData = response.data;
      setCurrentTask(taskData);
    };

    getCurrentTask();
  }, [taskId]);

  if (!currentTask) return <div>Поиск задачи...</div>;

  // return <div>OneTaskPage</div>;

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col key={currentTask.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="fs-6">
                  <h5>Задача №{currentTask.id}</h5>
                </Card.Title>
                <Card.Text>
                  {/* <strong>Название: </strong> <br />
                      {meetup.description.length > 50
                        ? `${meetup.description.substring(0, 50)}...`
                        : meetup.description}
                      <br /> */}
                  <strong>Название:</strong> {currentTask.title} <br />
                  {/* <strong>Участники:</strong> {meetup.registeredCount}/
                      {meetup.maxParticipants} */}
                  {/* <br /> */}
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
}
