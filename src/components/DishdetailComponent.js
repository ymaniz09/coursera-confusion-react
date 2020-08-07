import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import formatDate from '../util/date-utils'

class DishDetail extends Component {
  renderDish(selectedDish) {
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

  renderComments(commentsArray) {
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

  hasComments(selectedDish) {
    return selectedDish.comments && selectedDish.comments.length > 0
  }

  render() {
    if (this.props.selectedDish == null) {
      return (
        <div/>
      );
    }

    const selectedDish = this.props.selectedDish
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(selectedDish)}
          {this.hasComments(selectedDish) && this.renderComments(selectedDish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
