import React , { Component } from 'react';
import { Card, CardBody, CardText, CardImg,CardTitle, CardImgOverlay } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selecedtDish : null
        }
    }
    onDishSelect(dish) {
        this.setState({selectedDish:dish});
    }
    render(){

        const menu = this.props.dishes.map((dish) => {
            return( 
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                    < DishDetail dish = {this.state.selectedDish} />
            </div>
        );
    }
}
export default Menu;