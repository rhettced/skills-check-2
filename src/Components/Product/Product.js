import React, {Component} from 'react';

export default class Product extends Component{

    render(){
        return(
            <div className='single-prod'>
                <img src={this.props.img}/>
                <div>
                    <p>{this.props.name}</p>
                    <p>${this.props.price}</p>
                </div>
            </div>
        );
    }

}