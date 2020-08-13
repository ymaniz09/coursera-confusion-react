import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishId: null
    };
  }

  onDishSelected(dishId) {
    this.setState({
      selectedDishId: dishId
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
