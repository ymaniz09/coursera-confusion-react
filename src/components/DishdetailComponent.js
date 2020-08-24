import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import formatDate from '../util/date-utils'

function RenderDish({ dish }) {
  return (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card>
        <CardImg src={dish.image} alt={dish.name}/>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {formatDate(comment.date)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div/>
    )
  }
}

const DishDetail = (props) => {
  if (props.dish == null) {
    return (
      <div/>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish}/>
          <RenderComments comments={props.comments}/>
        </div>
      </div>
    );
  }
}

export default DishDetail;
