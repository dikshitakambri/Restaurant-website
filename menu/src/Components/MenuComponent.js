import React , { Component } from 'react';
import { Media } from 'react';

Class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            dishes : [
                
            ]
        }
    }
    render(){

        const menu = this.state.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 mt-5"></div>
            );
        });
        return(
           <div className="container">
               <div className="row">
                   <Media list>
                       {menu}
                   </Media>
               </div>
           </div>
        );
    }
}
export default Menu;