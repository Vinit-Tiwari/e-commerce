import React,{Component} from "react";
import './cart.css'
import Product from './product'

export default class Cart extends Component{
    state={
        title:'Black Holes: The Reith Lectures',
        author:'Stephen Hawking',
        pricePaperback: 99.00,
        priceEBook:19.00,
        discount:36,
        image:'https://m.media-amazon.com/images/I/91V2mnP754L._AC_UY327_QL65_.jpg'
    }

    render(){
        return <React.Fragment>
            <span className="row container-1">
                <span className="img-1">
                    <img height={'120rem'} src={this.state.image} alt=""/>
                </span>
                <span className="row descrip">
                    <span className="column">
                    <span className="title">{this.state.title}</span>
                    <span className="author">by {this.state.author}</span>
                    <span className="price">
                        <p>₹{Product.x}</p>
                        <p>₹{this.state.pricePaperback} ( {this.state.discount}% off )</p>
                    </span>
                    </span>
                    <span className="delete"></span>
                </span>
            </span>
        </React.Fragment>
    }
}