import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

export default class Product extends Component{



    render(){
        //console.log(this.props.id);
        const {id,name,img,price} = this.props;
        return(
            <div className='single-prod'>
                <img src={img}/>
    
                <div>
                    <p>{name}</p>
                    <p>${price}</p>
                    <button onClick={() => this.props.deleteProductFn(this.props.id)}>Delete</button>
                    <Link to={`/edit/${id}`}>
                        <button>Edit</button>
                    </Link>
                </div>
                   
            </div>
        );
    }

}