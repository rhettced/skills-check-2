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

    componentDidMount(){
        this.props.getAllInvFn();
    }

    addProduct = () => {
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
                <div>
                    <button onClick={this.cancelbtn}> Cancel </button>
                    <button onClick={this.addProduct}> Add to Inventory </button>
                </div>
            </div>
        );
    }

}