import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        const commentsList = comments.map((comment)=>{return(
                <ListGroupItem  key={comment.id} >
                    <p>{comment.comment}</p>
                    <p>{comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </ListGroupItem>
        );});
        return(commentsList);
    }

    render(){
        if(this.props.dish !=null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ListGroup flush>
                            {this.renderComments(this.props.dish.comments)}
                        </ListGroup>
                    </div>
                </div>

            );
        }else{
            return(<div></div>);
        }
    }
}

export default DishDetail;