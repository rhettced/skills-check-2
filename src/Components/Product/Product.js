import React, {Component} from 'react';

export default class Product extends Component{

    render(){
        //console.log(this.props.id);
        return(
            <div className='single-prod'>
                <img src={this.props.img}/>
    
                <div>
                    <p>{this.props.name}</p>
                    <p>${this.props.price}</p>
                    <button onClick={() => this.props.deleteProductFn(this.props.id)}>Delete</button>
                    <button>Edit</button>
                </div>
                   
            </div>
        );
    }

}