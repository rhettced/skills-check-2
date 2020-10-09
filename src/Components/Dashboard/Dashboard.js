import React, {Component} from 'react';
import Product from '../Product/Product';
import Axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            inventory: [],
            currentSelect: null
          }
          this.getAllInv = this.getAllInv.bind(this);
    }


    componentDidMount(){
        this.getAllInv();
      }
      

      getAllInv() {
        Axios.get('/api/inventory')
        .then( res => {
          //console.log(res);
          this.setState({inventory: res.data})
        })
        .catch(err => console.log(err))
      }



    deleteProduct = (id) =>{
        Axios.delete(`/api/product/${id}`)
        .then(res => {
            this.setState( {inventory: res.data } )
            this.props.getAllInvFn();
          })
          .catch(err => console.log(err))
          //console.log(this.props.inventory.id);
    }

    render(){

        //console.log(this.props);
        const displayInventory = this.state.inventory.map((el,i) => {
            return <Product key={i} 
                    name={el.name} 
                    price={el.price} 
                    img={el.img} 
                    id={el.id}
                    deleteProductFn={this.deleteProduct}
                    editButtonFn={this.props.editButtonFn}/>
        })

        return(
            <div className='main-shelf'>
                {displayInventory}
            </div>

        );
    }

}