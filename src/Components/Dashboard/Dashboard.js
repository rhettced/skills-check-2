import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{

    render(){

        //console.log(this.props.inventory);
        const displayInventory = this.props.inventory.map((el,i) => {
            return <Product key={i} name={el.name} price={el.price} img={el.img}/>
        })

        return(
            <div className='main-shelf'>
                {displayInventory}
            </div>

        );
    }

}