import React, { Component } from 'react';
import Axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            img: ''
        }
    }

    nameInput = (val) => {
        this.setState({ name: val });
    }

    priceInput = (val) => {
        this.setState({ price: val });
    }

    imgInput = (val) => {
        this.setState({ img: val })
    }

    cancelbtn = () => {
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    componentDidUpdate(prevProps){

        if(prevProps.match.params.id !== this.props.match.params.id && this.props.match.params.id !== null){
            this.getSingleInv();
        }
        
    }
 
    getSingleInv = () => {
        Axios.get(`/api/inventory/${this.props.match.params.id}`)
        .then( res => {
            console.log(this.props.match.params.id)
          console.log(res.data);
          this.setState({name: res.data[0].name, price: res.data[0].price, img: res.data[0].img})
        })
        .catch(err => console.log(err))
      }


    
    //keep this pretty sure it's good except for the set state part
      editOnForm = (productObj) =>{
        const {id, name, img, price} = productObj
        Axios.put(`/api/product/${id}`,{name,img,price})
        .then(res => {
          this.setState({inventory: res.data})
        })
        .catch(err => console.log(err))
      }


    addProduct = () => {
        if(this.props.match.params.id>0){
            this.getSingleInv();
            const {name,price,img} = this.state;
            const {id} = this.props.match.params;
            this.editOnForm({id,name,price,img})
            this.props.history.push('/dashboard')
            return this.setState({name:'', price: '', img: ''});
        }


        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        console.log(newProduct);
        if (this.state.price === '' || this.state.name === '' || this.state.img === '') {
            console.log('add to the empty field');
        } else{
            Axios.post('/api/product', newProduct)
            .then(res => {
                console.log(res.data)
                this.setState({ inventory: res.data })
                
            })
            .catch(err => console.log(err))
            this.cancelbtn();
            
        }
       
    }


    render() {
        console.log(this.props)
        return (
            <div className='form-main'>
                <img src={this.state.img} alt='product' />
                <h5>Image URL:</h5>
                <input onChange={(e) => this.imgInput(e.target.value)}
                    value={this.state.img} />
                <h5>Product Name:</h5>
                <input onChange={(e) => this.nameInput(e.target.value)}
                    value={this.state.name} />
                <h5>Price:</h5>
                <input onChange={(e) => this.priceInput(e.target.value)}
                    value={this.state.price} />
                <div className='the-buttons'>
                    <button onClick={this.cancelbtn}> Cancel </button>
                    <button onClick={this.addProduct}> {this.props.match.params.id  ? `Save Changes` : `Add to Inventory`}</button>
                </div>
            </div>
        );
    }

}