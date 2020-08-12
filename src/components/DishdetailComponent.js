import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import formatDate from '../util/date-utils'

function RenderDish(selectedDish) {
  return (
    <div key={selectedDish.id} className="col-12 col-md-5 m-1">
      <Card>
        <CardImg src={selectedDish.image} alt={selectedDish.name}/>
        <CardBody>
          <CardTitle>{selectedDish.name}</CardTitle>
          <CardText>{selectedDish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments(commentsArray) {
  const comments = commentsArray.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author}, {formatDate(comment.date)}</p>
      </li>
    );
  })
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">{comments}</ul>
    </div>
  );
}

function hasComments(selectedDish) {
  return selectedDish.comments && selectedDish.comments.length > 0
}

const DishDetail = ({ selectedDish }) => {
  if (selectedDish == null) {
    return (
      <div/>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {RenderDish(selectedDish)}
          {hasComments(selectedDish) && RenderComments(selectedDish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
