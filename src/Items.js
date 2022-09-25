import "./items.css";
import React,{Component} from "react";

export default class ItemsList extends Component{
    state={
        title:'Black Holes: The Reith Lectures',
        author:'Stephen Hawking',
        pricePaperback: 99.00,
        priceEBook:19.00,
        discount:36,
        image:'https://m.media-amazon.com/images/I/91V2mnP754L._AC_UY327_QL65_.jpg'
    }

    render(){

        let x=this.state.pricePaperback - (this.state.pricePaperback * this.state.discount)/100
       
       return <React.Fragment>
        <span className="container">
        <span className="image">
            <img className="img" src={this.state.image} alt=""/>
        </span>

        <span className="names">
        <span className="title">
            <p>{this.state.title}</p>
        </span>
        <span className="author">
            <p>by {this.state.author}</p>
        </span>
        </span>

        <span className="price">
            <p>₹{x}</p>
            <span className="row" style={{gap:'0.3rem'}}>
            <p className="original">₹{this.state.pricePaperback}</p>
            <p>( {this.state.discount}% off )</p>
            </span>
        </span>
        <span onClick={this.onClickAddToCart} className="atc">
            <p>Add to cart</p>
        </span>
        </span>   

       </React.Fragment>
    }

    onClickAddToCart(){
        if(document.querySelector('.atc').innerHTML==="Added"){
            document.querySelectorAll('.atc').forEach((ele)=>{
                ele.innerHTML="Add to cart"
            })
        }
        else{
            document.querySelectorAll('.atc').forEach((ele)=>{
                ele.innerHTML="Added"
            })
        }
        document.querySelectorAll('.atc').forEach((ele)=>{
            ele.classList.toggle('added');
        })
    }
}





