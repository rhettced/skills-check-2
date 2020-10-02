import React, {Component} from 'react';
import Product from '../Product/Product';
import Axios from 'axios'

export default class Dashboard extends Component{

    // componentDidUpdate(prevState,prevProps){
    //     if(prevProps.this.props.inventory != this.props.inventory){
    //         return this.props.inventory;
    //     }
    // }

    deleteProduct = (id) =>{
        Axios.delete(`/api/product/${id}`)
        .then(res => {
            this.setState( {inventory: res.data } )
          })
          .catch(err => console.log(err))
          //console.log(this.props.inventory.id);
    }

    render(){

        //console.log(this.props.inventory);
        const displayInventory = this.props.inventory.map((el,i) => {
            return <Product key={i} 
                    name={el.name} 
                    price={el.price} 
                    img={el.img} 
                    id={el.id}
                    deleteProductFn={this.deleteProduct}/>
        })

        return(
            <div className='main-shelf'>
                {displayInventory}
            </div>

        );
    }

}